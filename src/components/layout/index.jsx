import React from "react";
import "./styles.scss";
import Header from "../header";
import Footer from "../footer";
import Image from "../common/Image";
import FloatIcon from "../../assets/images/home/whatsapp.png";
const Layout = ({ children }) => {
  return (
    <div className="LayoutWrapper">
      <Header />
      {children}

      <a className="FloatIcon">
        <Image className="FloatIconImg" src={FloatIcon} alt="FloatIconWsp" />

        <div className="oval">
          <p className="text">Contactános Aquí </p>
        </div>
      </a>

      <Footer />
    </div>
  );
};

export default Layout;
