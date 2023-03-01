import React from "react";
import "./Crousel.css";
import Image5 from "./Images/sc1.jpg";
import Image7 from "./Images/sc2.jpg";
import Image3 from "./Images/sc3.jpg";
import Image1 from "./Images/sc5.jpg";
import Image6 from "./Images/sc6.jpg";
import Image2 from "./Images/sc7.jpg";
import Image4 from "./Images/sc4.jpg";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "./Images/feature-image2jpg.jpg";
function Crousel() {
  return (
    <>
      <div className="bodyy">
        <div className="container">
          <div className="slider-container">
            <div className="slide-image">
              <img className="cr-img" src={Image5} />
            </div>
            <div className="slide-image">
              <img className="cr-img" src={Image7} />
            </div>
            <div className="slide-image">
              <img className="cr-img" src={Image3} />
            </div>
            <div className="slide-image">
              <img className="cr-img" src={Image1} />
            </div>
            <div className="slide-image">
              <img className="cr-img" src={Image6} />
            </div>
            <div className="slide-image">
              <img className="cr-img" src={Image2} />
            </div>
            <div className="slide-image">
              <img className="cr-img" src={Image4} />
            </div>
          </div>
          <div className="slider-container">
            <div className="slide-image">
              <img className="cr-img" src={Image5} />
            </div>
            <div className="slide-image">
              <img className="cr-img" src={Image7} />
            </div>
            <div className="slide-image">
              <img className="cr-img" src={Image3} />
            </div>
            <div className="slide-image">
              <img className="cr-img" src={Image1} />
            </div>
            <div className="slide-image">
              <img className="cr-img" src={Image6} />
            </div>
            <div className="slide-image">
              <img className="cr-img" src={Image2} />
            </div>
            <div className="slide-image">
              <img className="cr-img" src={Image4} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Crousel;
