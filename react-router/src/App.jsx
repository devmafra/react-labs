import React from "react";
import { AppRoutes } from "./routes/AppRoutes";
import { Link } from "react-router";

export default function App() {
  return (
    <>
      <nav>
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/about" className="link">
          Sobre
        </Link>
        <Link to="/contact" className="link">
          Contatos
        </Link>
      </nav>
      <AppRoutes />
    </>
  );
}
