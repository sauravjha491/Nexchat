import Navbar from '@/components/maindashboard/topnavbar';
import Hero from '@/components/maindashboard/hero';
import Features from '@/components/maindashboard/features';
import Footer from '@/components/maindashboard/footer';

export default function HomePage() {
  return (
    <div className="min-h-screen header-bg from-[#0f172a] to-[#020617] flex flex-col">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}
