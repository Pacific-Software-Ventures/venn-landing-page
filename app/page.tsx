import { Hero } from '@/components/sections/Hero';
import { WhyJoin } from '@/components/sections/WhyJoin';
import { Rewards } from '@/components/sections/Rewards';
import { Header } from '@/components/ui/Header';
import { LeaderboardSidebar } from '@/components/ui/LeaderboardSidebar';

export default function Home() {
  return (
    <>
      {/* SEO-optimized hidden content for crawlers */}
      <div className="sr-only">
        <h2>About Venn - Your Social Connection Platform</h2>
        <p>
          Venn is a revolutionary social networking app designed to help you stop endless scrolling and start living.
          Our platform connects you with like-minded people in your area who share your interests, making it easy to
          turn plans into reality and build meaningful, authentic friendships.
        </p>
        <h3>Why Choose Venn for Making Friends?</h3>
        <ul>
          <li>Meet new people based on shared interests and activities</li>
          <li>Build authentic connections and lasting friendships</li>
          <li>Turn your plans into reality with the right people</li>
          <li>Join 5,000+ active community members</li>
          <li>Experience real-life social activities, not just online chat</li>
          <li>Safe, inclusive community for everyone</li>
        </ul>
        <h3>How Venn Helps You Connect</h3>
        <p>
          Unlike traditional social media that keeps you scrolling, Venn is built to get you off your phone and
          into the real world. Our smart matching algorithm connects you with people who share your interests,
          whether that's hiking, book clubs, fitness, gaming, or any other activity you're passionate about.
        </p>
        <h3>Features That Make Connection Easy</h3>
        <ul>
          <li>Interest-based matching to find your perfect social circle</li>
          <li>Event planning tools to organize meetups effortlessly</li>
          <li>Safe, verified community members</li>
          <li>Group activities and one-on-one connections</li>
          <li>Location-based discovery to meet people nearby</li>
        </ul>
      </div>

      <Header />
      <main className="min-h-screen min-h-[100dvh] relative overflow-hidden" role="main">
        {/* Complex Multi-Layer Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFFBEB] via-white to-white" />

        {/* Radial gradients for depth */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-[-10%] left-[-5%] w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] md:w-[600px] md:h-[600px] bg-gradient-radial from-[#FEF3C7]/40 via-[#FEF3C7]/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] sm:w-[550px] sm:h-[550px] md:w-[700px] md:h-[700px] bg-gradient-radial from-[#FBBF24]/20 via-[#FEF3C7]/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-[-15%] left-[10%] w-[450px] h-[450px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-gradient-radial from-[#FB923C]/15 via-transparent to-transparent rounded-full blur-3xl" />
        </div>

        {/* Subtle mesh gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-100/15 sm:from-orange-100/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-amber-100/15 sm:from-amber-100/20 via-transparent to-transparent" />

        {/* Hero Section with Leaderboard */}
        <div className="relative">
          <Hero />
          {/* Leaderboard Sidebar - Only visible in Hero section */}
          <LeaderboardSidebar />
        </div>

        {/* Why Join Section */}
        <WhyJoin />

        {/* Rewards Section */}
        <Rewards />
      </main>
    </>
  );
}
