import React, { useContext } from 'react'
import { GlobalStateContext } from '../context/GlobalStateContext'

export function ContadorHook() {
    const {contador, setContador} = useContext(GlobalStateContext);
  return (
    <>
    <h2>Contador: {contador}</h2>
    <button onClick={() => setContador((prev) => prev + 1)}>Incrementar</button>
    </>
  )
}

