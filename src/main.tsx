import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "flowbite";
import "@/global.css";
import { I18nextProvider } from "react-i18next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./app";
import i18n from "./i18n";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
      <ToastContainer />
    </I18nextProvider>
  </StrictMode>
);
