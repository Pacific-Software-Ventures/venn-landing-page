'use client';

import Image from 'next/image';

const photos = [
  { src: '/images/collage/IMG_0278.jpg', alt: 'Friends enjoying outdoor activities and building connections through Venn' },
  { src: '/images/collage/IMG_0294.jpg', alt: 'Venn community members meeting up and creating lasting memories' },
  { src: '/images/collage/IMG_0302.jpg', alt: 'People connecting in real life through shared interests on Venn' },
  { src: '/images/collage/IMG_0321.jpg', alt: 'Group of friends socializing and making meaningful connections' },
  { src: '/images/collage/IMG_0338.jpg', alt: 'Social gathering of Venn users experiencing life together' },
  { src: '/images/collage/IMG_0372.jpg', alt: 'Friends meeting up through Venn social connection platform' },
  { src: '/images/collage/IMG_0392.jpg', alt: 'Community members building authentic friendships on Venn' },
  { src: '/images/collage/IMG_0414.jpg', alt: 'People turning plans into reality with new friends from Venn' },
  { src: '/images/collage/IMG_0427.jpg', alt: 'Social connections and real-world meetups through Venn app' },
  { src: '/images/collage/IMG_0496.jpg', alt: 'Friends enjoying activities and making memories together via Venn' },
  { src: '/images/collage/IMG_0510.jpg', alt: 'Like-minded people connecting and socializing through Venn platform' },
  { src: '/images/collage/IMG_0517.jpg', alt: 'Venn community experiencing life and building relationships together' },
];

export function PhotoCollage() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-15 md:opacity-20 lg:opacity-25 pointer-events-none">
      {/* Grid of photos with larger sizes and automatic floating animations */}
      <div className="absolute top-[8%] left-[5%] w-32 h-40 sm:w-40 sm:h-48 md:w-48 md:h-56 rounded-xl md:rounded-2xl overflow-hidden shadow-lg rotate-[-12deg] animate-float animation-delay-100">
        <Image
          src={photos[0].src}
          alt={photos[0].alt}
          width={192}
          height={224}
          className="object-cover w-full h-full"
          loading="lazy"
          unoptimized
        />
      </div>

      <div className="absolute top-[12%] right-[8%] w-36 h-28 sm:w-44 sm:h-36 md:w-56 md:h-44 rounded-xl md:rounded-2xl overflow-hidden shadow-lg rotate-[8deg] animate-float animation-delay-300">
        <Image
          src={photos[1].src}
          alt={photos[1].alt}
          width={224}
          height={176}
          className="object-cover w-full h-full"
          loading="lazy"
          unoptimized
        />
      </div>

      <div className="absolute top-[40%] left-[3%] w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-xl md:rounded-2xl overflow-hidden shadow-lg rotate-[15deg] animate-float animation-delay-500">
        <Image
          src={photos[2].src}
          alt={photos[2].alt}
          width={208}
          height={208}
          className="object-cover w-full h-full"
          loading="lazy"
          unoptimized
        />
      </div>

      <div className="hidden sm:block absolute top-[22%] right-[28%] w-44 h-36 md:w-60 md:h-48 rounded-xl md:rounded-2xl overflow-hidden shadow-lg rotate-[-6deg] animate-float animation-delay-700">
        <Image
          src={photos[3].src}
          alt={photos[3].alt}
          width={240}
          height={192}
          className="object-cover w-full h-full"
          loading="lazy"
          unoptimized
        />
      </div>

      <div className="hidden md:block absolute bottom-[28%] left-[12%] w-44 h-44 md:w-56 md:h-56 rounded-xl md:rounded-2xl overflow-hidden shadow-lg rotate-[10deg] animate-float animation-delay-200">
        <Image
          src={photos[4].src}
          alt={photos[4].alt}
          width={224}
          height={224}
          className="object-cover w-full h-full"
          loading="lazy"
          unoptimized
        />
      </div>

      <div className="absolute bottom-[18%] right-[6%] w-32 h-40 sm:w-40 sm:h-48 md:w-48 md:h-60 rounded-xl md:rounded-2xl overflow-hidden shadow-lg rotate-[-14deg] animate-float animation-delay-400">
        <Image
          src={photos[5].src}
          alt={photos[5].alt}
          width={192}
          height={240}
          className="object-cover w-full h-full"
          loading="lazy"
          unoptimized
        />
      </div>

      <div className="absolute top-[58%] right-[3%] w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-xl md:rounded-2xl overflow-hidden shadow-lg rotate-[18deg] animate-float animation-delay-600">
        <Image
          src={photos[6].src}
          alt={photos[6].alt}
          width={176}
          height={176}
          className="object-cover w-full h-full"
          loading="lazy"
          unoptimized
        />
      </div>

      <div className="hidden sm:block absolute bottom-[38%] right-[22%] w-40 h-40 md:w-52 md:h-52 rounded-xl md:rounded-2xl overflow-hidden shadow-lg rotate-[-8deg] animate-float animation-delay-800">
        <Image
          src={photos[7].src}
          alt={photos[7].alt}
          width={208}
          height={208}
          className="object-cover w-full h-full"
          loading="lazy"
          unoptimized
        />
      </div>

      <div className="hidden md:block absolute top-[48%] left-[22%] w-44 h-36 md:w-56 md:h-44 rounded-xl md:rounded-2xl overflow-hidden shadow-lg rotate-[5deg] animate-float animation-delay-900">
        <Image
          src={photos[8].src}
          alt={photos[8].alt}
          width={224}
          height={176}
          className="object-cover w-full h-full"
          loading="lazy"
          unoptimized
        />
      </div>

      <div className="hidden lg:block absolute bottom-[8%] left-[28%] w-48 h-48 rounded-2xl overflow-hidden shadow-lg rotate-[-16deg] animate-float animation-delay-1000">
        <Image
          src={photos[9].src}
          alt={photos[9].alt}
          width={192}
          height={192}
          className="object-cover w-full h-full"
          loading="lazy"
          unoptimized
        />
      </div>

      <div className="hidden sm:block absolute top-[5%] left-[35%] w-32 h-40 md:w-44 md:h-52 rounded-xl md:rounded-2xl overflow-hidden shadow-lg rotate-[12deg] animate-float animation-delay-200">
        <Image
          src={photos[10].src}
          alt={photos[10].alt}
          width={176}
          height={208}
          className="object-cover w-full h-full"
          loading="lazy"
          unoptimized
        />
      </div>

      <div className="hidden lg:block absolute bottom-[5%] right-[35%] w-52 h-44 rounded-2xl overflow-hidden shadow-lg rotate-[-10deg] animate-float animation-delay-500">
        <Image
          src={photos[11].src}
          alt={photos[11].alt}
          width={208}
          height={176}
          className="object-cover w-full h-full"
          loading="lazy"
          unoptimized
        />
      </div>

      {/* Multi-layer gradient overlays for sophisticated blending */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/60" />
      <div className="absolute inset-0 bg-gradient-to-tr from-[#FFFBEB]/50 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/30 to-[#FEF3C7]/40" />
    </div>
  );
}
