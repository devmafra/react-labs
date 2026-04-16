import React from "react";
import produtos from "../assets/data.js";
import { Link, useNavigate, useParams } from "react-router";

export function Details() {
  const navigate = useNavigate();
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
        <br />
        <button onClick={() => navigate(`/products/${produto.id}/info`)}>
          + Informações
        </button>
        <br />
        <Link to="/products">Voltar aos Produtos</Link>
      </div>
    );
  }
}
