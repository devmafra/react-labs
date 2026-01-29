import React from "react";

export function Dados() {
  const tecnologia = "React";

  function soma(a, b) {
    return a + b;
  }

  function concatena(valor1, valor2) {
    return valor1 + " " + valor2;
  }
  return (
    <>
      <h1>{tecnologia} é incrível!</h1>
      <h2>2 + 3 = {soma(2, 3)}</h2>
      <h3>{concatena("Davi", "Dev")}</h3>
    </>
  );
}
