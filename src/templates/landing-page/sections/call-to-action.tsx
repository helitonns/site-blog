import { ArrowRight, Store } from "lucide-react";
import Link from "next/link";
import { Button } from "../../../components/ui/button";

export function CallToAction(){

  return(
    <section className="py-22 bg-linear-to-b from-cyan-950/35 to-gray-700 relative">
      
      <div className="absolute inset-0 bg[url('/background-footer.svg')] bg-cover bg-center bg-no-repeat opacity-90"/>
      
      <div className="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 p-4 bg-cyan-300 w-fit rounded-full">
        <Store className="text-cyan-100" />
      </div>

      <div className="container relative">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className={"font-sans text-gray-100 text-heading-xl text-balance"}>Crie uma loja online e inicie suas vendas ainda hoje</h2>
          <Button className="w-fit mt-6" asChild>
            <Link href={"/criar-loja"}>
              Criar loja grátis
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}