import React, { useState } from "react";
import tab1 from "./images/illustration-features-tab-1.svg";
import tab2 from "./images/illustration-features-tab-2.svg";
import tab3 from "./images/illustration-features-tab-3.svg";
import data from "./data.json";
const Features = () => {
  const [item, steItem] = useState(0);
  const tab = [tab1, tab2, tab3];
  const handleClick = (e) => {
    steItem(e.target.dataset.index);
  };
  return (
    <div id="FEATURES" className=" flex flex-col md:w-[80%] text-[#1E293B]   py-14 md:mx-[10%] min-w-[420px]   ">
      <div className="items-center flex flex-col">
        <h1 className="font-bold text-6xl py-8  ">Features</h1>
        <p className="text-center w-[50%] py-8">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <div className="flex flex-col  ">
        <div className="md:flex justify-center w-[60%] ml-[20%] mb-4  ">
          <div
            data-index={0}
            onClick={handleClick}
            className="px-4 py-2 cursor-pointer   border-b border-slate-700 hover:border-[#F87171] "
          >
            Speedy Searching
          </div>
          <div
            data-index={1}
            onClick={handleClick}
            className="px-4 py-2  cursor-pointer  border-b border-slate-700 hover:border-[#F87171] "
          >
            Easy Sharing
          </div>
          <div
            data-index={2}
            onClick={handleClick}
            className="px-4 py-2 cursor-pointer   border-b border-slate-700 hover:border-[#F87171] "
          >
            Simple Bookmarking
          </div>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-2 mt-8">
          <div className=" px-2">
            <img className="w-[80%]" src={tab[item]} alt="" srcSet="" />
            <div className=" -z-50  bg-[#5368DF] -mt-52 w-[100%] h-[40%] -ml-32 rounded-r-full"></div>
          </div>
          <div className=" text-left flex flex-col  items-center md:flex-none py-52 md:py-[30%] ">
            <h1 className="text-3xl md:text-6xl py-6 font-bold  ">
              {data[item].name}
            </h1>
            <p className="py-6 md:mr-16 text-sm">{data[item].description}</p>
            <button className="p-2 bg-[#5368DF] text-white rounded-md ">
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
