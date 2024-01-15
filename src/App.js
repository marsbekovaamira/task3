import React from "react";
import Task1 from "./components/Task1";
import Boxes from "./components/Boxes";
import Card from "./components/Card";
import Avatar from "./components/Avatar";

const App = () => {
  let stylesArr = [
    { width: "300px", height: "150px", backgroundColor: "red" },
    { width: "300px", height: "150px", backgroundColor: "blue" },
  ];

  return (
    <div>
      <Boxes stylesArr={stylesArr} />
      <Task1 />
      <Card>
        <Avatar
          src="https://i.pinimg.com/236x/82/32/ef/8232eff2ddf8af44d96c2b1b45d28956.jpg"
          alt=""
        />
      </Card>
    </div>
  );
};

export default App;
// !---------- извините за ссылку)))----------------------
