// Criar um contexto

import { createContext, useState } from "react";

export const GlobalStateContext = createContext();


// Criar Provider que vai envolver a nossa aplicação
export function GlobalStateProvider({children}) {
    const [contador, setContador] = useState(0);

    return (
        <GlobalStateContext.Provider value={{contador, setContador}}>
            {children}
        </GlobalStateContext.Provider>
    )
}