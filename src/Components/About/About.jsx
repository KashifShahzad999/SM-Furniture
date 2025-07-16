import React, { useState, useEffect } from "react";
import "../../Components/main.css";

function About() {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  useEffect(() => {
    const aboutSection = document.getElementById("about");

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
  }, []);

  return (
    <>
      <div id="about" className="container">
        <div className="about-me ">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-13">
              <div className="about-us-wrapper">
                <div className="d-flex flex-row bd-highlight mb-3">
                  <div className="p-2 bd-highlight">
                    <h4>About Us</h4>
                  </div>
                  <div className="p-2 bd-highlight">
                    <hr
                      style={{
                        border: "2px  solid #FEAB43",
                        width: "5rem",
                        marginTop: "20px",
                        opacity: 1,
                      }}
                    />
                  </div>
                </div>

                <p>
                  Welcome to Sheikh Mumtaz Furniture, where craftsmanship meets
                  passion. We are more than just a furniture store; we are
                  curators of style and comfort, dedicated to transforming
                  houses into homes. Our journey began with a simple idea: to
                  provide exquisite furniture pieces that inspire and endure.
                </p>
                {showFullDescription ? (
                  <p>
                    Over the years, we have honed our craft, sourcing the
                    finest materials and collaborating with skilled artisans
                    to bring your vision to life. At Sheikh Mumtaz Furniture,
                    we believe in the power of connection—between people and
                    their surroundings. Our collections are designed to evoke
                    emotions, spark conversations, and create memories that
                    last a lifetime. Join us on this journey of discovery and
                    let us help you turn your living spaces into timeless
                    expressions of elegance and sophistication.
                  </p>
                ) : null}

                <button onClick={toggleDescription}>
                  {showFullDescription ? "See Less" : "See More"}
                </button>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-13">
              <div>
                <img src="/assets/img/aboutimg.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
