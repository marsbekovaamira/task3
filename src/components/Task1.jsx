import React, { useState } from "react";

const Task1 = () => {
  const [text, setText] = useState("BMW");
  return (
    <div>
      <p>{text}</p>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default Task1;
