import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import QuoteHistoryProvider from "./store/quote-history-context.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QuoteHistoryProvider>
      <App />
    </QuoteHistoryProvider>
  </React.StrictMode>
);
