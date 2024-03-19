import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { WatchListProvider } from "./Contexts/WatchlistContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WatchListProvider>
      <App />
    </WatchListProvider>
  </React.StrictMode>
);
