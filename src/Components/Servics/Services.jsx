import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import "../main.css";

function Services() {

  useEffect(() => {
    window.scrollTo(0, 0);
    const aboutSection = document.getElementById("services");

    const handleScroll = () => {
      const rect = aboutSection.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

      if (isVisible) {
        aboutSection.classList.add("animate-fadeInUp");
      } else {
        aboutSection.classList.remove("animate-fadeInUp");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });



  const images = [
    {
      id: 1,
      url: "/assets/img/slider-chair.webp",
      title: "Chair",
      desc: "Sleek and comfortable chair for modern living spaces.",
      link: "/chairs-detail",
    },
    {
      id: 2,
      url: "/assets/img/home-image-1.jpg",
      title: "Sofa",
      desc: "Luxurious sofa for stylish relaxation",
      link: "/sofa-detail",
    },
    {
      id: 3,
      url: "/assets/img/bed-img.png",
      title: "Bed",
      desc: "Elegant bed frame for a cozy bedroom ambiance.",
      link: "/beds-detail",
    },
    {
      id: 4,
      url: "/assets/img/table-img.jpg",
      title: "Tables",
      desc: "Upgrade your space with our Elegant Table Frames for a cozy ambiance",
      link: "/table-detail",
    },
  ];

  return (
    <div className="container">
      <div className="">
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {images.map((image) => (
            <div key={image.id}>
              <div className="work1 ml-2 mr-2">
                <div className="image-box">
                  <div className="name-desc hover-1 image-box">
                    <div className="img align-items-center justify-content-center rounded">
                      <img className="" src={image.url} alt={image.title} />
                      <div className="overlay">
                        <div className="overlay-content">
                          <h4>{image.title}</h4>
                          <p>{image.desc}</p>
                          <Link to={image.link}>
                            <button className="learn-more-btn">
                              View Detail
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Services;
