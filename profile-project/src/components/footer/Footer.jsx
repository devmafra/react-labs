import React from "react";
import style from "./footer.module.css";

export function Footer() {
  return (
    <footer className={style.footer}>
      <p>
        &copy; {new Date().getFullYear()} Davi Mafra. Todos os direitos
        reservados.
      </p>
    </footer>
  );
}
