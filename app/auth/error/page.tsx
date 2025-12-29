import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Suspense } from "react";

async function ErrorContent({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;

  return (
    <p className="text-sm md:text-base text-gray-600 text-center">
      {params?.error
        ? `Error code: ${params.error}`
        : "An unexpected error occurred. Please try again."}
    </p>
  );
}

export default function Page({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-b from-purple-50 via-white to-blue-50 px-6">
      <Card className="bg-white/90 backdrop-blur-lg shadow-xl rounded-2xl w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl md:text-3xl font-extrabold text-gray-900">
            Oops! Something went wrong 😕
          </CardTitle>
          <CardDescription className="text-gray-600 mt-2">
            We couldn’t complete your request
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <Suspense>
            <ErrorContent searchParams={searchParams} />
          </Suspense>

          <div className="flex flex-col gap-3">
            <Link
              href="/auth/login"
              className="w-full text-center bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold py-3 rounded-xl hover:opacity-90 transition"
            >
              Go to Login
            </Link>

            <Link
              href="/"
              className="w-full text-center border-2 border-purple-600 text-purple-600 font-semibold py-3 rounded-xl hover:bg-purple-50 transition"
            >
              Back to Home
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
