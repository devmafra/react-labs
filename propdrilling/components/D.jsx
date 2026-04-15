import React from "react";

export function D({nome, idade, cidade}) {
  return (
    <div>
      <h2>Componente D</h2>
      <p>Nome: {nome}</p>
      <p>Idade: {idade}</p>
      <p>Cidade: {cidade}</p>
    </div>
  );
}
