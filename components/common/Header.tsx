"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type HeaderProps = {
  variant?: "landing" | "dashboard";
  user?: { email: string } | null;
  onLogout?: () => void;
};

export default function Header({
  variant = "landing",
  user,
  onLogout,
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b bg-white shadow-sm">
      <div className="mx-auto max-w-6xl flex justify-between items-center px-6 py-4">
        <Link href={variant === "dashboard" ? "/dashboard" : "/"}>
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Reviselyt Logo"
              width={80}
              height={50}
              priority
              className="
        w-[60px] h-auto      
        sm:w-[70px] 
        md:w-[80px]     
      "
            />
          </div>
        </Link>

        {variant === "landing" && (
          <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
            <Link href="#features" className="hover:text-purple-600 transition">
              Features
            </Link>
            <Link href="#purpose" className="hover:text-purple-600 transition">
              Purpose
            </Link>
            <Link href="#use-case" className="hover:text-purple-600 transition">
              Use Case
            </Link>
            <Link href="#benefits" className="hover:text-purple-600 transition">
              Benefits
            </Link>
          </nav>
        )}

        <div className="hidden md:flex items-center gap-4">
          {variant === "landing" && (
            <>
              <Link
                href="/auth/login"
                className="text-gray-700 hover:text-purple-600 transition"
              >
                Sign In
              </Link>
              <Link
                href="/auth/login"
                className="bg-gradient-to-r from-purple-600 to-blue-500
                text-white px-4 py-2 rounded-lg font-medium
                hover:opacity-90 transition"
              >
                Get Started
              </Link>
            </>
          )}

          {variant === "dashboard" && user && (
            <>
              <span className="text-gray-700 font-medium">{user.email}</span>
              <button
                onClick={onLogout}
                className="bg-gradient-to-r from-purple-600 to-blue-500
                text-white px-4 py-2 rounded-lg font-medium
                hover:opacity-90 transition shadow-lg"
              >
                Logout
              </button>
            </>
          )}
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t bg-white shadow-sm">
          <div className="flex flex-col px-6 py-4 gap-4">
            {variant === "landing" && (
              <>
                <Link
                  href="#features"
                  className="text-gray-700 hover:text-purple-600 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Features
                </Link>
                <Link
                  href="#purpose"
                  className="text-gray-700 hover:text-purple-600 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Purpose
                </Link>
                <Link
                  href="#use-case"
                  className="text-gray-700 hover:text-purple-600 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Use Case
                </Link>
                <Link
                  href="#benefits"
                  className="text-gray-700 hover:text-purple-600 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Benefits
                </Link>
                <Link
                  href="/auth/login"
                  className="bg-gradient-to-r from-purple-600 to-blue-500
                  text-white px-4 py-2 rounded-lg font-medium text-center"
                  onClick={() => setMenuOpen(false)}
                >
                  Get Started
                </Link>
              </>
            )}

            {variant === "dashboard" && user && (
              <>
                <span className="text-gray-700 font-medium">{user.email}</span>
                <button
                  onClick={() => {
                    onLogout?.();
                    setMenuOpen(false);
                  }}
                  className="bg-gradient-to-r from-purple-600 to-blue-500
                  text-white px-4 py-2 rounded-lg font-medium text-center"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
