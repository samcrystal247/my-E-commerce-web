import React from "react";
import "./Goods.css";
import Img from "../Hero/hero Img/heroImg2.png";
import coffee from "../../../assets/coffee-asorted-300x300.jpg";
import { CiStar } from "react-icons/ci";
import Sanitizer from "../../../assets/sanitizer-300x300.jpg";
import redChillies from "../../../assets/red-chillies-300x300.jpg";
import edibleOil from "../../../assets/edible-oil-300x300.jpg";
import leaf2 from "../../../assets/basil-leaf2.png";
import { FaArrowRight } from "react-icons/fa";
import orange from "../../../assets/product11-free-img.jpg";
import carbage from "../../../assets/product13-free-img.jpg";
import Beans from "../../../assets/product17-free-img.jpg";
import { CgShoppingCart } from "react-icons/cg";
const Goods = () => {
  return (
    <div>
      <h1 className="Best">Best Selling Products</h1>
      <div className="first-Img-div">
        <img src={Img} alt="" />
      </div>
      <div className="products-flex-div">
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
        <div>
          <img src={Sanitizer} alt="" />
          <p>Groceries</p>
          <h3>Hand Sanitierz</h3>
          <h6>
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
          </h6>
          <h5>£15.00</h5>
        </div>
        <div>
          <img src={redChillies} alt="" />
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
        <div>
          <img src={edibleOil} alt="" />
          <p>Groceries</p>
          <h3>Natural Extracted Edible Oil</h3>
          <h6>
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
          </h6>
          <h5>
            <span className="old-price">£34.00</span>£25.00
          </h5>
        </div>
      </div>
      <div className="leaf2">
        <img src={leaf2} alt="" />
      </div>
      <div className="fruit-veg-leg">
        <div>
          <div className="fruit-img-div">
            <img className="fruit" src={orange} alt="" />
            <div className="overlay-text">
              <h2>Farm Fresh Fruits</h2>
              <p>
                Ut sollicitudin quam vel purus tempus, vel eleifend felis
                varius.
              </p>
              <button>
                Shop Now
                <span className="arrow">
                  <FaArrowRight />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="fruit-img-div">
            <img className="fruit" src={carbage} alt="" />
            <div className="overlay-text">
              <h2>Fresh Vegetables</h2>
              <p>
                Aliquam porta justo nibh, id laoreet sapien sodales vitae justo.
              </p>
              <button>
                Shop Now
                <span className="arrow">
                  <FaArrowRight />
                </span>
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="fruit-img-div">
            <img className="fruit" src={Beans} alt="" />
            <div className="overlay-text">
              <h2>Organic Legume</h2>
              <p>Phasellus sed urna mattis, viverra libero sed, aliquam est.</p>
              <button>
                Shop Now
                <span className="arrow">
                  <FaArrowRight />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-border">
        <div>
          <h2>Get 25% Off On Your First Purchase!</h2>
        </div>
        <div>
          <button>
            <span className="footer-cart">
              <CgShoppingCart />
            </span>
            SHOP NOW
          </button>
        </div>
      </div>
      <div className="footer">
        <h3>Try It For Free. No Registration Needed.</h3>
      </div>
    </div>
  );
};

export default Goods;
