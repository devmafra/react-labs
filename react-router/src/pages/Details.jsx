import React from "react";
import produtos from "../assets/data.js";
import { Link, useParams } from "react-router";

export function Details() {
  const { id } = useParams();

  if (id) {
    const produto = produtos.find((p) => p.id === id);

    if (!produto) {
      return (
        <div>
          <h1>Produto Não encontrado</h1>
          <Link to="/products">Voltar aos Produtos</Link>
        </div>
      );
    }

    return (
      <div>
        <h1>Detalhes de Produto</h1>
        <h2>{produto.nome}</h2>
        <p>Categoria: {produto.categoria}</p>
        <p>Preço: {produto.preco}</p>
        <p>Descrição: {produto.descricao}</p>
        <Link to="/products">Voltar aos Produtos</Link>
      </div>
    );
  }
}
