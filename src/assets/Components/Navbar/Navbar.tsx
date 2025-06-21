import React from "react";
import "./Navbar.css";
import Navimg from "../../../assets/image.png";
import { BiBasket } from "react-icons/bi";
import { IoPersonSharp } from "react-icons/io5";
import { RiShoppingBasketFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <>
      <div className="Nav-flex">
        <div className="navbar-img-div">
          <img className="navbar-img" src={Navimg} alt="" />
        </div>
        <ol className="list-item-flex">
          <li>About</li>
          <li>Everything</li>
          <li>Groceries</li>
          <li>Juice</li>
          <li>Contacts</li>
        </ol>
        <div className="currency-icon-div">
          <p className="currency">
            £0.00
            <span className=" nav-basket">
              <RiShoppingBasketFill />
              <button className="button-0">0</button>
            </span>
            <IoPersonSharp className="profile-icon" />
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
