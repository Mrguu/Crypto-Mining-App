import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import SignUpForm from "./pages/SignUpForm";
import Footer from "./components/Footer";
import Main from "./Main";
import Plans from "./pages/Plans";
import Fund from "./pages/Fund";
import Payout from "./pages/Payout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/LogIn&LogOut" element={<SignUpForm />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/Plans" element={<Plans />} />
          <Route path="/Fund" element={<Fund />} />
          <Route path="/Payout" element={<Payout />} />
        </Routes>
        {<Footer />}
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
