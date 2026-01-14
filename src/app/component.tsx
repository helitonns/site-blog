"use client";

import React from "react";


export default function ErrorComponent(){
  React.useEffect(()=> {
    throw new Error("Componente lançando um erro");
  }, []);

  return(
    <h2>Error Component</h2>
  );
}