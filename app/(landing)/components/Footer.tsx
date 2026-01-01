import Link from 'next/link';
import Image from 'next/image';
import CurrentYear from '@/components/common/CurrentYear';

export default function Footer() {
  return (
    <footer className="border-t bg-white px-6 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Brand */}
        <div className="space-y-5 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <Image src="/logo.png" alt="Reviselyt Logo" width={100} height={60} />
          </div>
          <p className="text-base text-gray-600 max-w-sm mx-auto md:mx-0">
            Reviselyt is an open-source AI-powered revision tool that turns long study material into fast, visual, exam-ready summaries.
          </p>
          <p className="text-sm text-gray-400">
            © <CurrentYear /> Reviselyt
          </p>
        </div>

        {/* Product */}
        <div className="space-y-4 text-center md:text-center">
          <h4 className="font-semibold text-gray-900 text-lg">Product</h4>
          <ul className="space-y-2 text-gray-700">
            <li>
              <Link href="#features" className="hover:text-purple-600 transition">
                Features
              </Link>
            </li>
            <li>
              <Link href="https://github.com/tanushree-coder-girl/reviselyt" target="_blank" className="hover:text-purple-600 transition">
                Open Source
              </Link>
            </li>
            <li>
              <Link href="https://github.com/tanushree-coder-girl/reviselyt" target="_blank" className="hover:text-purple-600 transition">
                GitHub Repository
              </Link>
            </li>
          </ul>
        </div>

        {/* Creator */}
        <div className="space-y-4 text-center md:text-center">
          <h4 className="font-semibold text-gray-900 text-lg">Creator</h4>
          <ul className="space-y-3 text-gray-700">
            <li>
              <Link href="https://github.com/tanushree-coder-girl" target="_blank" className="hover:text-purple-600 transition">
                GitHub Profile
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/tanushree-ahir4321/" target="_blank" className="hover:text-purple-600 transition">
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                href="https://www.fiverr.com/tanushreeahir1"
                target="_blank"
                className="inline-block bg-purple-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-purple-700 transition shadow-md"
              >
                Hire Me
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-16 border-t pt-6 text-center text-gray-500 text-sm md:text-base">
        Built with ❤️ by{' '}
        <a
          href="https://github.com/tanushree-coder-girl"
          target="_blank"
          className="text-purple-600 hover:underline"
        >
          Tanushree-Coder-Girl
        </a>
      </div>
    </footer>
  );
}
