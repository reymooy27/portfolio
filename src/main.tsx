// @ts-nocheck
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import BusinessLanding from "./pages/BusinessLanding.tsx";
import ProjectDetail from "./pages/ProjectDetail.tsx";
import PageTransition from "./components/PageTransition";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
        <BrowserRouter>
          <PageTransition />
          <Routes>
          <Route path="/" element={<BusinessLanding />} />
          <Route path="/reymooy" element={<App />} />
          <Route path="/reymooy/project/:id" element={<ProjectDetail />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
);
