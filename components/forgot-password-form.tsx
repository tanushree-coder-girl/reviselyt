"use client";

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
import { useState } from "react";

export function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    const supabase = createClient();
    setIsLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/update-password`,
      });
      if (error) throw error;
      setSuccess(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="bg-white/90 backdrop-blur-lg shadow-xl rounded-2xl w-full max-w-md">
      {success ? (
        <>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl md:text-3xl font-extrabold">
              Check Your Email 📩
            </CardTitle>
            <CardDescription className="text-gray-600 mt-2">
              Password reset instructions sent
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-sm md:text-base text-gray-600 text-center">
              If an account exists with this email, you will receive a notice
              with instructions to reset your password.
            </p>

            <div className="mt-6 text-center">
              <Link
                href="/auth/login"
                className="text-purple-600 font-medium hover:underline"
              >
                Back to Login
              </Link>
            </div>
          </CardContent>
        </>
      ) : (
        <>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl md:text-3xl font-extrabold">
              Forgot Password
            </CardTitle>
            <CardDescription className="text-gray-600 mt-2">
              Enter your email to receive a reset link
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleForgotPassword} className="flex flex-col gap-5">
              {/* Email */}
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
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

              {/* Error */}
              {error && (
                <p className="text-sm text-red-500 text-center">{error}</p>
              )}

              {/* Submit */}
              <Button
                type="submit"
                disabled={isLoading}
                className="bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold py-3 rounded-xl hover:opacity-90 transition"
              >
                {isLoading ? "Sending..." : "Send Reset Link"}
              </Button>
            </form>

            {/* Footer */}
            <div className="mt-4 text-center text-sm text-gray-600">
              Remember your password?{" "}
              <Link
                href="/auth/login"
                className="text-purple-600 font-medium hover:underline"
              >
                Login
              </Link>
            </div>
          </CardContent>
        </>
      )}
    </Card>
  );
}
