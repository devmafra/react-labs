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
    </div>
  );
}
