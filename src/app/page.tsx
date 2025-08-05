import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import HeroSection from '@/components/sections/Hero';
import FeaturesSection from '@/components/sections/Features';
import LiveDataSection from '@/components/sections/LiveData';
import TestimonialsSection from '@/components/sections/Testimonials';
import DownloadSection from '@/components/sections/Download';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <LiveDataSection />
        <TestimonialsSection />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}