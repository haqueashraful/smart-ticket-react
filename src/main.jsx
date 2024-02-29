import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SeatProvider } from "./Components/Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SeatProvider>
      <App />
    </SeatProvider>
  </React.StrictMode>
);
