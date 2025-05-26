import React, { useState } from "react";
import logo from "../../assets/image/logo.svg";
import {useNavigate} from "react-router-dom";

export default function HeaderW() {
  const [activeLink, setActiveLink] = useState("home");
  const navigate = useNavigate();
  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <header className="w-full shadow flex justify-center">
        <div className="w-[94%] mx-auto h-16 flex justify-between items-center px-10">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
          </div>
  
          <nav className="flex items-center font-bold font-dmsans justify-center text-[18px] h-[70%] gap-15 text-primaryText space-x-8 flex-1 ">
            <a
              href="#home"
              className={`h-[70%] ${activeLink === "home" ? "activeHeader" : ""}`}
              onClick={() => handleClick("home")}
            >
              Home
            </a>
            <a
              href="#features"
              className={`h-[70%] ${activeLink === "Products" ? "activeHeader" : ""}`}
              onClick={() => handleClick("Products")}
            >
              Products
            </a>
            <a
              href="#about"
              className={`h-[70%] ${activeLink === "About Us" ? "activeHeader" : ""}`}
              onClick={() => handleClick("About Us")}
            >
              About Us
            </a>
            <a
              href="#contact"
              className={`h-[70%] ${activeLink === "Contact Us" ? "activeHeader" : ""}`}
              onClick={() => handleClick("Contact Us")}
            >
              Contact Us
            </a>
          </nav>
  
          <div className="bg-primaryText font-dmsans rounded-[10px] cursor-pointer hover:bg-primaryButton-80 w-20 h-[70%] text-white flex items-center justify-center rounded"
             onClick={() => navigate("/login")}
          >
            Log In
          </div>
        </div>
      </header>
  
    </>
  );
}
