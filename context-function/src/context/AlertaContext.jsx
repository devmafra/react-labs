import { createContext } from "react";

// Criar um contexto
export const AlertaContext = createContext();

//  Criar o Provider
export function AlertaProvider({ children }) {
  function mostrarAlerta(mensagem) {
    alert(`Alerta: ${mensagem}`);
  }

  return <AlertaContext.Provider value={{mostrarAlerta}}>{children}</AlertaContext.Provider>;
}
