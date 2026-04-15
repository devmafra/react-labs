import React, { useContext, useState } from 'react'
import { GlobalFunctionContext } from '../context/GlobalFunctionContext'
// Hook controle de repetição de mensagem e intervalo usando estados

export function useMensagemControlada(intervalo = 3000) {
    const {mostrarMensagem, logMensagem} = useContext(GlobalFunctionContext);
    const [ultimaMensagem, setUltimaMensagem] = useState("");
    const [bloqueado, setBloqueado] = useState(false);

    function exibirMensagem(mensagem) {
        // Verificação
        if (bloqueado && mensagem === ultimaMensagem) {
            logMensagem("Mensagem Bloqueada por repetição");
            return;
        }

        mostrarMensagem(mensagem);
        logMensagem("Mensagem exibida");
        setUltimaMensagem(mensagem);
        setBloqueado(true);

        setTimeout(() => {
            setBloqueado(false);
        }, intervalo);

    }

  return {exibirMensagem};
}

