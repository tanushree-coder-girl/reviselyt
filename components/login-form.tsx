"use client";

import { cn } from "@/lib/utils";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function LoginForm({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const supabase = createClient();
    setIsLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      router.push("/dashboard");
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen w-full bg-gradient-to-b from-purple-50 via-white to-blue-50">
      {/* Left Side: Logo + Branding */}
      <div className="hidden md:flex md:w-11/20 flex-col items-center bg-gradient-to-r from-purple-600 via-purple-500 to-blue-500 text-white justify-center px-6 md:px-10 space-y-4">
        <Image
          src="/logo.png"
          alt="Reviselyt Logo"
          width={120}
          height={40}
          className="mx-auto"
        />
        <h1 className="text-4xl font-extrabold bg-clip-text text-center max-w-xl">
          Welcome Back to Reviselyt
        </h1>
        <p className="text-lg md:text-xl  max-w-lg text-center">
          AI-powered last-minute revision at your fingertips. Upload your study material and get concise, visual summaries in seconds.
        </p>
      </div>

      {/* Right Side: Login Form */}
      <div className="flex w-full md:w-9/20 items-center justify-center px-6 md:px-8">
        <div className="w-full max-w-md">
          <Card className="bg-white/90 backdrop-blur-lg shadow-xl rounded-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl md:text-3xl font-extrabold">Login</CardTitle>
              <CardDescription className="text-gray-600 mt-1 md:mt-2">
                Enter your email to access your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="flex flex-col gap-4 md:gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email" className="text-gray-700">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>

                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password" className="text-gray-700">Password</Label>
                    <Link
                      href="/auth/forgot-password"
                      className="text-sm text-purple-600 hover:underline"
                    >
                      Forgot?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-white border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>

                {error && <p className="text-sm text-red-500">{error}</p>}

                <Button
                  type="submit"
                  className="bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold py-3 md:py-4 rounded-xl shadow-lg hover:opacity-90 transition-all"
                  disabled={isLoading}
                >
                  {isLoading ? "Logging in..." : "Login"}
                </Button>
              </form>

              <div className="mt-4 text-center text-gray-600 text-sm md:text-base">
                Don’t have an account?{" "}
                <Link href="/auth/sign-up" className="text-purple-600 font-medium hover:underline">
                  Sign Up
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
