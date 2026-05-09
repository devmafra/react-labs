import React, { useMemo } from "react";
import { Produto } from "./Produto";

function ListaProdutos({ products, category }) {
  console.log("Filtrando produtos...");

  const filteredProducts = useMemo(() => {
    if (!category) return products;

    return products.filter((product) => product.categoria === category);
  }, [products, category]);

  return (
    <ul>
      {filteredProducts.map((product) => (
        <Produto key={product.id} nome={product.nome} />
      ))}
    </ul>
  );
}

export default React.memo(ListaProdutos);
