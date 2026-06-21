import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./index.css";

import '@fortawesome/fontawesome-free/css/all.css';
import "bootstrap/dist/css/bootstrap.min.css";

import { ThemeProvider } from "./utils/ThemeProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
