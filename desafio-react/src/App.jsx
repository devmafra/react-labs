import React from "react";
import "./global.css";
import { Contador } from "./components/Contador";
import { TextInverter } from "./components/TextInverter";

export function App() {
  return (
    <div>
      <h1>Desafios</h1>
      <h2>Desafio 1</h2>
      <Contador />
      <h2>Desafio 2</h2>
      <TextInverter />
    </div>
  );
}

// ! ➕ Desafio 1: Dobrar o contador
// Crie um novo botão que, ao ser clicado, dobre o valor do contador atual. Se o contador estiver em 5,
// ele deve passar para 10. Se estiver em 8, ele deve ir para 16, e assim por diante.
// 💡 Dica: Você precisará modificar o estado do contador usando setContador!

// ! 🔄 Desafio 2: Inverter o texto da mensagem
// Adicione um botão ao lado do campo de texto. Quando o usuário clicar nesse botão, o texto digitado
// deve ser invertido. Por exemplo:
// ●  Se ele digitar "React", deve aparecer "tcaeR".
// ●  Se ele digitar "useState", deve aparecer "etatSesu".
// 💡 Dica: Pesquise como inverter uma string em JavaScript!

// ! ⛔ Desafio 3: Desabilitar o botão "Diminuir" quando o contador estiver em zero
// Modifique o botão "Diminuir" para que ele fique desativado (disabled) sempre que o contador estiver
// em 0. Isso evita que o número fique negativo.
// 💡 Dica: Você vai precisar verificar o valor do contador antes de permitir que ele diminua!

// ! 🚦 Desafio 4: Criar um input para definir o incremento do contador
// Adicione um novo campo de entrada (input) onde o usuário pode digitar de quanto em quanto o
// contador deve aumentar.  Por exemplo:
// ●  Se ele digitar 3, ao clicar no botão "Aumentar", o contador deve crescer de 3 em 3.
// ●  Se ele digitar 10, o contador deve crescer de 10 em 10.
// 💡 Dica: Esse novo valor do incremento também pode ser guardado em um estado usando useState!
