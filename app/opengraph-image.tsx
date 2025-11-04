import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Venn - Stop Scrolling, Start Living'
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
          backgroundImage: 'radial-gradient(circle at 25% 25%, #FEF3C7 0%, transparent 50%), radial-gradient(circle at 75% 75%, #FB923C 0%, transparent 50%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '80px',
          }}
        >
          {/* Logo/Icon placeholder */}
          <div
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #EA580C 0%, #FB923C 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '40px',
              boxShadow: '0 20px 40px rgba(234, 88, 12, 0.3)',
            }}
          >
            <div
              style={{
                fontSize: '64px',
                fontWeight: 900,
                color: 'white',
              }}
            >
              V
            </div>
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: '72px',
              fontWeight: 900,
              background: 'linear-gradient(135deg, #1C1917 0%, #44403C 100%)',
              backgroundClip: 'text',
              color: 'transparent',
              textAlign: 'center',
              marginBottom: '20px',
              fontFamily: 'serif',
            }}
          >
            Venn
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: '42px',
              fontWeight: 600,
              color: '#EA580C',
              textAlign: 'center',
              marginBottom: '20px',
              fontStyle: 'italic',
            }}
          >
            Stop Scrolling. Start Living.
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: '28px',
              fontWeight: 500,
              color: '#57534E',
              textAlign: 'center',
              maxWidth: '800px',
              lineHeight: 1.4,
            }}
          >
            Turn your plans into reality with the right people around you
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
