import React, { useState } from "react";
import "./styles.scss";
import Image from "../Image";
import arrowNext from "../../../assets/images/home/flechaDerecha.png";
import Button from "../Button";

const Carousel = ({ images }) => {
  const [courrentIndex, setCurrentIndex] = useState(0);
  const nextPage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  return (
    <div className="carousel">
      <div className="imageCarouselContainer">
        <Image src={images[courrentIndex]} className="carousel-image" />
      </div>
      <Button onClick={() => nextPage()} className="carousel-button">
        <Image src={arrowNext} className="arrow" />
      </Button>
    </div>
  );
};

export default Carousel;
