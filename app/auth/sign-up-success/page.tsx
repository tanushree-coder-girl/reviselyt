import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-b from-purple-50 via-white to-blue-50 px-6">
      <Card className="bg-white/90 backdrop-blur-lg shadow-xl rounded-2xl w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl md:text-3xl font-extrabold text-gray-900">
            🎉 Thank You for Signing Up!
          </CardTitle>
          <CardDescription className="text-gray-600 mt-2">
            Please verify your email to continue
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6 text-center">
          <p className="text-sm md:text-base text-gray-600">
            You’ve successfully created your account.  
            We’ve sent a confirmation link to your email address.
            Please verify your email before logging in.
          </p>

          <div className="flex flex-col gap-3">
            <Link
              href="/auth/login"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold py-3 rounded-xl hover:opacity-90 transition"
            >
              Go to Login
            </Link>

            <Link
              href="/"
              className="w-full border-2 border-purple-600 text-purple-600 font-semibold py-3 rounded-xl hover:bg-purple-50 transition"
            >
              Back to Home
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
