import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import SignUpForm from "./pages/SignUpForm";
import Footer from "./components/Footer";
import Main from "./Main";
import Plans from "./pages/Plans";
import Fund from "./pages/Fund";
import Payout from "./pages/Payout";
import "./styles/App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/Crypto-Mining-App" element={<MainPage />} />
          <Route
            path="/Crypto-Mining-App/LogIn&LogOut"
            element={<SignUpForm />}
          />
          <Route path="/Crypto-Mining-App/Main" element={<Main />} />
          <Route path="/Crypto-Mining-App/Plans" element={<Plans />} />
          <Route path="/Crypto-Mining-App/Fund" element={<Fund />} />
          <Route path="/Crypto-Mining-App/Payout" element={<Payout />} />
        </Routes>
        {<Footer />}
      </BrowserRouter>
    </div>
  );
}

export default App;
