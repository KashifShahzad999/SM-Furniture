import React, { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import "../main.css";

function Contactform() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const aboutSection = document.getElementById("contact-us");

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

  const [state, handleSubmit] = useForm("xbjnwwpn");
  if (state.succeeded) {
    return (
      <p className="form-alert-pra">
        Your message is on its way to me! Expect a reply soon.
      </p>
    );
  }

  return (
    <>
      <div className="contact-form" id="contact-form">
        <div className="container">
          <section className="contact_us">
            <div className="container">
              <div className="row">
                <div className="col-md-12 offset-md-1">
                  <div className="contact_inner">
                    <div className="row">
                      <div className="col-md-10">
                        <form onSubmit={handleSubmit}>
                          <div className="contact_form_inner">
                            <div className="contact_field">
                              <h3>Contatc Us</h3>
                              <p>
                                Feel Free to contact us any time. We will get
                                back to you as soon as we can!.
                              </p>
                              <input
                                id="name"
                                name="name"
                                type="text"
                                className="form-control form-group"
                                placeholder="Name"
                              />
                              <ValidationError
                                prefix="Name"
                                field="name"
                                errors={state.errors}
                              />
                              <input
                                id="email"
                                name="email"
                                type="text"
                                className="form-control form-group"
                                placeholder="Email"
                              />
                              <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                              />
                              <input
                                id="phone"
                                name="phone"
                                type="text"
                                className="form-control form-group"
                                placeholder="Phone"
                              />
                              <ValidationError
                                prefix="Phone"
                                field="phone"
                                errors={state.errors}
                              />
                              <textarea
                                name="message"
                                id="message"
                                className="form-control form-group"
                                placeholder="Message"
                              ></textarea>
                              <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                              />
                              <button
                                className="contact_form_submit"
                                type="submit"
                                disabled={state.submitting}
                              >
                                Send
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="col-md-2">
                        <div className="right_conatct_social_icon d-flex align-items-end">
                          <div className="socil_item_inner d-flex">
                            <li>
                              <a href="https://www.facebook.com/share/7LdhZBuNThcNp6m5/?mibextid=LQQJ4d">
                                <i className="fab fa-facebook-square"></i>
                              </a>
                            </li>
                            <li>
                              <a href="https://www.instagram.com/_.lifestandard._?igsh=MW01OXMyeG5pbXZxeA%3D%3D&utm_source=qr">
                                <i className="fab fa-instagram"></i>
                              </a>
                            </li>
                            <li>
                              <a href="https://www.youtube.com/@L Sheikhmumtaz.furniture">
                                <i className="fab fa-youtube"></i>
                              </a>
                            </li>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="contact_info_sec">
                      <h4>Contact Info</h4>
                      <div className="d-flex info_single align-items-center">
                        <i className="fas fa-headset"></i>
                        <span> 048-3252803</span>
                      </div>
                      <div className="d-flex info_single align-items-center">
                        <i className="fas fa-envelope-open-text"></i>
                        <span>Sheikhmumtaz.furniture@gmail.com</span>
                      </div>
                      <div className="d-flex info_single align-items-center">
                        <i className="fas fa-map-marked-alt"></i>
                        <span>
                          A1/32,Satellite Town Zafar Ullah Chowk,Sargodha.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="map_sec">
            <div className="container">
              <div className="row">
                <div className="col-md-12 offset-md-1">
                  <div className="map_inner">
                    <h2 className="text-center fw-bold">
                      Find Us on Google Map
                    </h2>
                    <p>
                      We're conveniently located at A1/32,Satellite Town Zafar Ullah Chowk,Sargodha,
                      Pakistan. You can find us easily using the map below.
                    </p>
                    <div className="map_bind">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3248.5495185331306!2d72.67976758222468!3d32.0799476068273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392177b8c7fdf903%3A0x5086e7d0d0de6b8!2sZafar%20Ullah%20Chowk%2C%20Satellite%20Town%2C%20Sargodha%2C%20Pakistan!5e1!3m2!1sen!2s!4v1752653387989!5m2!1sen!2s"
                        width="100%"
                        height="450"
                        frameBorder="0"
                        // style="border:0;"
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Contactform;
