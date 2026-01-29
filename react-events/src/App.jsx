import React from "react";
import { Alert } from "./components/Alert";
import { GlobalEvent } from "./components/GlobalEvent";

export function App() {
  return (
    <div>
      <h1>Eventos na prática com props</h1>
      <Alert tipo={"semParametro"}>Alerta sem parâmetro</Alert>
      <br />
      <Alert tipo={"comParametro"} parametro={"Olá eu sou um parâmetro"}>
        Alerta com parâmetro
      </Alert>
      <br />
      <Alert tipo={"comEvento"}>Alerta com valor do input</Alert>
      <br />
      <Alert tipo={"onMouseOver"}>Passou o mouse por cima</Alert>
      <br />
      <Alert tipo={"onDoubleClick"}>Clique duas vezes</Alert>
      <br />
      <Alert tipo={"onKeyDown"}>Voce pressionou a tecla no input</Alert>
      <br />
      <GlobalEvent />
    </div>
  );
}
