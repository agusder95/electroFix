import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import Logo from "../../assets/images/home/Logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

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
            <FontAwesomeIcon icon={faUser} className="icon" />
          </div>
        </div>
        <ul className="navigationContainer">
          <li>
            <a href="">Ingreso / Login</a>
          </li>
          <li>
            <a href="">Quienes Somos</a>
          </li>
          <li>
            <a href="">Servicios</a>
          </li>
          <li>
            <a href="">Blog / Comunidad</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
