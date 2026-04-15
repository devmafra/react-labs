import React from 'react'
import { useMensagemControlada } from '../hooks/useMensagemControlada'

export function BotaoControlado() {
    const {exibirMensagem} = useMensagemControlada(0);
  return (
    <button onClick={() => exibirMensagem("Olá controle!")}>Mensagem Controlada</button>
  )
}

