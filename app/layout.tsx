import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Banner } from "@/components/ui/Banner";

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
  title: "Win $10K in IRL rewards with your friends in SF - Venn",
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
  metadataBase: new URL('https://vennapp.co'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Win $10K in IRL rewards with your friends in SF - Venn",
    description: "The smarter way to turn your plans into reality with the right people around you. Join 3,000+ people building something meaningful.",
    url: 'https://vennapp.co',
    siteName: 'Venn',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Win $10K in IRL rewards with your friends in SF - Venn",
    description: "Join 3,000+ people building meaningful connections. Turn your plans into reality with the right people around you.",
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
    url: 'https://vennapp.co',
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
      url: 'https://vennapp.co',
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="theme-color" content="#EA580C" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, viewport-fit=cover" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        <Banner type="countdown" />
        {children}
      </body>
    </html>
  );
}
