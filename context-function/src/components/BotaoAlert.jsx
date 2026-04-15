import React, { useContext } from 'react'
import { AlertaContext } from '../context/AlertaContext'

export function BotaoAlert() {
    const {mostrarAlerta} = useContext(AlertaContext);
  return (
    <button onClick={() => mostrarAlerta("Você clicou no botão!")}>Clique para Alerta</button>
  )
}

