import React, { useContext } from "react";
import { AlertaContext } from "../context/AlertaContext";
import { GlobalFunctionContext } from "../context/GlobalFunctionContext";

export function OutraMensagem() {
  const { mostrarAlerta } = useContext(AlertaContext);
  const { mostrarMensagem } = useContext(GlobalFunctionContext);
  return (
    <>
      <p onClick={() => mostrarAlerta("Você clicou no parágrafo")}>
        Clique aqui também
      </p>
      <p onClick={() => mostrarMensagem("Olá sou um novo provider")}>
        Provider Diferente
      </p>
    </>
  );
}
