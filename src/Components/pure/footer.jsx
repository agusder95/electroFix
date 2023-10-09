import React from "react";
import "./footer.scss"
import wspIcon from "../../assets/images/home/whatsapp.png";
import faceIcon from "../../assets/images/home/facebook.png";
import instaIcon from "../../assets/images/home/instagram.png";
import Image from "../common/Image";

const Footer = () => {
  return (
    <footer>
      <h2>ElectroGestión - 2023</h2>
      <div className="socMedia">
        <ul>
          <li>
            <a href="">
              <Image src={wspIcon} />
            </a>
          </li>
          <li>
            <a href="">
              <Image src={faceIcon} />
            </a>
          </li>
          <li>
            <a href="">
              <Image src={instaIcon} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
