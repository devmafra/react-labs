import React from "react";
import { ComponentC } from "./ComponentC";

export function ComponentB({ nome, idade, cidade }) {
  return (
    <>
      <h3>Componente B</h3>
      <ComponentC nome={nome} idade={idade} cidade={cidade} />
    </>
  );
}
