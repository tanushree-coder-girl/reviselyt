"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import CurrentYear from "@/components/common/CurrentYear";
import Header from "@/components/common/Header";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<{ email: string } | null>(null);
  const supabase = createClient();

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (data.user) setUser({ email: data.user.email ?? "" });
    };
    getUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) setUser({ email: session.user.email ?? "" });
      else setUser(null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [supabase]);


  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <Header variant="dashboard" user={user} onLogout={handleLogout} />
      {/* Main content */}
      <section className="flex-1 mx-auto w-full max-w-6xl p-6 min-h-screen">{children}</section>

      {/* Footer */}
      <footer className="border-t py-4 text-xs text-center text-gray-500">
        © <CurrentYear /> Reviselyt · Open Source
      </footer>
    </main>
  );
}
