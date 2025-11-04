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
            {/* Premium glowing border wrapper for logo */}
            <div className="relative rounded-full p-[2px] bg-gradient-to-br from-burnt-orange via-amber-500 to-burnt-orange bg-[length:200%_200%] animate-gradient-rotate shadow-[0_0_20px_rgba(234,88,12,0.4),0_0_40px_rgba(234,88,12,0.2)] group-hover:shadow-[0_0_30px_rgba(234,88,12,0.5),0_0_60px_rgba(234,88,12,0.3)] transition-all duration-500">
              {/* Shimmer effect */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shimmer" />
              </div>

              <Image
                src="/venn-logo.svg"
                alt="Venn - Social connection platform logo"
                width={40}
                height={40}
                className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 transition-all duration-300 group-hover:scale-110 relative z-10 rounded-full"
                priority
              />
            </div>
            <span
              className="text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] font-bold text-burnt-orange tracking-[-0.02em] transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(234,88,12,0.5)]"
              style={{
                fontFamily: 'var(--font-display)',
                textShadow: '0 2px 8px rgba(234,88,12,0.2), 0 4px 16px rgba(234,88,12,0.1)'
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
