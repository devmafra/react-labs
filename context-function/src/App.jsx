import React from "react";
import { BotaoAlert } from "./components/BotaoAlert";
import { OutraMensagem } from "./components/OutraMensagem";
import { GlobalFunctionProvider } from "./context/GlobalFunctionContext";
import { BotaoConsumer } from "./components/BotaoConsumer";
import { BotaoControlado } from "./components/BotaoControlado";

function App() {
  return (
    <div>
      <BotaoAlert />

      <GlobalFunctionProvider>
        <OutraMensagem />
        <BotaoConsumer />
        <BotaoControlado />
      </GlobalFunctionProvider>
    </div>
  );
}

export default App;
