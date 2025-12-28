'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="border-t bg-white px-6 py-14">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Reviselyt Logo" width={80} height={50} />
          </div>
          <p className="text-sm text-gray-600 max-w-sm">
            Reviselyt is an open-source AI-powered revision tool that turns long study material into fast, visual, exam-ready summaries.
          </p>
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Reviselyt
          </p>
        </div>

        {/* Product / Open Source */}
        <div className="space-y-3">
          <h4 className="font-semibold text-gray-900">Product</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link href="#features" className="hover:text-purple-600 transition">Features</Link>
            </li>
            <li>
              <Link href="https://github.com/your-repo" target="_blank" className="hover:text-purple-600 transition">Open Source</Link>
            </li>
            <li>
              <Link href="https://github.com/your-repo" target="_blank" className="hover:text-purple-600 transition">GitHub Repository</Link>
            </li>
          </ul>
        </div>

        {/* Creator */}
        <div className="space-y-3">
          <h4 className="font-semibold text-gray-900">Creator</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link href="https://github.com/your-github-username" target="_blank" className="hover:text-purple-600 transition inline-flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.8 1.9 2.7 2.4.1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.4 11.4 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.2 0 4.6-2.7 5.6-5.3 5.9.4.3.8 1 .8 2v3c0 .3.2.7.8.6A11.5 11.5 0 0023.5 12C23.5 5.7 18.3.5 12 .5z" />
                </svg>
                GitHub Profile
              </Link>
            </li>
            <li>
              <Link href="https://linkedin.com/in/your-linkedin-username" target="_blank" className="hover:text-purple-600 transition inline-flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5C3.33 3.5 2 4.84 2 6.5s1.33 3 2.98 3A3 3 0 008 6.5C8 4.84 6.66 3.5 4.98 3.5zM2.4 21.5h5.2V9H2.4v12.5zM9.5 9h5v1.7h.1c.7-1.2 2.3-2.4 4.7-2.4 5 0 5.9 3.3 5.9 7.6v5.6h-5.2v-5c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7v5.1H9.5V9z" />
                </svg>
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-12 border-t pt-6 text-center text-xs text-gray-400">
        Built with ❤️ using Next.js, Supabase & Open Source
      </div>
    </footer>
  );
}
