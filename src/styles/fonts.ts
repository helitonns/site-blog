import { Inter, PT_Sans_Caption } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"], 
  variable: "--font-inter"
});

export const ptSansCaption = PT_Sans_Caption({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-sans" 
});