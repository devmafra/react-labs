import React, { useState } from "react";

export function useMessage() {
  const [user, setUser] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleMessage = (evento) => {
    if (evento.key === "Enter") {
      setUser(evento.target.value);
      setShowMessage(true);
    }
  };

  // return `Olá, ${nome}! seja bem vindo ao nosso app!`;
  return { user, showMessage, handleMessage };
}
