import React from "react";
import { A } from "./components/A";

function App() {
  let nome = "Millene";
  let idade = 28;
  let cidade = "São Paulo";

  return (
    <div>
      <h2>APP</h2>
      <A nome={nome} idade={idade} cidade={cidade}/>
    </div>
  );
}

export default App;
