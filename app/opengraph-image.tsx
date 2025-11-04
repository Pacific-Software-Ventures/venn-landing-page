import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Venn - Stop Scrolling, Start Living | Connect with Real People'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FFFBEB',
          backgroundImage: 'linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 50%, #FDE68A 100%)',
          position: 'relative',
        }}
      >
        {/* Gradient orbs in background */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            left: '-100px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(251, 191, 36, 0.3) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-100px',
            right: '-100px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(251, 146, 60, 0.3) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '80px',
            position: 'relative',
            zIndex: 10,
          }}
        >
          {/* Logo Circle with modern design */}
          <div
            style={{
              width: '140px',
              height: '140px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #EA580C 0%, #FB923C 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '48px',
              boxShadow: '0 25px 50px rgba(234, 88, 12, 0.4), 0 10px 20px rgba(234, 88, 12, 0.3)',
              border: '6px solid rgba(255, 255, 255, 0.8)',
            }}
          >
            <div
              style={{
                fontSize: '72px',
                fontWeight: 900,
                color: 'white',
                fontFamily: 'serif',
              }}
            >
              V
            </div>
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: '88px',
              fontWeight: 900,
              color: '#1C1917',
              textAlign: 'center',
              marginBottom: '24px',
              fontFamily: 'serif',
              letterSpacing: '-0.02em',
            }}
          >
            Venn
          </div>

          {/* Tagline with emphasis */}
          <div
            style={{
              fontSize: '48px',
              fontWeight: 700,
              background: 'linear-gradient(135deg, #EA580C 0%, #FB923C 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              textAlign: 'center',
              marginBottom: '28px',
              fontStyle: 'italic',
              letterSpacing: '-0.01em',
            }}
          >
            Stop Scrolling. Start Living.
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: '32px',
              fontWeight: 600,
              color: '#44403C',
              textAlign: 'center',
              maxWidth: '900px',
              lineHeight: 1.4,
            }}
          >
            Turn your plans into reality with the right people
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
