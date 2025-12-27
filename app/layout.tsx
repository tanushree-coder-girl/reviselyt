import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: {
    default: "Reviselyt — AI Study & Interview Summarizer",
    template: "%s | Reviselyt",
  },
  description:
    "Upload study material or interview notes and get 5–10 AI-generated bullet points for fast, last-minute revision.",
  keywords: [
    "AI study summarizer",
    "exam revision",
    "interview preparation",
    "PDF summarizer",
    "AI notes",
    "last minute revision",
  ],
  authors: [{ name: "Reviselyt" }],
  openGraph: {
    title: "Reviselyt — AI Study & Interview Summarizer",
    description:
      "Revise smarter for exams and interviews with AI-generated bullet summaries.",
    url: defaultUrl,
    siteName: "Reviselyt",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reviselyt",
    description:
      "AI-powered last-minute exam & interview revision tool.",
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.className} antialiased bg-background text-foreground`}
      >
        {/* Accessibility: skip to content */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 bg-black text-white px-4 py-2 rounded"
        >
          Skip to content
        </a>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main id="main" className="min-h-screen">
            {children}
          </main>
        </ThemeProvider>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.min.js"></script>
      </body>
    </html>
  );
}
