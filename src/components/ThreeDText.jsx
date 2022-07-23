import React from "react";
import "../css/3D-text.css"

const ThreeDText = ({ text, fontSize, letterSpacing }) => {
  return (
    <h3
      className="threeDee"
      style={{ fontSize: fontSize, letterSpacing: letterSpacing }}
    >
      {text}
    </h3>
  );
};

export default ThreeDText;
