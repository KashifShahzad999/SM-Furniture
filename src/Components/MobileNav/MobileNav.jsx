import React, { useState } from "react";
import "../../Components/main.css";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

function MobileNav() {
  const [isHamburgerActive, setHamburgerActive] = useState(false);

  const handleHamburgerClick = () => {
    setHamburgerActive(!isHamburgerActive);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleScrollToSection = (sectionId) => {
    handleClose(); // Close the Offcanvas
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="navbar-header">
      <div className="container">
        <nav>
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="navbar-brand"
          >
            <img src=" /assets/img/logo.jpg" alt="Logo Image" />
          </ScrollLink>
          {/* <ul className={`nav-list ${isHamburgerActive ? 'active' : ''}`}>
                        <li className="nav-item">
                            <ScrollLink
                                to="home"
                                smooth={true}
                                duration={500}
                                className="nav-link"
                            >
                                home
                            </ScrollLink>
                        </li>
                        <li className="nav-item">
                            <ScrollLink
                                to="about"
                                smooth={true}
                                duration={500}
                                className="nav-link"
                            >
                                about
                            </ScrollLink>
                        </li>
                        <li className="nav-item">
                            <ScrollLink
                                to="contact-us"
                                smooth={true}
                                duration={500}
                                className="nav-link"
                            >
                                Contact
                            </ScrollLink>
                        </li>
                        <li className="nav-item">
                            <ScrollLink
                                to="services"
                                smooth={true}
                                duration={500}
                                className="nav-link"
                            >
                                Services
                            </ScrollLink>
                        </li>

                    </ul> */}
          <Offcanvas show={show} onHide={handleClose} backdrop="static">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <img
                  className="Logo-image-mobile"
                  src="/assets/img/logo.jpg"
                  alt="LogoImage"
                />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <ul>
                <li>Home</li>
                <li onClick={() => handleScrollToSection("about")}>
                  <ScrollLink
                    to="about"
                    smooth={true}
                    duration={500}
                    onClick={handleClose}
                  >
                    About
                  </ScrollLink>
                </li>
                <li onClick={() => handleScrollToSection("contact-us")}>
                  <ScrollLink
                    to="contact-us"
                    smooth={true}
                    duration={500}
                    onClick={handleClose}
                  >
                    Contact
                  </ScrollLink>
                </li>
                <li onClick={() => handleScrollToSection("services")}>
                  <ScrollLink
                    to="services"
                    smooth={true}
                    duration={500}
                    onClick={handleClose}
                  >
                    Services
                  </ScrollLink>
                </li>
              </ul>
            </Offcanvas.Body>
          </Offcanvas>
          <div
            className="hamburger"
            variant="primary"
            aria-label="Close"
            onClick={handleShow}
          >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default MobileNav;
