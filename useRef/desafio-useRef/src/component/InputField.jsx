import styles from "./InputField.module.css";
import { useRef } from "react";

export default function InputField() {
  const inputRef = useRef(null);

  function handleOnClick() {
    const element = inputRef.current;
    if (element) {
      element.focus();
      console.log("A largura do input de texto é: " + element.offsetWidth);
    }
  }
  return (
    <div className={styles.container}>
      <h1>Desafio useRef</h1>

      <input ref={inputRef} className={styles.inputField} type="text" />
      <button className={styles.inputButton} onClick={handleOnClick}>
        Focus Now!
      </button>
    </div>
  );
}
