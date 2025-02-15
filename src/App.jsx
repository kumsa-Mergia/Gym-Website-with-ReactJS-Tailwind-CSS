import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import BgImage from "./assets/bg.jpg";
import Equipments from "./components/Equipments/Equipments";
import Banner from "./components/Banner/Banner";
import Img1 from './assets/2.jpg'
import Img2 from './assets/3.jpg'
import Tabs from "./components/Tabs/Tabs";
import Testimonial from "./components/Testimonial/Testimonial";
import Banner2 from "./components/Banner/Banner2"

const BannerData = {
  image: Img1,
  title: "The Importants of Take care of yourself",
  subtitle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, reiciendis omnis incidunt debitis commodi inventore sequi excepturi, nihil tenetur alias perferendis adipisci expedita fugit nostrum aperiam est, sit in maxime.",
  link: "#",
}
const Banner2Data = {
  image: Img2,
  title: "The Importants of Take care of yourself",
  subtitle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, reiciendis omnis incidunt debitis commodi inventore sequi excepturi, nihil tenetur alias perferendis adipisci expedita fugit nostrum aperiam est, sit in maxime.",
  link: "#",
}


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
      <Banner { ...BannerData}/>
      <Tabs />
      <Banner { ...Banner2Data}/>
      <Testimonial />
      <Banner2 />

    </div>
  );
};

export default App;
