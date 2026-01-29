#!/bin/bash

echo "📚 Gerando Índice Geral de Projetos..."

# Cria uma lista com os nomes das pastas para passar ao Gemini
LISTA_PROJETOS=$(ls -d */ | grep -v "node_modules" | grep -v ".git")

# Prompt para o Gemini criar o Índice
gemini -p "Aja como um Engenheiro de Software organizando um portfólio. 
Com base nesta lista de subpastas:
$LISTA_PROJETOS

Gere um arquivo README.md principal para a raiz do repositório. 
O conteúdo deve ter:
1. Um título chamativo (ex: Portfólio de Estudos React).
2. Uma tabela ou lista com o nome do projeto e um link para a pasta (ex: [Nome](./pasta)).
3. Uma breve explicação de que este é um repositório de aprendizado.
Responda APENAS com o Markdown puro." --output-format text > README.md

echo "✅ README.md principal gerado com sucesso!"
