import { Footer } from "../footer";
import { Header } from "../header";

type LayoutProps = {
  children: React.ReactNode;
}

export function Layout({children} : LayoutProps){

  return(
    <div className="relative flex flex-col min-h-screen dark"> 
      <Header />

      <main className="flex flex-col flex-1 mb-12">
        {children}
      </main>

      <Footer />
    </div>
  );
}