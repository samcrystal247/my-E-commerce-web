import React from "react";
import "./Footer.css";
import footerLogo from "../../../assets/organic-store-white-logo.png";
import { SlSocialFacebook, SlSocialTwitter } from "react-icons/sl";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer-background-div">
      <div className="footer-flex-div">
        <div>
          <img src={footerLogo} alt="" />
          <p>
            Maecenas mi justo, interdum at consectetur vel, tristique et arcu.
          </p>
        </div>
        <div>
          <h2>Website</h2>
          <ol>
            <li>About</li>
            <li>Everything</li>
            <li>Groceries</li>
            <li>Juice</li>
            <li>Contact</li>
          </ol>
        </div>
        <div>
          <h2>Quick Links</h2>
          <ol>
            <li> know More About Us</li>
            <li>Visit Store</li>
            <li>Let's connect</li>
            <li>locate Store</li>
          </ol>
        </div>
        <div>
          <h2>Site Links</h2>
          <ol>
            <li>Private Policy</li>
            <li>Shipping Details</li>
            <li>Offers Coupons</li>
            <li>Terms and Conditions</li>
          </ol>
        </div>
      </div>
      <div className="footer-line">
        <hr />
      </div>
      <h3 className="Dev-Name">SAMCRYSTAL247</h3>
      <p className="social-links">
        <SlSocialFacebook className="social" />
        <SlSocialTwitter className="social" />
        <FaInstagram className="social" />
        <FaLinkedinIn className="social" />
      </p>
    </div>
  );
};

export default Footer;
