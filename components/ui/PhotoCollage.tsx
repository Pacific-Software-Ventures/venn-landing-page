'use client';

import Image from 'next/image';

interface Photo {
  src: string;
  alt: string;
  rotation: number;
  delay: number;
  position: { top?: string; bottom?: string; left?: string; right?: string };
  size: 'sm' | 'md' | 'lg';
  zIndex: number;
  opacity: number;
}

const photos: Photo[] = [
  // Mobile: 4 photos (corners only) - always visible
  { src: '/images/collage/IMG_0278.jpg', alt: 'Friends hanging out', rotation: -8, delay: 200, position: { top: '8%', left: '5%' }, size: 'md', zIndex: 2, opacity: 0.28 },
  { src: '/images/collage/IMG_0294.jpg', alt: 'Group activity', rotation: 5, delay: 400, position: { top: '8%', right: '5%' }, size: 'lg', zIndex: 1, opacity: 0.25 },
  { src: '/images/collage/IMG_0427.jpg', alt: 'Friends gathering', rotation: -4, delay: 1800, position: { bottom: '8%', left: '6%' }, size: 'md', zIndex: 3, opacity: 0.28 },
  { src: '/images/collage/IMG_0414.jpg', alt: 'Group adventure', rotation: 6, delay: 1600, position: { bottom: '8%', right: '5%' }, size: 'lg', zIndex: 1, opacity: 0.23 },

  // Tablet: +4 more photos (8 total) - md and up
  { src: '/images/collage/IMG_0338.jpg', alt: 'Group fun', rotation: -6, delay: 1000, position: { top: '38%', left: '8%' }, size: 'lg', zIndex: 1, opacity: 0.24 },
  { src: '/images/collage/IMG_0372.jpg', alt: 'Social connection', rotation: 4, delay: 1200, position: { top: '38%', right: '8%' }, size: 'md', zIndex: 3, opacity: 0.29 },
  { src: '/images/collage/IMG_0392.jpg', alt: 'People connecting', rotation: -5, delay: 1400, position: { bottom: '10%', left: '30%' }, size: 'sm', zIndex: 2, opacity: 0.27 },
  { src: '/images/collage/IMG_0496.jpg', alt: 'Social moments', rotation: 8, delay: 2000, position: { bottom: '12%', right: '28%' }, size: 'sm', zIndex: 2, opacity: 0.26 },

  // Desktop: +4 more photos (12 total) - lg and up
  { src: '/images/collage/IMG_0302.jpg', alt: 'Social gathering', rotation: -3, delay: 600, position: { top: '10%', left: '28%' }, size: 'sm', zIndex: 3, opacity: 0.3 },
  { src: '/images/collage/IMG_0321.jpg', alt: 'Friends together', rotation: 7, delay: 800, position: { top: '12%', left: '52%' }, size: 'md', zIndex: 2, opacity: 0.26 },
  { src: '/images/collage/IMG_0510.jpg', alt: 'Community building', rotation: -7, delay: 2200, position: { top: '42%', left: '32%' }, size: 'md', zIndex: 1, opacity: 0.22 },
  { src: '/images/collage/IMG_0517.jpg', alt: 'Making memories', rotation: 3, delay: 2400, position: { top: '40%', right: '32%' }, size: 'lg', zIndex: 2, opacity: 0.25 },
];

const sizeClasses = {
  sm: 'w-[90px] h-[110px] sm:w-[110px] sm:h-[130px] md:w-[130px] md:h-[150px]',
  md: 'w-[110px] h-[130px] sm:w-[140px] sm:h-[160px] md:w-[160px] md:h-[180px]',
  lg: 'w-[130px] h-[150px] sm:w-[160px] sm:h-[180px] md:w-[190px] md:h-[210px]',
};

export function PhotoCollage() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {photos.map((photo, index) => {
        // Mobile: Show first 4 photos only
        // Tablet (md): Show first 8 photos
        // Desktop (lg): Show all 12 photos
        let visibilityClass = '';
        if (index < 4) {
          visibilityClass = ''; // Always visible
        } else if (index < 8) {
          visibilityClass = 'hidden md:block'; // Visible from tablet up
        } else {
          visibilityClass = 'hidden lg:block'; // Visible from desktop up
        }

        return (
          <div
            key={index}
            className={`absolute ${sizeClasses[photo.size]} ${visibilityClass}`}
            style={{
              top: photo.position.top,
              bottom: photo.position.bottom,
              left: photo.position.left,
              right: photo.position.right,
              opacity: photo.opacity,
              zIndex: photo.zIndex,
            }}
          >
            <div
              className="w-full h-full animate-float animate-fade-in"
              style={{
                '--rotation': `${photo.rotation}deg`,
                animationDelay: `${photo.delay}ms`,
                animationFillMode: 'forwards',
              } as React.CSSProperties}
            >
              <div
                className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.12)] border-[3px] border-white/90 hover:shadow-[0_8px_30px_rgba(0,0,0,0.18)] hover:scale-105 transition-all duration-500"
                style={{ transform: `rotate(${photo.rotation}deg)` }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 130px, (max-width: 768px) 160px, 190px"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
