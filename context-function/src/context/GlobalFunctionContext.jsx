import { createContext } from "react";

export const GlobalFunctionContext = createContext();

function mostrarMensagem(mensagem) {
    alert(`Mensagem: ${mensagem}`);
}

function logMensagem(mensagem) {
    console.log(`LOG: ${mensagem}`);
}

export function GlobalFunctionProvider({children}) {
    return (
        <GlobalFunctionContext.Provider value={{mostrarMensagem, logMensagem}}>
            {children}
        </GlobalFunctionContext.Provider>
    )
}