import { HeroSection } from "@/components/hero-section";

export default function Home() {
  return (
    <>
      <article className={`flex flex-col min-h-screen bg-zinc-50 dark:bg-black`}>
        <HeroSection />
      </article>
    </>
  );
}
