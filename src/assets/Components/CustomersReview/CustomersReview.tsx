import React from "react";
import "./CustomersReview.css";
import leaf from "../Hero/hero Img/heroImg2.png";
import leaf4 from "../../../assets/logo-leaf4-free-img.png";
import { CiStar } from "react-icons/ci";
import client2 from "../../../assets/client02-free-img.png";
import client1 from "../../../assets/client01-free-img.png";
import Deal from "../../../assets/sydney-rae-668606-unsplash.jpg";
import { FaArrowRight } from "react-icons/fa";
const CustomersReview = () => {
  return (
    <div>
      <h1 className="customer-reviws">Customers Reviews</h1>
      <div className="leaf">
        <img src={leaf} alt="" />
      </div>
      <div className="watermark-leaf">
        <img className="leaf4" src={leaf4} alt="" />
      </div>
      <div className="Trending-prod-flex">
        <div>
          <button className="client-img-button">
            <span className="client-ratting">
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
            </span>
            <p className="clients-comment">
              Click edit button to change this text. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Ut elit tellus, luctus nec
              ullamcorper mattis, pulvinar dapibus leo
            </p>
            <div className="client-img-div">
              <img src={client2} alt="" />
              <p className="client-Name">Mila Kunis</p>
            </div>
          </button>
        </div>
        <div className="deal-img-div">
          <img className=" deal-img" src={Deal} alt="" />
          <div className="overlay-text">
            <h3>Deal Of The Day 15% Off On All Vegetables!</h3>
            <p>I am text block. Click edit button to change this tex em ips.</p>
            <button>
              Shop Now
              <span className="overlay-button-arrow">
                <FaArrowRight />
              </span>
            </button>
          </div>
        </div>
        <div>
          <button className="client-img-button">
            <span className="client-ratting">
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
            </span>
            <p className="clients-comment">
              Click edit button to change this text. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Ut elit tellus, luctus nec
              ullamcorper mattis, pulvinar dapibus leo
            </p>
            <div className="client-img-div">
              <img src={client1} alt="" />
              <p className="client-Name">Mike Sendler</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomersReview;
