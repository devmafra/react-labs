import React, { useState } from "react";

export function Contador() {
  const [contador, setContador] = useState(0);

  const handleAumentar = () => {
    setContador((prev) => prev + 1);
  };
  const handleDiminuir = () => {
    if (contador > 0) {
      setContador((prev) => prev - 1);
    }
  };
  const handleZerar = () => {
    setContador(0);
  };

  return (
    <div>
      <h2>Contador de cliques</h2>
      <p>Valor Atual: {contador} </p>
      <button onClick={handleAumentar}>Aumentar</button>
      <button onClick={handleDiminuir}>Diminuir</button>
      <button onClick={handleZerar}>Zerar</button>
    </div>
  );
}
