import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AddressContextProvider } from "./context/AddressContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AddressContextProvider>
        <App />
      </AddressContextProvider>  
    </BrowserRouter>
  </React.StrictMode>
);
