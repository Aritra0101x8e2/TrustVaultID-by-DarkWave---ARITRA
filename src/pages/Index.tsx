
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection"; 
import DemoSection from "@/components/DemoSection";
import StatSection from "@/components/StatSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-navy-900 text-white">
      <NavBar />
      <main>
        <HeroSection />
        <FeatureSection />
        <StatSection />
        <DemoSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
