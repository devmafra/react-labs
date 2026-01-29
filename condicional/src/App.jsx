import React, { useState } from "react";

export function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [contador, setContador] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  let mensagem;

  if (contador >= 5) {
    mensagem = <p>Cuidado! O contador está muito alto!</p>;
  }

  return (
    <>
      <h1>Renderização Condicional</h1>
      <div style={{ border: "1px solid black", padding: "0 15px 15px 15px" }}>
        <h2>Operador Ternário</h2>

        <p>{isLogged ? "Bem-vindo" : "Por favor faça o login"}</p>
        <button onClick={() => setIsLogged(!isLogged)}>
          {isLogged ? "Sair" : "Entrar"}
        </button>
      </div>

      <br />

      <div style={{ border: "1px solid red", padding: "0 15px 15px 15px" }}>
        <h2>IF</h2>

        <p>Valor do Contador: {contador}</p>
        {mensagem}
        <button onClick={() => setContador((prev) => prev + 1)}>
          Aumentar
        </button>
        <button onClick={() => setContador(0)}>Zerar</button>
      </div>

      <br />

      <div style={{ border: "1px solid blue", padding: "0 15px 15px 15px" }}>
        <h2>Curto Circuito (&&)</h2>
        <label>
          <input
            type="checkbox"
            onChange={() => setShowMessage(!showMessage)}
          />
          Mostrar mensagem secreta
        </label>
        {showMessage && <p>Parabéns! Você descobriu o segredo!</p>}
      </div>
    </>
  );
}
