import React from "react";

const Box = (props) => {
  let resultClass = "";
  if (props.result === "WIN!") {
    resultClass = "win";
  } else if (props.result === "DRAW") {
    resultClass = "draw";
  }

  return (
    <div className={`box ${resultClass}`}>
      <div className="user-title">{props.title}</div>
      <div className="box-content">
        {props.item && (
          <img
            className="item-img"
            src={props.item && props.item.img}
            alt={props.item && props.item.name}
          />
        )}

        {props.result && <div className="result">{props.result}</div>}
      </div>
    </div>
  );
};

export default Box;
