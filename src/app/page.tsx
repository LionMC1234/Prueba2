import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
    </main>
  );
}
