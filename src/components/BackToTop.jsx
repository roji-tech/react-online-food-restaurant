import React from "react";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

// CSS
import "../css/backToTop.css";

const BackToTop = () => {
  const [scrollUp, setScrollUp] = useState(false);
  //   const toTopBtn = document.querySelector("top-btn")

  useEffect(() => {
    let showScrollUpBotton = () => {
      if (window.scrollY > 600) {
        setScrollUp(true);
      } else {
        setScrollUp(false);
      }
    };

    window.addEventListener("scroll", showScrollUpBotton);
  }, []);

  //   function to scroll up
  function toTop() {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }

  return (
    <>
      {scrollUp && (
        <div href="#tp" className="top-btn" onClick={toTop}>
          <FaArrowUp />
        </div>
      )}
    </>
  );
};

export default BackToTop;
