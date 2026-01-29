import React, { useEffect, useState } from "react";

export function Contador() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log(" Intervalo rodando...");
    }, 1000);

    return () => {
      console.log("Limpando intervalo");
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h3>Número: {contador}</h3>
      <button onClick={() => setContador((prev) => prev + 1)}>Aumentar</button>
    </div>
  );
}
