import React, { useState, useEffect } from "react";
import { HiArrowSmallDown } from "react-icons/hi2";

// import resumePDF from "/assets/img/resume.pdf";
import {
  Carousel as CCarousel,
  CarouselItem as CCarouselItem,
  Image as CImage,
} from "react-bootstrap";
import TabsComponent from "../TabsComponent/Tabs";

function Main() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  const renderDots = () => {
    return (
      <ul className="carousel-dots">
        {[...Array(3)].map((_, index) => (
          <li
            key={index}
            className={index === activeIndex ? "active" : ""}
            onClick={() => handleSelect(index)}
          />
        ))}
      </ul>
    );
  };

  return (
    <>
      <div className="carousel-section">
        <div className="container">
          <div className="carousel-wrapper">
            <CCarousel
              activeIndex={activeIndex}
              onSelect={handleSelect}
              controls={false}
            >
              <CCarouselItem>
                <div className="carousel-item-content">
                  <h1 className="carousel-item-heading">Sustainable</h1>
                  <h2>Furniture</h2>
                  <p className="carousel-item-paragraph">
                    Elevate your home with our modern furniture pieces,
                    meticulously crafted to blend elegance with functionality.
                    Experience the perfect harmony of contemporary design and
                    timeless appeal.
                  </p>
                </div>
              </CCarouselItem>
              <CCarouselItem>
                <div className="carousel-item-content">
                  <h1 className="carousel-item-heading">Sustainable</h1>
                  <h2>Furniture</h2>

                  <p className="carousel-item-paragraph">
                    Explore our exquisite selection of handcrafted furniture,
                    meticulously designed to elevate your living spaces. Immerse
                    yourself in the perfect blend of style, comfort, and
                    functionality.
                  </p>
                </div>
              </CCarouselItem>
              <CCarouselItem>
                <div className="carousel-item-content">
                  <h1 className="carousel-item-heading">Sustainable</h1>
                  <h2>Furniture</h2>

                  <p className="carousel-item-paragraph">
                    Embrace the warmth of rustic living with our charming
                    furniture collections. Each piece tells a story, bringing
                    nature's beauty into your home. Discover the artistry in
                    simplicity.
                  </p>
                </div>
              </CCarouselItem>
            </CCarousel>
            {renderDots()}

          </div>
          <div className="row">
            <div className="col-lg-6">
                <div className="down-arrow">
                  &#11107;
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
