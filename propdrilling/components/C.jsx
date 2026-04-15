import React from "react";
import { D } from "./D";

export function C({nome, idade, cidade}) {
  return (
    <div>
      <h2>Componente C</h2>
      <D nome={nome} idade={idade} cidade={cidade}/>
    </div>
  );
}
