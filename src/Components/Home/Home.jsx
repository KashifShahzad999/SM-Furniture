import React from "react";
import "../../Components/main.css";
import About from "../About/About";
import Services from "../Servics/Services";
import Contactform from "../ContactForm/Contactform";
import Footer from "../Footer/Footer";
import Sociallinks from "../SocialLinks/Sociallinks";
import Main from "../Main/Main";


function Home() {
  return (
    <>
      <section className="home-section">
        <Main />
      </section>
      
      
      <section className="About-us-Section">
        <About />
      </section>
      <section className="services-section" id="services">
        <Services />
      </section>

      <section className="contact-form-section" id="contact-us">
        <Contactform />
      </section>
      <section className="footer-section">
        <Footer />
      </section>
      <section className="social-link-section">
        <Sociallinks />
      </section>
    </>
  );
}

export default Home;
