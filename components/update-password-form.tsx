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
import { useRouter } from "next/navigation";
import { useState } from "react";

export function UpdatePasswordForm() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    const supabase = createClient();
    setIsLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.updateUser({ password });
      if (error) throw error;
      router.push("/dashboard");
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="bg-white/90 backdrop-blur-lg shadow-xl rounded-2xl">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl md:text-3xl font-extrabold">
          Reset Password
        </CardTitle>
        <CardDescription className="text-gray-600 mt-2">
          Enter a new password for your account
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleUpdatePassword} className="flex flex-col gap-6">
          <div className="grid gap-2">
            <Label htmlFor="password" className="text-gray-700">
              New Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter new password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-white border-gray-300 focus:border-purple-500 focus:ring-purple-500"
            />
          </div>

          {error && <p className="text-sm text-red-500">{error}</p>}

          <Button
            type="submit"
            className="bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold py-3 rounded-xl shadow-lg hover:opacity-90 transition"
            disabled={isLoading}
          >
            {isLoading ? "Updating..." : "Update Password"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
