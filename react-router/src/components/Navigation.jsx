import React, { useState } from "react";
import { Link, useNavigate } from "react-router";

export function Navigation() {
  const routes = ["/", "/about", "/contact", "/products"];

  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = useNavigate();

  const handleForward = () => {
    if (currentIndex < routes.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      navigate(routes[newIndex]);
    }
  };

  const handleBackward = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      navigate(routes[newIndex]);
    }
  };

  return (
    <>
      <nav>
        <a href="https://www.google.com/" target="blank">
          Google
        </a>
        <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link>
        <Link to="/contact">Contatos</Link>
        <Link to="/products">Produtos</Link>
      </nav>
      <br />
      <br />

      <button onClick={() => navigate("/")}>Voltar para Home</button>
      <button onClick={handleBackward} disabled={currentIndex === 0}>
        Pagina anterior
      </button>
      <button
        onClick={handleForward}
        disabled={currentIndex >= routes.length - 1}
      >
        Avançar
      </button>
    </>
  );
}
