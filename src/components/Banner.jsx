import React from "react";
// import { Link } from "react-router-dom";
import Button from "./Button";

import "../css/banner.css";
// icons import
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa";
const Banner = () => {
  return (
    <div className="banner">
      <h1 className="tagline">Eat healthy. live better</h1>
      <div className="icons">
        <FaFacebookF className="banner-icon" />
        <FaWhatsapp className="banner-icon" />
        <FaTwitter className="banner-icon" />
        <FaInstagram className="banner-icon" />
      </div>

      <Button text={"Explore"} />
    </div>
  );
};

export default Banner;
