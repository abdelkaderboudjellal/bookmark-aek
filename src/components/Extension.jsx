import React from "react";
import firefox from "./images/logo-firefox.svg";
import chrome from "./images/logo-chrome.svg";
import opera from "./images/logo-opera.svg";
import navigateurdata from "./NavigaData.json";
import ExtansionR from "./ExtansionR";
const Extension = () => {
  const imageNave = [chrome, firefox, opera];
  return (
    <div
      id="EXTENSION"
      className=" py-24  relative flex flex-col text-[#1E293B] min-w-[420px] w-[100%]"
    >
      <div>
        <h1 className="font-bold text-4xl m-8 py-2 ">Download the extension</h1>
        <h1 className="text-md py-4 m-4">
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </h1>
      </div>
      <div className=" relative grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-3     py-4  ">
        {navigateurdata.map((item) => {
          return (
            <ExtansionR
              key={item.id}
              className={item.classeName}
              name={item.name}
              image={imageNave[item.id]}
              version={item.version}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Extension;
