import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import BgImage from "./assets/bg.jpg";
import Equipments from "./components/Equipments/Equipments";

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  
};


const App = () => {
  return (
    <div className="overflow-x-hidden">
      <div style={bgStyle}>
        <Navbar />
        <Hero />
      </div>
      <Equipments />


    </div>
  );
};

export default App;
