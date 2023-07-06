import React from "react";

const Contact = () => {
  return (
    <div id="CONTACT" className="flex justify-between flex-col bg-[#5368DF] py-24 text-white min-w-[420px] w-[100%]">
      <h1 className="font-bold text-lg py-4">35,000+ ALREADY JOINED</h1>
      <h1 className=" font-bold text-2xl md:text-5xl my-8 mx-[25%] ">
        Stay up to date with what we're doing
      </h1>
      <div className=" mx-[20%] py-8 ">
        <input
          className=" text-gray-700 p-4 w-1/2  mr-6  rounded-md shadow-md shadow-gray-700 "
          type="email"
          name="email"
          placeholder="Enter your email address"
          id=""
        />
        <input
          className=" py-4 w-1/4 md:w-1/6 rounded-md shadow-md shadow-gray-700 bg-[#FA5757] font-bold text-sm md:text-lg mx- "
          type="button"
          value="Contact US"
        />
      </div>
    </div>
  );
};

export default Contact;
