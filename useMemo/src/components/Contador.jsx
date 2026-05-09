import React from "react";

function Contador({ valor, incrementar }) {
  console.log("Renderizando contador...");

  return (
    <div>
      <h2>Contador: {valor}</h2>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

export default React.memo(Contador);
