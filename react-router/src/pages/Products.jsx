import React from "react";
import { Link, useSearchParams } from "react-router";
import produtos from "../assets/data.js";

export function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  const categoria = searchParams.get("categoria");
  const preco = searchParams.get("preco");

  const produtosFiltrados = produtos.filter((produto) => {
    return (
      (categoria ? produto.categoria === categoria : true) &&
      (preco ? produto.preco <= preco : true)
    );
  });

  const handleFiltro = (chave, valor) => {
    setSearchParams((prev) => {
      if (valor) prev.set(chave, valor);
      else prev.delete(chave);
      return prev;
    });
  };

  const todosProdutos = () => {
    setSearchParams({});
  };

  return (
    <div>
      <h1>Lista de Produtos</h1>

      <div style={{ margin: "10px 0 10px 0" }}>
        <span>Filtro por Categoria</span>
        <button
          onClick={() => handleFiltro("categoria", "eletrônico")}
          style={{
            backgroundColor: categoria === "eletrônico" ? "lightblue" : "",
          }}
        >
          Eletrônico
        </button>
        <button
          onClick={() => handleFiltro("categoria", "vestuário")}
          style={{
            backgroundColor: categoria === "vestuário" ? "lightblue" : "",
          }}
        >
          Vestuário
        </button>
        <button onClick={() => todosProdutos()}>Todos</button>
        <hr />
        <span ib>Filtro por Preço</span>
        <button
          onClick={() => handleFiltro("preco", 4000)}
          style={{
            backgroundColor: preco === "4000" ? "lightblue" : "",
          }}
        >
          Até R$ 4000,00
        </button>
        <button
          onClick={() => handleFiltro("preco", 200)}
          style={{
            backgroundColor: preco === "200" ? "lightblue" : "",
          }}
        >
          Até R$ 200,00
        </button>
        <button
          onClick={() => handleFiltro("preco", 150)}
          style={{
            backgroundColor: preco === "150" ? "lightblue" : "",
          }}
        >
          Até R$ 150,00
        </button>
      </div>
      <ul>
        {produtosFiltrados.map((produto) => (
          <li key={produto.id}>
            <Link to={`/products/${produto.id}`}>
              {produto.nome} - {produto.preco}
            </Link>
          </li>
        ))}
        {produtosFiltrados.length === 0 && (
          <p style={{ color: "red" }}>Nenhum produto Encontrado!</p>
        )}
      </ul>
    </div>
  );
}
