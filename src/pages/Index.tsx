import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import MythFactSection from '@/components/MythFactSection';
import AITransparencySection from '@/components/AITransparencySection';
import PrivacySection from '@/components/PrivacySection';
import ScalabilitySection from '@/components/ScalabilitySection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <MythFactSection />
        <AITransparencySection />
        <PrivacySection />
        <ScalabilitySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
