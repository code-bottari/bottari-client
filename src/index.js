import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./config/firebase";
import "./config/socketId";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
