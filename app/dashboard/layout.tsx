import { DeployButton } from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import { AuthButton } from "@/components/auth-button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/lib/utils";
import Link from "next/link";
import { Suspense } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen flex flex-col">
      <nav className="w-full border-b border-b-foreground/10">
        <div className="mx-auto max-w-6xl h-16 flex items-center justify-between px-5">
          <Link href="/dashboard" className="font-bold text-lg">
            Reviselyt
          </Link>

          <div className="flex items-center gap-4">
            <Link
              href="/dashboard/history"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              History
            </Link>

            {!hasEnvVars ? (
              <EnvVarWarning />
            ) : (
              <Suspense>
                <AuthButton />
              </Suspense>
            )}
          </div>
        </div>
      </nav>

      <section className="flex-1 mx-auto w-full max-w-6xl p-6">
        {children}
      </section>

      <footer className="border-t text-xs text-center py-6">
        <p>
          Built with ❤️ for students · Powered by Supabase
        </p>
        <div className="mt-2 flex justify-center">
          <ThemeSwitcher />
        </div>
      </footer>
    </main>
  );
}
