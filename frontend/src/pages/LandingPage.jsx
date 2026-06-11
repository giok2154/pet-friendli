import LandingLayout from '../layouts/LandingLayout';
import HeroSection from '../components/sections/HeroSection';
import ProblemSection from '../components/sections/ProblemSection';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import GallerySection from '../components/sections/GallerySection';
import ProductsSection from '../components/sections/ProductsSection';
import ImpactSection from '../components/sections/ImpactSection';
import PawChampionsSection from '../components/sections/PawChampionsSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import FAQSection from '../components/sections/FAQSection';
import FinalCTASection from '../components/sections/FinalCTASection';

export default function LandingPage() {
  return (
    <LandingLayout>
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <GallerySection />
      <ProductsSection />
      <ImpactSection />
      <PawChampionsSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
    </LandingLayout>
  );
}
