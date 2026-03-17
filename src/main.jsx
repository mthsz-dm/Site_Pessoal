import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/index.css";
import "./assets/css/navbar.css";
import "./assets/css/profile.css";
import "./assets/css/footer.css";
import "./assets/css/repositories.css";
import "./assets/css/courses.css";
import "./assets/css/skills.css";
import App from "./App.jsx";
import "./i18.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
