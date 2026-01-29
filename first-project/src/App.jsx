import React, { useState } from "react";
import { Botao } from "./components/Botao";
import { Mensagem } from "./components/Mensagem";
import "./style.css";
import "./global.css";

export function App() {
  const [ativo, setAtivo] = useState(true);

  const toggleAtivo = () => setAtivo(!ativo);

  return (
    <>
      <div className="container">
        <h1>Bem vindo às aulas de CSS no React</h1>
        <Botao text="Clique aqui" onClick={toggleAtivo} />
        <hr />
        <Botao text="Clique" />
        <hr />
        <Mensagem>
          <p style={{ color: ativo ? "green" : "gray" }}>
            Status: {ativo ? "Ativo" : "Inativo"}
          </p>
        </Mensagem>
      </div>
    </>
  );
}
