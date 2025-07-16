import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../main.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Sociallinks from "../SocialLinks/Sociallinks";
import { CiFacebook, CiHeart } from "react-icons/ci";
import { FiHeart } from "react-icons/fi";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialPinterestCircular } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import Tabs from "../TabsComponent/Tabs";
import TabsComponent from "../TabsComponent/Tabs";

function Table() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const [loading, setLoading] = useState(false);
  const [counter, setCounter] = useState(1);

  const changeCounter = (num) => {
    setCounter((prevCounter) => {
      let newCounter = prevCounter + parseInt(num);
      return !isNaN(newCounter) && newCounter > 0 ? newCounter : 0;
    });
  };

  const shareOnFacebook = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      "_blank"
    );
  };

  const shareOnInstagram = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.instagram.com/share?url=${url}`, "_blank");
  };

  const shareOnPinterest = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(
      `https://www.pinterest.com/pin/create/button/?url=${url}`,
      "_blank"
    );
  };

  return (
    <>
      <div className="chairs-wrappers">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="left-bar">
                {loading ? (
                  <>
                    <div className="umrah-visa-search-img mb-lg-4 mb-md-4 mb-4 p-2">
                      <div
                        id="custCarousel"
                        className="carousel slide p-3"
                        data-ride="carousel"
                        align="center"
                      >
                        <div className="carousel-inner cus-carousel-inner">
                          {/* Static placeholders for image spinner */}
                          <div className="carousel-item active">
                            <div className="image-spinner-placeholder"></div>
                          </div>
                        </div>
                        <a
                          className="tour-detail-arrows carousel-control-prev"
                          href="#custCarousel"
                          data-slide="prev"
                        >
                          <span className="carousel-control-prev-icon"></span>
                        </a>
                        <a
                          className="tour-detail-arrows carousel-control-next"
                          href="#custCarousel"
                          data-slide="next"
                        >
                          <span className="carousel-control-next-icon"></span>
                        </a>
                      </div>
                      {/* Static placeholders for small image loaders */}
                      <div className="mt-lg-3 mt-md-3 d-none d-lg-block d-md-block">
                        <div style={{ display: "flex", padding: "0px 20px" }}>
                          <div
                            className="w-100"
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <div
                              style={{ width: "20%", textAlign: "center" }}
                              className="small-image-loader-placeholder"
                            ></div>
                            <div
                              style={{ width: "20%", textAlign: "center" }}
                              className="small-image-loader-placeholder"
                            ></div>
                            <div
                              style={{ width: "20%", textAlign: "center" }}
                              className="small-image-loader-placeholder"
                            ></div>
                            <div
                              style={{ width: "20%", textAlign: "center" }}
                              className="small-image-loader-placeholder"
                            ></div>
                            <div
                              style={{ width: "20%", textAlign: "center" }}
                              className="small-image-loader-placeholder"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Static placeholders for shimmer effect */}
                    <h1 className="shimmer"></h1>
                    <p className="shimmer"></p>
                    <p className="shimmer"></p>
                    <p className="shimmer"></p>
                    <h1 className="shimmer"></h1>
                    <p className="shimmer"></p>
                    <p className="shimmer"></p>
                    <p className="shimmer"></p>
                  </>
                ) : (
                  <>
                    <div className="umrah-visa-search-img mb-lg-4 mb-md-4 mb-4 p-2">
                      <div
                        id="custCarousel"
                        className="carousel slide p-3"
                        data-ride="carousel"
                        align="center"
                      >
                        <div className="carousel-inner cus-carousel-inner">
                          {/* Static images */}
                          <div className="carousel-item active">
                            <div
                              className="d-flex justify-content-center align-item-center"
                              style={{
                                width: "600px",
                              }}
                            >
                              <img
                                src="/assets/img/Table-1.jpeg"
                                style={{
                                  width: "100%",
                                  height: "auto",
                                }}
                              />
                            </div>
                          </div>
                          <div className="carousel-item">
                            <div
                              className="d-flex justify-content-center align-item-center"
                              style={{
                                width: "600px",
                              }}
                            >
                              <img
                                src="/assets/img/table-2.jpg"
                                style={{
                                  width: "100%",
                                  height: "auto",
                                }}
                              />
                            </div>
                          </div>
                          <div className="carousel-item">
                            <div
                              className="d-flex justify-content-center align-item-center"
                              style={{
                                width: "600px",
                              }}
                            >
                              <img
                                src="/assets/img/table-img-5.jpg"
                                style={{
                                  width: "100%",
                                  height: "auto",
                                }}
                              />
                            </div>
                          </div>
                          <div className="carousel-item">
                            <div
                              className="d-flex justify-content-center align-item-center"
                              style={{
                                width: "600px",
                              }}
                            >
                              <img
                                src="/assets/img/table-4.jpeg"
                                style={{
                                  width: "100%",
                                  height: "auto",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                        <a
                          className="tour-detail-arrows carousel-control-prev"
                          href="#custCarousel"
                          data-slide="prev"
                        >
                          <span className="carousel-control-prev-icon"></span>
                        </a>
                        <a
                          className="tour-detail-arrows carousel-control-next"
                          href="#custCarousel"
                          data-slide="next"
                        >
                          <span className="carousel-control-next-icon"></span>
                        </a>
                      </div>
                      {/* Static small image loaders */}
                      <div className="mt-lg-3 mt-md-3 d-none d-lg-block d-md-block">
                        <div style={{ display: "flex", padding: "0px 20px" }}>
                          <div className="list-inline-item active carousel-immg">
                            <a
                              id="carousel-selector-0"
                              data-slide-to="0"
                              data-target="#custCarousel"
                            >
                              <div
                                className="small-images"
                                style={{
                                  background: "url(/assets/img/Table-1.jpeg)",
                                }}
                              ></div>
                            </a>
                          </div>
                          <div className="list-inline-item active carousel-immg">
                            <a
                              id="carousel-selector-1"
                              data-slide-to="1"
                              data-target="#custCarousel"
                            >
                              <div
                                className="small-images"
                                style={{
                                  background: "url(/assets/img/table-2.jpg)",
                                }}
                              ></div>
                            </a>
                          </div>
                          <div className="list-inline-item active carousel-immg">
                            <a
                              id="carousel-selector-2"
                              data-slide-to="2"
                              data-target="#custCarousel"
                            >
                              <div
                                className="small-images"
                                style={{
                                  background:
                                    "url(/assets/img/table-img-5.jpg)",
                                }}
                              ></div>
                            </a>
                          </div>
                          <div className="list-inline-item active carousel-immg">
                            <a
                              id="carousel-selector-4"
                              data-slide-to="3"
                              data-target="#custCarousel"
                            >
                              <div
                                className="small-images"
                                style={{
                                  background: "url(/assets/img/table-4.jpeg)",
                                }}
                              ></div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="furniture-detail">
                <h1 className="mt-5">Table's</h1>

                <div className="d-flex flex-row">
                  
                  <div className="p-2">
                    <b className="">Rs.75000</b>
                  </div>
                  <div className="p-2">
                    <button className="t4s-badge-price">SAVE 15%</button>
                  </div>
                </div>

                <p>
                  Indulge in comfort with our exquisite range of tables,
                  available in velvet and standard finishes. Embrace luxury with
                  plush velvet tabletops in rich hues, or opt for classic
                  designs crafted from premium materials. Elevate your living
                  space with our tables, designed to blend comfort, elegance,
                  and versatility.
                </p>

                <div className="p-2">
                  <button
                    className="btn--minus"
                    onClick={() => changeCounter("-1")}
                    type="button"
                  >
                    -
                  </button>
                  <input
                    className="quantity mr-3"
                    type="text"
                    value={counter}
                    readOnly
                    style={{
                      border: "none",
                    }}
                  />
                  <button
                    className="btn--plus"
                    onClick={() => changeCounter("1")}
                    type="button"
                  >
                    +
                  </button>
                </div>

                <div className="mt-4 pb-4">
                  <button className="cart-btn mr-5">ADD TO CART</button>
                  <button className="buy-btn">BUY NOW</button>
                </div>

                <div className="d-flex flex-row share-icons-detail">
                  <div className="mr-2">
                    <strong>Share :</strong>
                  </div>
                  <div className="mr-2">
                    <span>
                      <FaFacebook
                        className="social-icons"
                        onClick={shareOnFacebook}
                      />
                    </span>
                  </div>
                  <div className="mr-2">
                    <span>
                      <IoLogoInstagram
                        className="social-icons"
                        onClick={shareOnInstagram}
                      />
                    </span>
                  </div>
                  <div className="mr-2">
                    <span>
                      <TiSocialPinterestCircular
                        className="social-icons"
                        onClick={shareOnPinterest}
                      />
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="note-heading">Note:</h4>
                  <ul>
                    <li>
                      Free delivery for online orders only in Islamabad and
                      Rawalpindi.
                    </li>
                    <li>
                      Delivery to other cities is subject to additional charges.
                    </li>
                    <li>
                      Delivered in 5 to 6 working days for ready-to-order items.
                    </li>
                    <li>
                      Our Delivery officer shall call you to communicate the
                      exact delivery timelines.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <TabsComponent>
            <div label="Discription">
              <div className="tabs-detail">
                <h3>Modern Classic Style</h3>
                <p>
                  Combining modern and classic features, the Elegante table
                  collection stands out with its unique designs. The Elegante
                  table features a captivating quilted pattern, exuding elegance
                  with its sturdy wooden frame and decorative gold metal
                  accents. A perfect blend of sophistication and style, the
                  Elegante table enhances any living area with its refined
                  allure and luxurious appeal.
                </p>
                <h4>Features</h4>
                <ul>
                  <li>Wooden leg application</li>
                  <li>Upholstered seat and back</li>
                  <li>Gold metal ring handles on the outer back</li>
                </ul>
              </div>
            </div>
            <div label="Additional Information">
              <div className="pb-4 pt-4">
                <table className="table table-bordered pb-3 mb-3">
                  <tbody>
                    <tr>
                      <td>Color </td>
                      <td>Brown, White, Black, Purple</td>
                    </tr>
                    <tr>
                      <td>Size</td>
                      <td>D62 x W49 x H96.5 cm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div label="Shipping & Information">
              <div className="shipping-detail">
                <strong>Shipping & Returns</strong>
                <ul>
                  <li>
                    a.If your product is incorrect, incomplete, or{" "}
                    <u className="underline">defective/damaged</u> upon
                    delivery, please report it immediately to +92304 1117200
                    within the return window
                  </li>
                  <li>
                    b. If the return window expires while the product is in your
                    possession, we will refer you to the after-sales department
                    for a warranty claim
                  </li>
                  <li>
                    c. The product you wish to return must be unused, clean, and
                    free from damage
                  </li>
                  <li>
                    d. Please return the product in its original packaging
                  </li>
                  <li>
                    e. You are responsible for both the delivery and return
                    logistics/delivery costs
                  </li>
                  <li>i. Scan the box for any damage</li>
                  <li>
                    ii. Ensure the product name and model number match your
                    order confirmation
                  </li>
                  <li>iii. Inspect the product after removing the packaging</li>
                  <li>
                    g. If you receive the wrong item or it arrives damaged,
                    please do not accept the delivery
                  </li>
                  <li>
                    h. Inform your delivery representative(s) and contact us to
                    arrange for a replacement
                  </li>
                  <li>
                    i. Once the furniture is installed, it cannot be returned
                  </li>
                </ul>
              </div>
            </div>
            <div label="Reviews">
              <div className="pb-3 pt-3">
                <h4>No Reviews</h4>
              </div>
            </div>
          </TabsComponent>
        </div>
      </div>
      <Footer />
      <Sociallinks />
    </>
  );
}

export default Table;
