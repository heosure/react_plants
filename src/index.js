import React from "react";
import ReactDOM from "react-dom/client";
import Mainpage from "./pages/Mainpage";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Mainpage />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
