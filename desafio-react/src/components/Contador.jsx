import React, { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";

export function Contador() {
  const [contador, setContador] = useState(0);
  const [increment, setIncrement] = useState(1);

  const handleAumentar = () => {
    if (increment < 1) return;
    setContador((prev) => prev + increment);
  };
  const handleDiminuir = () => {
    setContador((prev) => (prev > 0 ? prev - 1 : 0));
  };
  const handleZerar = () => setContador(0);
  const handleDobrar = () => setContador((prev) => prev * 2);

  const handleIncrement = (e) => {
    const valorInput = e.target.value.trim();
    const valorNumerico = Number(valorInput);

    if (valorInput === "") {
      setIncrement("");
      return;
    }

    setIncrement(valorNumerico);
  };

  return (
    <div>
      <h3>Contador de cliques</h3>
      <p>
        Valor Atual: <strong>{contador}</strong>
      </p>
      <br />
      <span>Valor a incrementar:</span>
      <Input
        type="number"
        className="input input-number"
        onChange={handleIncrement}
        min="1"
        value={increment}
      />
      <Button onClick={handleAumentar} disabled={increment < 1}>
        Aumentar
      </Button>
      <Button onClick={handleDiminuir} disabled={contador === 0}>
        Diminuir
      </Button>
      <Button onClick={handleZerar}>Zerar</Button>
      <Button onClick={handleDobrar}>Dobrar</Button>
    </div>
  );
}
