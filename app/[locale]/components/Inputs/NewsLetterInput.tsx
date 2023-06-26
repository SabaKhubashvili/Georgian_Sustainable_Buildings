"use client";

import React from "react";
import { BsFillSendFill } from "react-icons/bs";

export const NewsLetterInput = () => {
  return (
    <div className="relative  lg:w-[600px] md:w-[500px] sm:w-[400px] w-full">
      <input
        type="text"
        className="w-full h-full  pt-[20px] pb-[19px] px-[15px] rounded-[8px]"
        placeholder="Email... "
      />
      <button
        className="absolute right-[8px] top-0 bottom-0
         my-auto h-fit bg-blue text-white py-[11px] 
         px-[10px] font-semibold leading-[18px] text-[18px]
         rounded-[4px] flex gap-[10px]
         "
      >
        <BsFillSendFill color="white" size={18} />
        <p>Subcribe</p>
      </button>
    </div>
  );
};
