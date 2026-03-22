import Hero from "@/components/sections/hero";
import TrustBar from "@/components/sections/trustbar";
import ProblemSection from "@/components/sections/problemsection";
import SolutionSection from "@/components/sections/solutionsection";
import HowItWorks from "@/components/sections/howitworks";
import MarketplacePreview from "@/components/sections/marketplacepreview";
import Benefits from "@/components/sections/benefits";
import TrustAwareness from "@/components/sections/trustawareness";
import StartupTransparency from "@/components/sections/startuptransparency";
import FinalCTA from "@/components/sections/finalcta";

export default function Page() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <MarketplacePreview />
      <Benefits />
      <TrustAwareness />
      <StartupTransparency />
      <FinalCTA />
    </>
  );
}
