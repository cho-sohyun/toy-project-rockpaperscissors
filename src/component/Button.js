import React from "react";

const Button = ({ text, onClick }) => {
  const getImageSrc = (text) => {
    switch (text) {
      case "가위":
        return "/images/scissors.jpg";
      case "바위":
        return "/images/rock.jpg";
      case "보":
        return "/images/paper.jpg";
      default:
        return "";
    }
  };
  return (
    <div>
      <button className="button" onClick={onClick}>
        <img
          className="button-img"
          src={getImageSrc(text)}
          alt={text}
          style={{ width: "50px", height: "50px" }}
        />
      </button>
    </div>
  );
};

export default Button;
