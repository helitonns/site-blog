import { CallToAction, CustommerStorySection, FeatureSection, HeroSection, SupportSection } from "@/templates/landing-page/sections";

export function LadingPage() {

  return (
    <article className={`flex flex-col min-h-screen bg-zinc-50 dark:bg-black`}>
      <HeroSection />
      <FeatureSection />
      <SupportSection />
      <CustommerStorySection />
      <CallToAction />
    </article>
  );
}