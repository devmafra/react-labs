import React from "react";
import { useGlobalState } from "../hooks/useGlobalState";

export function ContadorHookPersonalizado() {
  const { contador, setContador } = useGlobalState();
  return (
    <div>
      <h2>Contador: {contador}</h2>
      <button onClick={() => setContador((prev) => prev * 2)}>Dobrar</button>
    </div>
  );
}
