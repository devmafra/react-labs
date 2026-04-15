import React from "react";
import { C } from "./C";

export function B({nome, idade, cidade}) {
  return (
    <div>
      <h2>Componente B</h2>
      <C nome={nome} idade={idade} cidade={cidade}/>
    </div>
  );
}
