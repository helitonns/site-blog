import { Inter } from "next/font/google";
import { Footer } from "../footer";
import { Header } from "../header";

type LayoutProps = {
  children: React.ReactNode;
}

const inter = Inter({subsets: ["latin"]});

export function Layout({children} : LayoutProps){

  return(
    <div className={`${inter.className} relative flex flex-col min-h-screen dark`}> 
      <Header />
      <main className="flex flex-col flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}