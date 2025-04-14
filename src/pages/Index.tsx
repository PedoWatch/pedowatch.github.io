
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntegrationsSection from "@/components/IntegrationsSection";
import ThreatLevelsSection from "@/components/ThreatLevelsSection";
import GitRepoSection from "@/components/GitRepoSection";
import SubscriptionPlansSection from "@/components/SubscriptionPlansSection";
import DashboardSection from "@/components/DashboardSection";
import ClosingSection from "@/components/ClosingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <IntegrationsSection />
        <ThreatLevelsSection />
        <GitRepoSection />
        <SubscriptionPlansSection />
        <DashboardSection />
        <ClosingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
