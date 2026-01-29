#!/bin/bash

DIRETORIOS=${1:-*/}

for d in $DIRETORIOS; do
    folder_name="${d%/}"
    
    if [[ "$folder_name" == "node_modules" || "$folder_name" == ".git" ]]; then
        continue
    fi

    echo "--------------------------------------------"
    echo "🤖 Analisando: $folder_name"
    
    # Prompt focado em simplicidade e proibição de conversas extras
    gemini -p "Analise a pasta '$folder_name'. Responda APENAS com um Markdown minimalista contendo: 
    # [Nome do Projeto]
    ## Descrição
    (Uma frase sobre o que o projeto faz)
    ## Tecnologias
    (Lista simples em tópicos)
    ## Como rodar
    npm install && npm run dev. 
    NÃO fale mais nada além do markdown." --output-format text > "${folder_name}/README.md"

    echo "✅ Concluído em $folder_name"
done

echo "--------------------------------------------"
echo "🎉 Processo concluído!"