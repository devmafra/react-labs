import React from "react";
import { useMessage } from "./hooks/useMessage.jsx";
import { Contador } from "./components/Contador.jsx";
import { useTextoDigitado } from "./hooks/useTextoDigitado.jsx";

export function App() {
  const { user, showMessage, handleMessage } = useMessage();
  const [message, handleInputMessage] = useTextoDigitado();

  return (
    <div>
      <Contador />
      <h1>Caixa de Mensagem de Bem vindo</h1>
      <input
        type="text"
        placeholder="Digite seu nome..."
        onKeyDown={handleMessage}
      />
      {showMessage && <p>Olá, {user}! Seja bem vindo ao nosso app!</p>}

      <br />
      <input
        type="text"
        placeholder="Digite sua mensagem"
        onChange={handleInputMessage}
      />
      <p>{message}</p>
    </div>
  );
}
