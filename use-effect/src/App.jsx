import React, { useEffect, useState } from "react";
import { Contador } from "./components/Contador";

export function App() {
  const [mensagem, setMensagem] = useState("");
  const [numero, setNumero] = useState(0);
  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    setMensagem("O número atual é:  " + numero);
  }, [numero]);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     console.log("rodando a cada segundo " + timer);
  //   }, 1000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  return (
    <>
      <h1>UseEffect</h1>
      <p>{mensagem}</p>
      <button onClick={() => setNumero(numero + 1)}>Aumentar</button>
      <hr />

      <h2>Função Limpeza</h2>
      <button onClick={() => setIsShow(!isShow)}>
        {isShow ? "Ocultar Contador" : "Mostra Contador"}
      </button>
      {isShow && <Contador />}
    </>
  );
}
