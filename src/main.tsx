import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import * as serviceWorkerRegistration from "../serviceWorkerRegistration"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


if ("service-worker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/service-worker.ts")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}
