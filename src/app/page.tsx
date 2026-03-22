import SmoothScroll from "@/components/layout/smoothscroll";
import Navbar from "@/components/layout/navbar";
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
import Footer from "@/components/layout/footer";

export default function Page() {
  return (
    <SmoothScroll>
      <Navbar />
      <main className="relative">
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
      </main>
      <Footer />
    </SmoothScroll>
  );
}
