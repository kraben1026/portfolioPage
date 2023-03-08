import "./main.css";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

const Main = () => {
  const [right, setRight] = useState(true);
  const [left, setLeft] = useState(true);

  const navigate = useNavigate();

  setTimeout(() => {
    setRight(false);
    setLeft(false);
  }, 2000);

  setTimeout(() => {
    navigate("/home");
  }, 2700);

  const rightClasses = `${right ? "right" : "right2"}`;
  const leftClasses = `${left ? "left" : "left2"}`;

  return (
    <>
      <div className="mainWrapper">
        <div className={leftClasses}>
          <h1 className="title"> WEL </h1>
        </div>
        <div className={rightClasses}>
          <h1 className="title2"> COME. </h1>
        </div>
      </div>
    </>
  );
};

export default Main;
