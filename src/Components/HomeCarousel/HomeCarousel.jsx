import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel';

const HomeCarousel  = () => {
  useEffect(() => {
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      dots:false,
      nav:true,
      mouseDrag:false,
      autoplay:true,
      animateOut: 'slideOutUp',
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
    });
  }, []);

  return (
    <header>
      <div className="owl-carousel owl-theme">
        <div className="item">
          <img src="https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776_960_720.jpg" alt="images not found" />
          <div className="cover">
            <div className="container">
              <div className="header-content">
                <div className="line"></div>
                <h2>Teimagine Digital Experience with</h2>
                <h1>Start-ups and solutions</h1>
                <h4>We help entrepreneurs, start-ups and enterprises shape their ideas into products</h4>
              </div>
            </div>
          </div>
        </div>                    
        <div className="item">
          <img src="https://cdn.pixabay.com/photo/2019/11/18/02/41/autumn-leaves-4633854_960_720.jpg" alt="images not found" />
          <div className="cover">
            <div className="container">
              <div className="header-content">
                <div className="line animated bounceInLeft"></div>
                <h2>Reimagine Digital Experience with</h2>
                <h1>Intelligent solutions</h1>
                <h4>We help entrepreneurs, start-ups and enterprises shape their ideas into products</h4>
              </div>
            </div>
          </div>
        </div>                
        <div className="item">
          <img src="https://cdn.pixabay.com/photo/2020/04/16/02/44/dandelion-5048825_960_720.jpg" alt="images not found" />
          <div className="cover">
            <div className="container">
              <div className="header-content">
                <div className="line animated bounceInLeft"></div>
                <h2>Peimagine Digital Experience with</h2>
                <h1>Intelligent Solutions</h1>
                <h4>We help entrepreneurs, start-ups and enterprises shape their ideas into products</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomeCarousel ;
