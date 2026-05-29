import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import BusinessLanding from "./pages/BusinessLanding.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BusinessLanding />} />
        <Route path="/reymooy" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
