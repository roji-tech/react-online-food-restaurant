import React from "react";
import { Link } from "react-router-dom";

import "../css/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-row">
        <Link to="/">
        <div className="nav-logo custom-3D-title">Tasty</div>
        </Link>
        <div>
          <p>
            Purpose is to sustainably make Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Voluptas reprehenderit doloribus
            placeat est tenetur, deserunt ducimus quis labore saepe tempora?
          </p>
        </div>
        <div>
          <h3 className="footer-subtitle ">services</h3>
          <ul>
            <li>home deivery</li>
            <li>quality food </li>
            <li>affordable price </li>
          </ul>
        </div>
        <div>
          <h3 className="footer-subtitle">quick links</h3>
          <ul>
            <li>
              <Link to={"/"} className="quick-links">
                home{" "}
              </Link>
            </li>
            <li>
              <Link to={"/about"} className="quick-links">
                about{" "}
              </Link>
            </li>
            <li>
              <Link to={"/products"} className="quick-links">
                products{" "}
              </Link>
            </li>
            <li>
              <Link to={"/contact"} className="quick-links">
                contact{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="copyright">copyright &copy; SideHustle React Group 73</p>
    </footer>
  );
};

export default Footer;
