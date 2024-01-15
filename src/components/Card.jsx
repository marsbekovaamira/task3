import React from "react";

const Card = (props) => (
  <div
    style={{
      width: "260px",
      border: "2px solid violet ",
      padding: "10px",
      borderRadius: "20px",
    }}
  >
    {props.children}
  </div>
);

export default Card;
