import { inter } from "@/styles/fonts";
import { CallToAction } from "@/templates/landing-page/sections";
import { Footer } from "./footer";
import { Header } from "./header";

type LayoutProps = {
  children: React.ReactNode;
}

export function Layout({children} : LayoutProps){

  return(
    <div className={`${inter.className} relative flex flex-col min-h-screen bg-gray-700`}> 
      <Header />
      <main className="flex flex-col flex-1">
        {children}
      </main>
      <CallToAction />
      <Footer />
    </div>
  );
}