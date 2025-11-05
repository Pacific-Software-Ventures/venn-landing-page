import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[9998] mt-[42px] sm:mt-[44px]" role="banner">
      <div className="px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 md:gap-3.5 group relative touch-manipulation z-[9999]"
            aria-label="Venn - Go to homepage"
          >
            {/* Premium glowing border wrapper for logo */}
            <div className="relative rounded-full p-[3px] bg-burnt-orange shadow-[0_0_24px_rgba(234,88,12,0.5),0_0_48px_rgba(234,88,12,0.25),0_4px_12px_rgba(0,0,0,0.1)] group-hover:shadow-[0_0_36px_rgba(234,88,12,0.6),0_0_72px_rgba(234,88,12,0.3),0_6px_16px_rgba(0,0,0,0.15)] transition-all duration-500">
              {/* Shimmer effect */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shimmer" />
              </div>

              <Image
                src="/venn-logo.svg"
                alt="Venn - Social connection platform logo"
                width={40}
                height={40}
                className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 transition-all duration-300 group-hover:scale-110 relative z-10 rounded-full block"
                priority
              />
            </div>
            <span
              className="text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] font-bold text-burnt-orange tracking-[-0.02em] transition-all duration-300 group-hover:drop-shadow-[0_0_16px_rgba(234,88,12,0.6)] drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]"
              style={{
                fontFamily: 'var(--font-display)',
                textShadow: '0 3px 10px rgba(234,88,12,0.3), 0 6px 20px rgba(234,88,12,0.15), 0 2px 4px rgba(0,0,0,0.1)'
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
