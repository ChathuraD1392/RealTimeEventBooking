import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App.tsx";
import NavBar from "./NavBar/NavBar.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NavBar />
    <App />
  </StrictMode>
);
