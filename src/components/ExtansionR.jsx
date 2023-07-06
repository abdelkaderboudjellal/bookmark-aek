import React from "react";
import dots from "./images/bg-dots.svg";
const ExtansionR = (props) => {
  return (
    <div>
      <div className={props.className}>
        <img className="my-4" src={props.image} alt="" srcSet="" />
        <h1 className="font-bold text-3xl my-2">add to {props.name}</h1>
        <h1 autoCapitalize="text-lg my-2">{props.version}</h1>
        <img className="h-2  w-1/2  my-2" src={dots} alt="" srcSet="" />
        <button className="my-4  py-4 px-6 bg-[#5368DF] text-white rounded-md ">
          Add & Install Extension
        </button>
      </div>
    </div>
  );
};

export default ExtansionR;
