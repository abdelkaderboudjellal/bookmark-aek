import React, { useState } from "react";
import OutlineClose from "./images/icon-arrow-down.svg";
import OutlineMenu from "./images/icon-arrow-up.svg";
const QuestionrR = (props) => {
  const [outlin, setOutlin] = useState(true);
  const handLeOutlin = () => {
    setOutlin(!outlin);
  };
  return (
    <div>
      <div className="text-left  my-4 border-t-2 border-gray-400">
        <div
          onClick={handLeOutlin}
          className="flex  justify-between items-center my-4 hover:text-[#F87171]"
        >
          <h1 className="text-xl md:text-2xl font-bold ">{props.Questions}</h1>
          <img
            className="h-4"
            src={outlin ? OutlineClose : OutlineMenu}
            alt=""
            srcSet=""
          />
        </div>

        <p className={outlin ? "hidden" : "text-xl my-2"}>{props.Reponses}</p>
      </div>
    </div>
  );
};

export default QuestionrR;
