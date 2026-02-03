import React from "react";

export function ComponentD({ nome, idade, cidade }) {
  return (
    <>
      <h3>Componente D</h3>
      {nome && <p>Nome: {nome}</p>}
      {idade && <p>Idade: {idade}</p>}
      {cidade && <p>Cidade: {cidade}</p>}
    </>
  );
}
