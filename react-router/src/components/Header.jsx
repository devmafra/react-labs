import React from "react";
import { Link, useNavigate } from "react-router";

export function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link>
        <Link to="/contact">Contatos</Link>
        <Link to="/products">Produtos</Link>
        <br />
        <button onClick={() => navigate(-1)}>Voltar</button>
      </nav>
    </header>
  );
}
