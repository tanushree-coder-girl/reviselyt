"use client";

import Link from "next/link";
import Image from "next/image";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import Footer from "@/components/Footer";

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
      <header className="border-b bg-white shadow-sm">
        <div className="mx-auto max-w-6xl flex justify-between items-center px-6 py-4">
          {/* Left: Logo */}
          <Link href="/dashboard">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Reviselyt Logo"
                width={80}
                height={50}
                priority
              />
            </div>
          </Link>



          {/* Right: User Info + Theme Switcher */}
          <div className="flex items-center gap-4">
            {/* <ThemeSwitcher /> */}

            {user ? (
              <div className="flex items-center gap-4">
                <span className="text-gray-700 font-medium">{user.email}</span>

                <button
                  onClick={handleLogout}
                  className="bg-gradient-to-r from-purple-600 to-blue-500
             text-white px-4 py-2 rounded-lg
             font-medium hover:opacity-90 transition
             shadow-lg"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                href="/auth/login"
                className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition"
              >
                Get Started
              </Link>
            )}
          </div>
        </div>
      </header>

      {/* Main content */}
      <section className="flex-1 mx-auto w-full max-w-6xl p-6 min-h-screen">{children}</section>

      {/* Footer */}
      <footer className="border-t py-4 text-xs text-center text-gray-500">
        © {new Date().getFullYear()} Reviselyt · Open Source
      </footer>
    </main>
  );
}
