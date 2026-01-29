import React, { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";

export function TextInverter() {
  const [text, setText] = useState("");
  const [invertedText, setInvertedText] = useState("");

  const handleTextInvert = () => {
    const result = text.split("").reverse().join("");

    setInvertedText(result);
  };

  return (
    <div>
      <h3>Inversor de texto</h3>
      <Input
        type="text"
        placeholder="Digite o texto..."
        className="input"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <Button onClick={handleTextInvert}>Inverter</Button>

      <Input
        type="text"
        placeholder="texto invertido"
        className="input"
        value={invertedText}
        readOnly={true}
      />
    </div>
  );
}
