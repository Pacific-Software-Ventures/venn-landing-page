import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-gray-50 to-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full blur-sm opacity-75 group-hover:opacity-100 transition-opacity" />
                <svg
                  viewBox="0 0 70 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative w-10 h-10"
                >
                  <circle cx="35" cy="35" r="35" fill="#F9EBE1"/>
                  <path d="M42 40C42 48.8 34.8 56 26 56C17.2 56 10 48.8 10 40C10 31.2 17.2 24 26 24C34.8 24 42 31.2 42 40Z" stroke="url(#paint0_linear)" strokeWidth="3"/>
                  <path d="M60 30C60 38.8 52.8 46 44 46C35.2 46 28 38.8 28 30C28 21.2 35.2 14 44 14C52.8 14 60 21.2 60 30Z" stroke="url(#paint1_linear)" strokeWidth="3"/>
                  <defs>
                    <linearGradient id="paint0_linear" x1="26" y1="23" x2="26" y2="57" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#F85F27"/>
                      <stop offset="1" stopColor="#FFB499"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear" x1="44" y1="13" x2="44" y2="47" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#F85F27"/>
                      <stop offset="1" stopColor="#FFB499"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                Venn
              </span>
            </Link>
            <p className="mt-4 text-sm text-gray-600 max-w-xs">
              Stop scrolling. Start living. Build meaningful connections and turn plans into reality.
            </p>
            <div className="mt-6">
              <a
                href="https://twitter.com/vennapp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors"
                aria-label="Follow us on Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
                <span className="text-sm">@vennapp</span>
              </a>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/#features"
                  className="text-sm text-gray-600 hover:text-orange-600 transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/#rewards"
                  className="text-sm text-gray-600 hover:text-orange-600 transition-colors"
                >
                  Rewards
                </Link>
              </li>
              <li>
                <Link
                  href="/#how-it-works"
                  className="text-sm text-gray-600 hover:text-orange-600 transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-600 hover:text-orange-600 transition-colors"
                >
                  Leaderboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-gray-600 hover:text-orange-600 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-gray-600 hover:text-orange-600 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/rewards"
                  className="text-sm text-gray-600 hover:text-orange-600 transition-colors"
                >
                  Rewards Program Rules
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:support@vennapp.co"
                  className="text-sm text-gray-600 hover:text-orange-600 transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  support@vennapp.co
                </a>
              </li>
              <li className="text-sm text-gray-600 flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>
                  San Francisco, CA
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500 text-center sm:text-left">
              © {currentYear} Venn Corporation. All rights reserved.
            </p>
            <p className="text-xs text-gray-400 text-center sm:text-right">
              Made with ❤️ in San Francisco
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
