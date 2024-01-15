import React from "react";
const Boxes = ({ stylesArr }) => {
  return (
    <div>
      {stylesArr.map((style, index) => (
        <div
          key={index}
          style={{
            width: style.width || "100px",
            height: style.height || "100px",
            backgroundColor: style.backgroundColor || "blue",
            margin: "10px",
          }}
        ></div>
      ))}
    </div>
  );
};
export default Boxes;
