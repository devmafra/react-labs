import { useCallback, useMemo, useState } from "react";
import Contador from "./components/Contador";
import ListaProdutos from "./components/ListaProdutos";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [contador, setContador] = useState(0);

  const productsList = useMemo(
    () => [
      { id: 1, nome: "Notebook", categoria: "eletronicos" },
      { id: 2, nome: "Camiseta", categoria: "roupas" },
      { id: 3, nome: "Geladeira", categoria: "eletrodomesticos" },
      { id: 4, nome: "Calca", categoria: "roupas" },
      { id: 5, nome: "Celular", categoria: "eletronicos" },
    ],
    [],
  );

  const handleIncrementar = useCallback(() => {
    setContador((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h1>Lista de Produtos</h1>
      <label htmlFor="filtro">
        Filtrat por categoria{" "}
        <select
          name="filtro"
          id="filtro"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Todas</option>
          <option value="eletronicos">Eletrônicos</option>
          <option value="roupas">Roupas</option>
          <option value="eletrodomesticos">Eletrodomésticos</option>
        </select>
      </label>
      <ListaProdutos products={productsList} category={selectedCategory} />
      <Contador valor={contador} incrementar={handleIncrementar} />
    </div>
  );
}

export default App;
