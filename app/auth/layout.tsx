import { redirect } from "next/navigation";
import Image from "next/image";
import { createClient } from "@/lib/supabase/server";

export default async function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const supabase = await createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (user) {
        redirect("/dashboard");
    }

    return (
        <div className="flex min-h-screen w-full bg-gradient-to-b from-purple-50 via-white to-blue-50">
            <div
                className="hidden md:flex md:w-11/20 flex-col items-center justify-center
        bg-gradient-to-r from-purple-600 via-purple-500 to-blue-500 text-white
        px-6 md:px-10 space-y-4"
            >
                <Image
                    src="/logo.png"
                    alt="Reviselyt Logo"
                    width={120}
                    height={40}
                />

                <h1 className="text-4xl font-extrabold text-center max-w-xl">
                    Welcome to Reviselyt
                </h1>

                <p className="text-lg md:text-xl max-w-lg text-center">
                    AI-powered last-minute revision at your fingertips.
                </p>
            </div>

            <div className="flex w-full md:w-9/20 items-center justify-center px-6 md:px-8">
                <div className="w-full max-w-md">
                    {children}
                </div>
            </div>
        </div>
    );
}
