import React from "react";
import { ComponentB } from "./ComponentB";

export function ComponentA({ nome, idade, cidade }) {
  return (
    <>
      <h3>Componente A</h3>
      <ComponentB nome={nome} idade={idade} cidade={cidade} />
    </>
  );
}
