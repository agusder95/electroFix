import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import Logo from "../../assets/images/home/Logo.png";
import Image from "../common/Image";



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import UserIcon from "../../assets/images/home/UserIcon.png";

import ImageLogin from "../common/ImageLogin";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState("login");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 50 ) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? "shrink" : ""}`}>
      <div id="logoContainer">
        <Link to={"/"}>
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <div id="MenuContainer">
        <div className="loginContainer">
          <a href="">{user}</a>
          <div className="LogUser">
            
         { /*  <FontAwesomeIcon icon={faUser} className="icon" /> */}

         <ImageLogin src={UserIcon} className="arrow" />


          </div>
        </div>
        <ul className="navigationContainer">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Servicios</a>
          </li>
          <li>
            <a href="">Proceso</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
