import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./routes/AppRouter";
import { ConTextProvider } from "./contextApi/ContextProvider";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <ConTextProvider>
        <AppRouter />
      </ConTextProvider>
    </QueryClientProvider>
  </StrictMode>
);
