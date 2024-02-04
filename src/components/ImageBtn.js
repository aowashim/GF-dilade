import React from "react";
import "./custom.css";

function ImageBtn(props) {
  const imagePath = "image/" + props.imageName + ".png";

  const handleOnClick = () => {
    console.log("clicled...");
  };

  return (
    <img
      onClick={handleOnClick}
      className="image-btn"
      src={imagePath}
      height="95px"
    />
  );
}

export default ImageBtn;
