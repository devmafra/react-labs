import React from "react";

export function GlobalEvent() {
  const handleonKeyDown = (event) => {
    if (event.key === "Enter") {
      alert("Você pressionou a tecla (global): " + event.key);
    }
  };

  const ativarListener = () => {
    document.addEventListener("keydown", handleonKeyDown);
  };
  const desativarListener = () => {
    document.removeEventListener("keydown", handleonKeyDown);
  };
  return (
    <div>
      <p>
        Pressione a tecla <code>Enter</code> em qualquer lugar da aplicação.
      </p>
      <button onClick={ativarListener}>Ativar</button>
      <button onClick={desativarListener}>Desativar</button>
    </div>
  );
}
