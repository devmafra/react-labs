import React, { useState } from "react";

export function useTextoDigitado() {
  const [message, setMessage] = useState("");

  const handleInputMessage = (event) => {
    setMessage(event.target.value);
  };

  return [message, handleInputMessage];
}
