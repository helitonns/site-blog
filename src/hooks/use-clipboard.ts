"use client";

import React from "react";

type useClipboardProps = {
  timeout?: number;
}

export function useClipboard({ timeout = 2000 }: useClipboardProps){
  const [isCopied, setIsCopied] = React.useState(false);

  const handleCopy = React.useCallback(async (text: string)=> {
    if(!navigator.clipboard){
      console.log("Clipboard não suportado");
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
    } catch (error) {
      console.error("Falha ao copiar o texto: ", error);
      setIsCopied(false);
      return false;
    }

  }, []);

  React.useEffect(()=> {
    if(isCopied){
      const timer = setTimeout(()=> {
        setIsCopied(false);
      }, timeout);
      return ()=> clearTimeout(timer);
    }
  }, [isCopied, timeout]);

  return{
    isCopied,
    handleCopy
  }
}