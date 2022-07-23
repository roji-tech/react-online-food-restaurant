import React from "react";
import "../css/animatedButton.css";

const AnimatedButton = ({ text, color, bgcolor }) => {
  return (
    <button
      className="animated-button"
      style={{ color: color, backgroundColor: bgcolor }}
    >
      {text}
    </button>
  );
};

export default AnimatedButton;
