import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./routes/AppRouter";
import { ConTextProvider } from "./contextApi/ContextProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ConTextProvider>
      <AppRouter />
    </ConTextProvider>
  </StrictMode>
);
