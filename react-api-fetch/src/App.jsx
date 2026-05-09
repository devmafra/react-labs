import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [dados, setDados] = useState(null);

  // * Requisição via THEN/CATCH
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

  // * Requisição via TRY/CATCH
  // const handleFetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/postws/1",
  //     );

  //     if (!response.ok) {
  //       throw new Error("Erro HTTP!", {
  //         cause: { status: response.status },
  //       });
  //     }

  //     const json = await response.json();

  //     setDados(json);

  //     return json;
  //   } catch (error) {
  //     console.error("Erro ao buscar os dados", error);

  //     const status = error.cause?.status;

  //     setDados({
  //       title: error.message,
  //       body:
  //         status === 404 ? "Erro 404 - Dados não encontrados": "Ocorreu um erro inesperado. Tente novamente mais tarde.",
  //     });
  //     return null;
  //   }
  // };

  // * Requisição via AXIOS
  const handleFetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/post2s/1",
      );
      setDados(response.data);
    } catch (error) {
      if (error.response) {
        console.log(error.message);
        console.log(error.response.status);
        setDados({
          title: `Erro ${error.response.status}!`,
          body:
            error.response.status === 404
              ? "Dados não encontrados"
              : "Erro no servidor.",
        });
      } else if (error.request) {
        console.log(error.request);
        setDados({
          title: "Erro de Conexão",
          body: "Não foi possível alcançar o servidor. Verifique sua internet.",
        });
      } else {
        console.log("Error Message", error.message);
      }
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
