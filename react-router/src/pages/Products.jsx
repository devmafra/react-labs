import React from "react";
import { Link } from "react-router";
import produtos from "../assets/data.js";

export function Products() {
  return (
    <div>
      <h1>Lista de Produtos</h1>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>
            <Link to={`/products/${produto.id}`}>{produto.nome}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
