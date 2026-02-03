import React from "react";
import { ComponentA } from "./components/ComponentA";
import { ComponentD } from "./components/ComponentD";

export default function App() {
  const userData = { nome: "Davi", idade: 38, cidade: "Bertioga" };

  return (
    <div>
      <h1>Prop Drilling</h1>
      <h2>Cenário 1: Prop Drilling Completo</h2>
      <ComponentA
        nome={userData.nome}
        idade={userData.idade}
        cidade={userData.cidade}
      />
      <h2>Cenário 2: Prop Drilling Parcial</h2>
      <ComponentA nome={userData.nome} idade={userData.idade} />
      <ComponentD cidade={userData.cidade} />
      <h2>Cenário 3: Sem Prop Drilling</h2>
      <ComponentD
        nome={userData.nome}
        idade={userData.idade}
        cidade={userData.cidade}
      />
    </div>
  );
}
