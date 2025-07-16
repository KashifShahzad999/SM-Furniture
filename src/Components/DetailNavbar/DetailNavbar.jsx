import React from "react";
import { BsBag } from "react-icons/bs";

function DetailNavbar() {
  return (
    <div className="detail-navbar-wrapper">
      <div className="container topBotomBordersOut d-flex justify-content-between">
        <a>Email:l Sheikhmumtaz.furniture@gmail.com</a>
        <a>
          <div className="cart-add">
            <BsBag
              style={{
                color: "#FFF",
                fontSize: "26px",
              }}
            />
          </div>
          <div className="cart-count">1</div>
        </a>
      </div>
    </div>
  );
}

export default DetailNavbar;
