import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { searchCompanies } from "./api/companyData";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const logSearchResult = async () => {
  const result = await searchCompanies("tsla");
  console.log(result);
};

logSearchResult();
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
