import HeroSection from "@/components/HeroSection";
import PainPointsSection from "@/components/PainPointsSection";
import ProductDescriptionSection from "@/components/ProductDescriptionSection";
import FeaturesSection from "@/components/FeaturesSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import VisualExamplesSection from "@/components/VisualExamplesSection";
import FAQSection from "@/components/FAQSection";
import GuaranteesSection from "@/components/GuaranteesSection";
import FinalCTASection from "@/components/FinalCTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <PainPointsSection />
      <ProductDescriptionSection />
      <FeaturesSection />
      <TargetAudienceSection />
      <VisualExamplesSection />
      <FAQSection />
      <GuaranteesSection />
      <FinalCTASection />
    </div>
  );
};

export default Index;
