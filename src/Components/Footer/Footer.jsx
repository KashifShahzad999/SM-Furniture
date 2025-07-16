import React from "react";
import { Link } from "react-scroll";
import { MdOutlineMail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { FloatingWhatsApp } from "react-floating-whatsapp";

function Footer() {
  const whatsappProps = {
    accountName: "LSFurniture",
    phoneNumber: "+92 331569774",
    darkMode: false,
    avatar: "/assets/img/favicon.svg",
    notification: true,
  };
  return (
    <div>
      <div className="container">
        <div className="footer-section-wrapper">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <img
                src="/assets/img/sheikh_mumtaz_logo (1).svg"
                style={{
                  width: "140px",
                }}
              />
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12">
              <div className="quick-link">
                <h5>Quick Link</h5>
                <div className="">
                  <ul className="">
                    <li>
                      <Link to="services" smooth={true} duration={500}>
                        <u>Service</u>
                      </Link>
                    </li>
                    <li>
                      <Link to="about" smooth={true} duration={500}>
                        <u>About Us</u>
                      </Link>
                    </li>
                    <li>
                      <Link to="contact-us" smooth={true} duration={500}>
                        <u>Contact</u>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="footer-contact">
                <h5>Contact</h5>
                <div className="d-flex">
                  <span>
                    <MdOutlineMail />
                  </span>
                  <p className="ml-3 mb-0 mt-2">
                    <a href="mailto:l Sheikhmumtaz.furniture@gmail.com" className="mb-0">
                      Sheikhmumtaz.furniture@gmail.com
                    </a>
                  </p>
                </div>
                <div className="d-flex">
                  <span>
                    <IoMdCall />
                  </span>
                  <p className="ml-3 mb-0 mt-2">
                    <a href="tel:+923315629774">048-3252803</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <FloatingWhatsApp {...whatsappProps} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
