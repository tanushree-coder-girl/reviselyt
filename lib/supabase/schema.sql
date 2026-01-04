-- =========================================================
-- Reviselyt - Supabase Database Schema
-- =========================================================

-- Required extension for UUID generation
create extension if not exists "pgcrypto";

-- =========================================================
-- 1. Documents Table
-- Stores uploaded PDFs or pasted text
-- =========================================================
create table if not exists documents (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null,
  content text not null,
  file_url text,
  file_type text not null check (file_type in ('pdf', 'text')),
  document_hash text not null,
  created_at timestamptz default now()
);

create index if not exists documents_user_id_idx on documents(user_id);
create index if not exists documents_hash_idx on documents(document_hash);

-- =========================================================
-- 2. Summaries Table
-- Stores generated summaries and status
-- =========================================================
create table if not exists summaries (
  id uuid primary key default gen_random_uuid(),
  document_id uuid not null references documents(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  mode text default 'bullet' check (mode in ('bullet')),
  summary text,
  status text default 'pending' check (status in ('pending', 'completed', 'failed')),
  error text,
  created_at timestamptz default now()
);

create index if not exists summaries_user_id_idx on summaries(user_id);
create index if not exists summaries_document_id_idx on summaries(document_id);

-- =========================================================
-- 3. Summary Cache
-- Avoids duplicate Hugging Face API calls
-- =========================================================
create table if not exists summary_cache (
  document_hash text primary key,
  summary text not null,
  created_at timestamptz default now()
);

-- =========================================================
-- 4. Usage Limits
-- Tracks free-tier daily usage
-- =========================================================
create table if not exists usage_limits (
  user_id uuid primary key references auth.users(id) on delete cascade,
  pdf_summaries_today int default 0,
  text_summaries_today int default 0,
  last_reset timestamptz default now()
);

-- =========================================================
-- Row Level Security (RLS)
-- =========================================================
alter table documents enable row level security;
alter table summaries enable row level security;
alter table usage_limits enable row level security;

-- =========================================================
-- RLS Policies
-- =========================================================

-- Documents
create policy "Users can manage their own documents"
on documents
for all
using (auth.uid() = user_id);

-- Summaries
create policy "Users can manage their own summaries"
on summaries
for all
using (auth.uid() = user_id);

-- Usage Limits
create policy "Users can manage their own usage limits"
on usage_limits
for all
using (auth.uid() = user_id);

-- =========================================================
-- Auto-create usage_limits row for new users
-- =========================================================
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into usage_limits (user_id)
  values (new.id)
  on conflict do nothing;
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
after insert on auth.users
for each row execute procedure public.handle_new_user();

create unique index if not exists documents_hash_unique
on documents(document_hash);

create unique index if not exists summaries_document_unique
on summaries(document_id);


-- =========================================================
-- End of schema
-- =========================================================
