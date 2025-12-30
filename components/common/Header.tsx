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
  return (
    <header className="border-b bg-white shadow-sm">
      <div className="mx-auto max-w-7xl flex justify-between items-center px-6 py-4">
        
        <Link href={variant === "dashboard" ? "/dashboard" : "/"}>
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

        <div className="flex items-center gap-4">
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

          {variant === "dashboard" && (
            <>
              {user ? (
                <>
                  <span className="text-gray-700 font-medium">
                    {user.email}
                  </span>
                  <button
                    onClick={onLogout}
                    className="bg-gradient-to-r from-purple-600 to-blue-500
                    text-white px-4 py-2 rounded-lg font-medium
                    hover:opacity-90 transition shadow-lg"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  href="/auth/login"
                  className="bg-gradient-to-r from-purple-600 to-blue-500
                  text-white px-4 py-2 rounded-lg font-medium
                  hover:opacity-90 transition"
                >
                  Get Started
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </header>
  );
}
