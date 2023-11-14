import React from 'react'
import "./styles.scss"
import Image from '../common/Image';
import faceIcon from '../../assets/images/home/facebook.png';
import instaIcon from '../../assets/images/home/instagram.png';
const Footer = () => {
  return (
    <footer>
      <h2>ElectroGestión - 2023</h2>
      <div className="socMedia">
        <ul>
          <li>
            <a href="">
              <Image className="FooterIcon" src={faceIcon} alt="faceIcon" />
            </a>
          </li>
          <li>
            <a href="">
              <Image className="FooterIcon" src={instaIcon} alt="instaIcon" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer