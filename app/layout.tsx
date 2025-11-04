import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Venn - Stop Scrolling, Start Living | Connect with Real People",
  description: "Join 3,000+ people building meaningful connections and turning plans into reality. Venn helps you meet like-minded individuals, create authentic friendships, and experience life together. Sign up for early access today.",
  keywords: [
    "social connection app",
    "meet new people",
    "make friends",
    "social networking",
    "meaningful connections",
    "friendship app",
    "social activities",
    "meet like-minded people",
    "authentic connections",
    "social community",
    "build friendships",
    "real life connections"
  ],
  authors: [{ name: "Venn" }],
  creator: "Venn",
  publisher: "Venn",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://venn.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Venn - Stop Scrolling, Start Living",
    description: "The smarter way to turn your plans into reality with the right people around you. Join 3,000+ people building something meaningful.",
    url: 'https://venn.app',
    siteName: 'Venn',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Venn - Connect with Real People',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Venn - Stop Scrolling, Start Living",
    description: "Join 3,000+ people building meaningful connections. Turn your plans into reality with the right people around you.",
    images: ['/og-image.png'],
    creator: '@vennapp',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Venn',
    description: 'A social connection platform helping people turn plans into reality with meaningful connections',
    url: 'https://venn.app',
    applicationCategory: 'SocialNetworkingApplication',
    operatingSystem: 'Web, iOS, Android',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '3000',
    },
    author: {
      '@type': 'Organization',
      name: 'Venn',
      url: 'https://venn.app',
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#EA580C" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
