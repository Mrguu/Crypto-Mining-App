import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Miningwork from "./pages/Miningwork";
import FAQ from "./pages/FAQ";

function MainPage() {
  return (
    <div>
      {<Navbar />}
      {<Home />}
      {<About />}
      {<Services />}
      {<Miningwork />}
      {<FAQ />}
    </div>
  );
}

export default MainPage;
