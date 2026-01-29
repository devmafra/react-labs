import React from "react";

export function Alert(props) {
  const handleClick = () => {
    if (props.tipo === "semParametro") {
      alert("Mensagem sem parâmetro");
    }
    if (props.tipo === "comParametro") {
      alert("Mensagem via parâmetro: " + props.parametro);
    }
    if (props.tipo === "comEvento") {
      const valorInput = event.target.previousElementSibling.value;
      alert("Você digitou: " + valorInput);
    }
  };

  const handleMouseOver = () => {
    if (props.tipo === "onMouseOver") {
      alert("Passou o mouse por cima");
    }
  };
  const handleDoubleClick = () => {
    if (props.tipo === "onDoubleClick") {
      alert("Duplo clique detectado");
    }
  };
  const handleonKeyDown = (event) => {
    if (props.tipo === "onKeyDown") {
      if (event.key === "Enter") {
        alert("Você pressionou a tecla: " + event.key);
      }
    }
  };

  return (
    <div>
      {(props.tipo === "comEvento" || props.tipo === "onKeyDown") && (
        <input
          type="text"
          placeholder="Digite algo aqui..."
          onKeyDown={handleonKeyDown}
        />
      )}
      {props.tipo !== "onKeyDown" && (
        <button
          onClick={handleClick}
          onMouseOver={handleMouseOver}
          onDoubleClick={handleDoubleClick}
        >
          {props.children}
        </button>
      )}
    </div>
  );
}
