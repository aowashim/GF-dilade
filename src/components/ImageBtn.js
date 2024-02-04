import React from "react";
import "./custom.css";
import { useNavigate } from "react-router-dom";

function ImageBtn(props) {
  const navigate = useNavigate();

  const imagePath = "image/" + props.imageName + ".png";

  const handleOnClick = () => {
    props.imageName === "boy" ? navigate("/boys") : navigate("/girls");
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
