import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50" role="banner">
      <div className="px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20 md:h-24">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 md:gap-3.5 group relative touch-manipulation"
            aria-label="Venn - Go to homepage"
          >
            <div className="relative">
              <Image
                src="/venn-logo.svg"
                alt="Venn - Social connection platform logo"
                width={40}
                height={40}
                className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 transition-all duration-300 group-hover:scale-110 filter drop-shadow-[0_2px_8px_rgba(234,88,12,0.3)]"
                priority
              />
            </div>
            <span
              className="text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] font-bold text-charcoal tracking-[-0.02em] transition-all duration-300 group-hover:text-burnt-orange"
              style={{
                fontFamily: 'var(--font-display)',
                textShadow: '0 2px 4px rgba(0,0,0,0.08)'
              }}
            >
              Venn
            </span>
          </Link>

          {/* Navigation - can add later */}
          <nav className="hidden md:flex items-center gap-8" role="navigation" aria-label="Main navigation">
            {/* Add navigation items here */}
          </nav>
        </div>
      </div>
    </header>
  );
}
