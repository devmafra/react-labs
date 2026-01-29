import React from "react";
import { Botao } from "./Botao";

export function Mensagem({ titulo, conteudo, children }) {
  return (
    <>
      <h1>{titulo}</h1>
      <p>{conteudo}</p>
      {children}
    </>
  );
}
