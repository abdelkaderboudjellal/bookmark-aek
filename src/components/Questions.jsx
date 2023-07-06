import React, { useState } from "react";
import questions from "./Question.json";
import QuestionrR from "./QuestionrR";
const Questions = () => {
  return (
    <div
      id="FAQS"
      className="px-8 md:mx-[20%] mt-20 flex flex-col text-[#1E293B] min-w-[420px] "
    >
      <div>
        <h1 className="text-4xl font-bold mb-8 py-4">
          Frequently Asked Questions
        </h1>
        <h1 className="text-xl text-gray-600 font-bold">
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </h1>
      </div>
      <div className="flex flex-col my-12">
        {questions.map((item) => {
          return (
            <QuestionrR key={item.id} Questions={item.Questions} Reponses={item.Reponses} />
          );
        })}

        <div className="my-4 border-t-2 border-gray-400 ">
          <button className="my-16  py-4 px-6 bg-[#5368DF] text-white rounded-md ">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Questions;
