import { CustommerStorySection } from "@/components/custommer-story-section";
import { FeatureSection } from "@/components/feature-section";
import { HeroSection } from "@/components/hero-section";
import { SupportSection } from "@/components/support-section";

export default function Home() {
  return (
    <>
      <article className={`flex flex-col min-h-screen bg-zinc-50 dark:bg-black`}>
        <HeroSection />
        <FeatureSection />
        <SupportSection />
        <CustommerStorySection />
      </article>
    </>
  );
}
