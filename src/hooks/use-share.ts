import { ShareConfig } from "./social-providers";

type UseShareProps = ShareConfig & {
  clipboardTimeout?: number;
}

export function useShare({ url, title, text, clipboardTimeout = 200}: any){
  const shareConfig = {
    url,
    ...(title && { title }),
    ...(text && { text })
  }

  return {

  }
}