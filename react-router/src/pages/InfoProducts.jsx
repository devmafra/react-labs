import React from "react";
import { useParams } from "react-router";
import produtos from "../assets/data";

export function InfoProducts() {
  const { id } = useParams();
  const product = produtos.find((item) => item.id === id);

  if (!product) {
    return <p>Produto não encontrado!</p>;
  }

  return (
    <div>
      <h1>{product.nome}</h1>
      <p>{product.informações}</p>
    </div>
  );
}
