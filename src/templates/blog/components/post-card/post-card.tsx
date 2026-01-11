import Image from "next/image";
import Link from "next/link";

export function PostCard(){

  return(
    <Link href={`/blog/`} className="w-full max-w-2xl rounded-3xl border border-gray-400 
    bg-gray-600 overflow-hidden transition-all duration-200 hover:border hover:border-blue-300">
      //Container
      <div className="p-2 rounded-md overflow-hidden">
        
        //imagem
        <div className="relative">
          //data
          <div className="absolute top-0 right-0 px-3 py-1">
            <span className="text-body-xs text-gray-300">20/12/2024</span>
          </div>
          <Image 
            src={"/assets/primeiro-post.png"}
            alt=""
            width={288}
            height={144}
            className="w-full h-40 object-cover object-center"
          />
        </div>

        //post info
        <div className="px-2 mt-4 space-y-4">
          <h2 className="text-heading-sm text-gray-100 line-clamp-3">Transformando seu negócio em uma loja virtual</h2>
          <p className="text-gray-300 text-body-sm text-justify line-clamp-3 ">
            Se você está buscando uma maneira simples e eficaz de vender seus produtos online, 
            o Site.Set é a solução perfeita para você. Criar uma loja virtual de sucesso nunca 
            foi tão fácil. Com nossa plataforma intuitiva, você pode criar um site profissional 
            para sua loja em minutos, sem precisar de conhecimentos técnicos.
          </p>

          //post footer
          <div className="flex items-center gap-3 border-t border-gray-400 py-4">
            <div className="relative w-5 h-5 md:w-6 md:h-6 overflow-hidden rounded-full border border-blue-200">
              <Image
                src={"/customer-01.png"}
                alt=""
                fill
                className="object-cover rounded-md"
                />
            </div>
            <span className="text-body-sm text-gray-300">Aspen Dokidis</span>
          </div>
        </div>

      </div>
    </Link>
  );
}