import React from "react";
import "./Hero.css";
import heroImg1 from "../Hero/hero Img/image.png";
import heroImg2 from "../Hero/hero Img/heroImg2.png";
import leave3 from "../../../assets/leaves-free-img.png";
import { CgShoppingCart } from "react-icons/cg";
import { FaRecycle, FaTruck } from "react-icons/fa";
import { BsCash, BsPersonVideo2 } from "react-icons/bs";
const Hero = () => {
  return (
    <>
      <div className="hero-backgroud-ccolor">
        <div className="hero-section-flex-div">
          <div>
            <img src={heroImg1} alt="" />
          </div>
          <div>
            <div>
              <img src={heroImg2} alt="" />
            </div>
            <h4>Best Quality Products</h4>
            <h2>Join The Organic Movement!</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <button>
              <span className="shopping-cart">
                <CgShoppingCart />
              </span>
              SHOP NOW
            </button>
            <div className="leave3-watermark">
              <img className="leave3" src={leave3} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="hero-footer">
        <div>
          <button>
            <h4>
              <span className="icon-attarched">
                <FaTruck />
              </span>
              Free Shipping
            </h4>
            <p>Above $5 Only</p>
          </button>
        </div>
        <div>
          <button>
            <h4>
              <span className="icon-attarched">
                <BsPersonVideo2 />
              </span>
              Certified Organic
            </h4>
            <p>100% Guarantee</p>
          </button>
        </div>
        <div>
          <button>
            <h4>
              <span className="icon-attarched">
                <BsCash />
              </span>
              Huge Savings
            </h4>
            <p>At Lowest Price</p>
          </button>
        </div>
        <div>
          <button>
            <h4>
              <span className="icon-attarched">
                <FaRecycle />
              </span>
              Easy Return
            </h4>
            <p>No Question Asked</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
