import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";

import "./index.css";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Routes>
      <Route path="/" exact element={<App />} />
      <Route path="/policy/*" element={<PrivacyPolicy />} />
    </Routes>
  </Router>
);
