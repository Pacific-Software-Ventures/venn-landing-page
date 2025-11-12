'use client';

import { Container } from '../ui/Container';
import { CheckCircle2 } from 'lucide-react';

export function WhyJoin() {
  const reasons = [
    "Your plans never make it out of the group chat",
    "You're a working professional who seeks more curated networking connections",
    "You're new to a city or haven't found your people yet"
  ];

  return (
    <section
      className="relative py-16 sm:py-20 md:py-24 overflow-hidden"
      aria-label="Why join Venn"
    >
      <Container>
        <div className="text-center max-w-4xl mx-auto relative z-10 w-full px-4 sm:px-6">
          {/* Tagline */}
          <h2
            className="text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-normal text-charcoal leading-[1.2] tracking-[-0.02em] mb-10 sm:mb-12 md:mb-16 animate-fade-in-up"
            style={{
              fontFamily: 'var(--font-display)',
              textShadow: '0 2px 12px rgba(255,255,255,0.95), 0 4px 24px rgba(255,255,255,0.8), 0 1px 3px rgba(0,0,0,0.1)'
            }}
          >
            Venn is the only social network designed to get you{' '}
            <span className="relative inline-block text-burnt-orange after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-burnt-orange after:opacity-70">
              offline and together
            </span>
            .
          </h2>

          {/* You should join if section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg border border-stone-200/50">
            <h3
              className="text-xl sm:text-2xl md:text-3xl font-semibold text-charcoal mb-6 sm:mb-8"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              You should join if:
            </h3>

            <ul className="space-y-4 sm:space-y-5">
              {reasons.map((reason, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 sm:gap-4 text-left animate-fade-in-up"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7 text-burnt-orange flex-shrink-0 mt-0.5" />
                  <span className="text-base sm:text-lg md:text-xl text-stone-700 leading-relaxed">
                    {reason}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-gradient-to-br from-[#FBBF24]/20 via-[#F59E0B]/10 to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] bg-gradient-to-tl from-[#FB923C]/15 via-[#EA580C]/8 to-transparent rounded-full blur-3xl animate-float animation-delay-1000" />
      </div>

      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'1.2\' numOctaves=\'3\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
      }} />
    </section>
  );
}
