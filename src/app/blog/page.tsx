import { BlogList } from "@/templates/blog";
import { allPosts } from "contentlayer/generated";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Dicas estratégicas para impulsionar seu negócio",
  robots: "index, follow",
  openGraph: {
    title: "Blog",
    description: "Dicas estratégicas para impulsionar seu negócio",
    url: 'https://nextjs-fundamentos.vercel.app/og-image.jpg',
    siteName: 'Blog',
    locale: 'pt-BR',
    type: 'website',
    images: [
      {
        url: 'https://nextjs-fundamentos.vercel.app/og-image.jpg',
        width: 800,
        height: 600,
        alt: 'Blog',
      },
    ],
  }
}

export default function BlogListPage(){
  const sortedPosts = allPosts.sort((a, b)=> new Date(b.date).getTime() - new Date(a.date).getTime());

  return(
    <BlogList posts={sortedPosts}/>
  );
}