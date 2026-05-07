import { useEffect, useRef, useState } from "react";

export default function App() {
  const scrollRef = useRef(null);
  const [scrollPorcentagem, setScrollPorcentagem] = useState(0);

  useEffect(() => {
    //Função ser chamada toda vez que o usuário rolar o container

    //Acessa o elemento diretamente
    const elemento = scrollRef.current;

    function handleScroll() {
      //Extrai propriedades do elemento DOM que temos a referência
      const { scrollTop, scrollHeight, clientHeight } = elemento;
      //scrollTop: quanto foi rolado a partir do topo
      //scroolHeight: altura total do conteúdo interno
      //clientHeight: altura vísivel do container

      //Calcular Porcentagem rolada com base em um fórmula:
      const totalRolado = (scrollTop / (scrollHeight - clientHeight)) * 100;

      //Arrendondar o valor e atualizar o estado
      setScrollPorcentagem(Math.round(totalRolado));
    }

    //Adicionar ouvinte de evento
    elemento.addEventListener("scroll", handleScroll);

    //Retornar um função limpeza
    //Remover o ouvinte de evento e evitar vazamento de memória
    return () => {
      elemento.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        style={{
          height: "300px",
          overflowY: "scroll",
          border: "2px solid blue",
        }}
        ref={scrollRef}
      >
        <div style={{ height: "1000px", padding: "1rem" }}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            sapiente ullam velit accusantium enim quae ratione rerum nisi alias
            eos, vero sint tempora ut aut iste facilis dignissimos aliquid
            labore. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Cum eos facere nisi, distinctio sunt dignissimos delectus amet iure
            esse rem, ratione maiores possimus est fugiat quia, dicta quis
            repellat commodi. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quos quam nisi officiis corrupti reprehenderit dolores
            corporis voluptas in doloribus eum iure, adipisci commodi deleniti,
            veniam sapiente odio pariatur magnam fugit! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Adipisci sapiente ullam velit
            accusantium enim quae ratione rerum nisi alias eos, vero sint
            tempora ut aut iste facilis dignissimos aliquid labore. Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Cum eos facere nisi,
            distinctio sunt dignissimos delectus amet iure esse rem, ratione
            maiores possimus est fugiat quia, dicta quis repellat commodi. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Quos quam nisi
            officiis corrupti reprehenderit dolores corporis voluptas in
            doloribus eum iure, adipisci commodi deleniti, veniam sapiente odio
            pariatur magnam fugit! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Adipisci sapiente ullam velit accusantium enim
            quae ratione rerum nisi alias eos, vero sint tempora ut aut iste
            facilis dignissimos aliquid labore. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Cum eos facere nisi, distinctio sunt
            dignissimos delectus amet iure esse rem, ratione maiores possimus
            est fugiat quia, dicta quis repellat commodi. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quos quam nisi officiis corrupti
            reprehenderit dolores corporis voluptas in doloribus eum iure,
            adipisci commodi deleniti, veniam sapiente odio pariatur magnam
            fugit! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Adipisci sapiente ullam velit accusantium enim quae ratione rerum
            nisi alias eos, vero sint tempora ut aut iste facilis dignissimos
            aliquid labore. Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Cum eos facere nisi, distinctio sunt dignissimos delectus amet
            iure esse rem, ratione maiores possimus est fugiat quia, dicta quis
            repellat commodi. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quos quam nisi officiis corrupti reprehenderit dolores
            corporis voluptas in doloribus eum iure, adipisci commodi deleniti,
            veniam sapiente odio pariatur magnam fugit! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Adipisci sapiente ullam velit
            accusantium enim quae ratione rerum nisi alias eos, vero sint
            tempora ut aut iste facilis dignissimos aliquid labore. Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Cum eos facere nisi,
            distinctio sunt dignissimos delectus amet iure esse rem, ratione
            maiores possimus est fugiat quia, dicta quis repellat commodi. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Quos quam nisi
            officiis corrupti reprehenderit dolores corporis voluptas in
            doloribus eum iure, adipisci commodi deleniti, veniam sapiente odio
            pariatur magnam fugit! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Adipisci sapiente ullam velit accusantium enim
            quae ratione rerum nisi alias eos, vero sint tempora ut aut iste
            facilis dignissimos aliquid labore. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Cum eos facere nisi, distinctio sunt
            dignissimos delectus amet iure esse rem, ratione maiores possimus
            est fugiat quia, dicta quis repellat commodi. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quos quam nisi officiis corrupti
            reprehenderit dolores corporis voluptas in doloribus eum iure,
            adipisci commodi deleniti, veniam sapiente odio pariatur magnam
            fugit! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Adipisci sapiente ullam velit accusantium enim quae ratione rerum
            nisi alias eos, vero sint tempora ut aut iste facilis dignissimos
            aliquid labore. Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Cum eos facere nisi, distinctio sunt dignissimos delectus amet
            iure esse rem, ratione maiores possimus est fugiat quia, dicta quis
            repellat commodi. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quos quam nisi officiis corrupti reprehenderit dolores
            corporis voluptas in doloribus eum iure, adipisci commodi deleniti,
            veniam sapiente odio pariatur magnam fugit!
          </p>

          <p
            style={{
              position: "absolute",
              top: 0,
              background: "blue",
              color: "white",
            }}
          >
            Porcentagem rolada: {scrollPorcentagem} %
          </p>
        </div>
      </div>
    </>
  );
}
