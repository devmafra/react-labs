import { useState } from "react";
import "./App.css";

function App() {
  const [dados, setDados] = useState(null);

  // const handleFetchData = async () => {
  //   return fetch("https://jsonplaceholder.typicode.com/posts/1")
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Erro HTTP!", {
  //           cause: { status: response.status },
  //         });
  //       }
  //       return response.json();
  //     })
  //     .then((json) => {
  //       console.log(json);
  //       setDados(json);
  //       return json;
  //     })
  //     .catch((error) => {
  //       console.error("Erro ao buscar os dados", error);
  //       const status = error.cause?.status;

  //       setDados({
  //         title: error.message,
  //         body: status === 404 ? "Erro 404 - Dados não encontrados" : "",
  //       });
  //       return null;
  //     });
  // };

  const handleFetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/postws/1",
      );

      if (!response.ok) {
        throw new Error("Erro HTTP!", {
          cause: { status: response.status },
        });
      }

      const json = await response.json();

      setDados(json);

      return json;
    } catch (error) {
      console.error("Erro ao buscar os dados", error);

      const status = error.cause?.status;

      setDados({
        title: error.message,
        body:
          status === 404
            ? "Erro 404 - Dados não encontrados"
            : "Ocorreu um erro inesperado. Tente novamente mais tarde.",
      });
      return null;
    }
  };

  return (
    <div className="app">
      <h1>Exemplo de Requisição via Fetch</h1>

      <button className="btn" onClick={handleFetchData}>
        Buscar Dados
      </button>

      {dados && (
        <div className="card">
          <h2>{dados.title}</h2>
          <p>{dados.body}</p>
        </div>
      )}
    </div>
  );
}

export default App;
