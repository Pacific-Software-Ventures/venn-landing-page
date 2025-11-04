'use client';

import { Container } from '../ui/Container';
import { RotatingText } from '../ui/RotatingText';
import { WaitlistForm } from '../ui/WaitlistForm';

export function Hero() {
  return (
    <section
      className="relative min-h-screen min-h-[100dvh] flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      <Container>
        <div className="text-center max-w-6xl mx-auto relative z-10">
          {/* Main Heading - Apple/Stripe Style */}
          <h1
            className="text-[1.875rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem] font-normal text-charcoal leading-[1.15] sm:leading-[1.2] tracking-[-0.02em] mb-4 sm:mb-5 md:mb-7 px-4 sm:px-6 animate-fade-in-up animation-delay-100"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            <span className="block text-center">Stop scrolling. Start</span>
            <span className="block text-center mt-1.5 sm:mt-2.5 md:mt-3 overflow-hidden" aria-live="polite">
              <RotatingText />
            </span>
          </h1>

          {/* Subheading - Clean Sans Serif */}
          <p
            className="text-[0.8125rem] sm:text-[0.9375rem] md:text-[1.0625rem] lg:text-[1.125rem] text-stone-700 leading-[1.5] sm:leading-[1.6] mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto font-medium px-6 sm:px-8 animate-fade-in-up animation-delay-200"
            role="doc-subtitle"
          >
            The smarter way to turn your plans into reality with the right people around you.
          </p>

          {/* Multi-Step Waitlist Form */}
          <WaitlistForm />

          {/* Trust Badge with Social Proof */}
          <aside
            className="flex items-center justify-center text-[0.6875rem] sm:text-xs md:text-sm text-stone-500 animate-fade-in-up animation-delay-400 px-4 sm:px-6 mt-3 sm:mt-4 md:mt-5"
            aria-label="Social proof"
          >
            <p className="font-medium text-center">
              Join <strong className="text-charcoal font-semibold">3,000+</strong> people building something meaningful
            </p>
          </aside>
        </div>
      </Container>

      {/* Enhanced Decorative Light Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Primary warm glow */}
        <div className="absolute -top-20 -left-20 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-gradient-to-br from-[#FBBF24]/30 via-[#F59E0B]/15 to-transparent rounded-full blur-3xl animate-float" />

        {/* Secondary orange accent */}
        <div className="absolute top-1/4 -right-32 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] bg-gradient-to-tl from-[#FB923C]/20 via-[#EA580C]/10 to-transparent rounded-full blur-3xl animate-float animation-delay-1000" />

        {/* Tertiary soft glow */}
        <div className="absolute bottom-0 left-1/3 w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] md:w-[550px] md:h-[550px] bg-gradient-to-tr from-[#FEF3C7]/25 via-[#FDE68A]/15 to-transparent rounded-full blur-3xl animate-pulse-slow" />

        {/* Additional accent orb */}
        <div className="absolute top-1/2 left-1/4 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] bg-gradient-to-r from-[#FBBF24]/15 to-transparent rounded-full blur-3xl animate-float animation-delay-500" />
      </div>

      {/* Premium Noise Texture + Grain */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'1.2\' numOctaves=\'3\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
      }} />
    </section>
  );
}
