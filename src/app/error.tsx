"use client";

import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

type ErrorBoundaryProps = {
  error: Error;
  reset: ()=> void;
}


export default function ErrorBoundary({error, reset} : ErrorBoundaryProps){

  return(
    <div className="container min-h-150 flex items-center justify-center text-gray-100 p-4">
      <div className="max-w-md w-full text-center">
        <div className="relative inline-block mb-8">
          <AlertTriangle size={64} className="text-cyan-100 mx-auto"/>
          
          <div className="absolute w-24 h-24 rounded-full border-t-2 border-cyan-100 animate-spin top-1/2 left-1/2 transform -translate-x-1/2 
          -translate-y-1/2"></div>
        </div>

        <h2 className="text-heading-md text-gray-100 font-sans mb-2">Alguma coisa aconteceu de errado!</h2>
        {error?.message && <p className="text-body-xs text-cyan-100 mb-2 px-4 overflow-hidden text-ellipsis max-h-24">{error?.message}</p>}

        <Button variant="secondary" onClick={reset} className="mt-8">
          Tente novamente
        </Button>
      </div>
    </div>
  );
}