import React from "react";
import "./Trendingproduct.css";
import leave from "../Hero/hero Img/heroImg2.png";
import { CiStar } from "react-icons/ci";
import coffee from "../../../assets/coffee-asorted-300x300.jpg";
import orangeJuice from "../../../assets/orage-juice2-kariz-300x300.jpg";
import HandSanitizer from "../../../assets/sanitizer-300x300.jpg";
import RedChillies from "../../../assets/red-chillies-300x300.jpg";
const Trendingproducts = () => {
  return (
    <div>
      <h1 className="Trending-prods">Trending Products</h1>
      <div className="trending-section-leave">
        <img src={leave} alt="" />
      </div>
      <div className="Trending-prods-flex">
        <div>
          <div>
            <img src={coffee} alt="" />
            <p>Groceries</p>
            <h3>Assoted coffee</h3>
            <h6>
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
            </h6>
            <h5>£35.00</h5>
          </div>
        </div>
        <div>
          <div>
            <img src={orangeJuice} alt="" />
            <p>Groceries</p>
            <h3>Fres Orange Juice</h3>
            <h6>
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
            </h6>
            <h5>£18.00</h5>
          </div>
        </div>
        <div>
          <div>
            <img src={HandSanitizer} alt="" />
            <p>Groceries</p>
            <h3>Hand Sanitizer</h3>
            <h6>
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
            </h6>
            <h5>£15.00</h5>
          </div>
        </div>
        <div>
          <div>
            <img src={RedChillies} alt="" />
            <p>Groceries</p>
            <h3>Handpicked Red Chillies</h3>
            <h6>
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
            </h6>
            <h5>£19.00</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trendingproducts;
