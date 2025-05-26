import React from "react";
import HeaderW from "./WelcomePage/HeaderW";
import Ecobin from "./WelcomePage/Ecobin";
import SmartBin from "./WelcomePage/SmartBin";
import Footer from "./WelcomePage/Footer";
import Info from "./WelcomePage/Info";
import Contact from "./WelcomePage/Contact";


const WelcomePage = () => {
  return (
    <div className="font-sans">
        <HeaderW/>
        <Ecobin/>
        <SmartBin/>
        <Info/>
        <Contact/>
        <Footer/>
    </div>
      
  );
};

export default WelcomePage;
