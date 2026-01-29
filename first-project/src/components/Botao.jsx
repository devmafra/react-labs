import React from "react";
import styles from "./botao.module.css";

export function Botao({ text, ...props }) {
  return (
    <>
      <div className={styles.container}>
        <button className={styles.button} {...props}>
          {text}
        </button>
      </div>
    </>
  );
}
