import React from "react";
import { ComponentD } from "./ComponentD";

export function ComponentC({ nome, idade, cidade }) {
  return (
    <>
      <h3>Componente C</h3>
      <ComponentD nome={nome} idade={idade} cidade={cidade} />
    </>
  );
}
