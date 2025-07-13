
import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { MissionSection } from "@/components/MissionSection";
import { NewsSlider } from "@/components/NewsSlider";
import { ContactSection } from "@/components/ContactSection";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const handleViewJournals = () => {
    navigate('/journals');
  };

  const handleLearnMore = () => {
    navigate('/about');
  };

  return (
    <>
      <HeroSection onViewJournals={handleViewJournals} onLearnMore={handleLearnMore} />
      <StatsSection />
      <MissionSection />
      <NewsSlider />
      <ContactSection />
    </>
  );
};

export default Index;
