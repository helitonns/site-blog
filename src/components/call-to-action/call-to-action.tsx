import { ArrowRight, Store } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export function CallToAction(){

  return(
    <section className="py-22 bg-linear-to-b from-cyan-950/35 to-gray-700 relative">
      <div className="absolute inset-0 bg[url('/background-footer.svg')] bg-cover bg-center bg-no-repeat opacity-90"/>
      <div className="container relative">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="p-4 bg-cyan-300 w-fit rounded-full -mt-28">
            <Store className="text-cyan-100"/>
          </div>
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