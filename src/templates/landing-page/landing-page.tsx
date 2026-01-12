import { CallToAction, CustommerStorySection, FeatureSection, HeroSection, SupportSection } from "@/templates/landing-page/sections";

export function LadingPage() {

  return (
    <article className={`flex flex-col min-h-screen dark:bg-black bg-gray-700`}>
      <HeroSection />
      <FeatureSection />
      <SupportSection />
      <CustommerStorySection />
      <CallToAction />
    </article>
  );
}