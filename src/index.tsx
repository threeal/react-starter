import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Counter from "./Counter.tsx";

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(
    <StrictMode>
      <Counter />
    </StrictMode>,
  );
}
