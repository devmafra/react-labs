import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import { AlertaProvider } from "./context/AlertaContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AlertaProvider>
      <App />
    </AlertaProvider>
  </StrictMode>
);
