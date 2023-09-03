"use client";

import React from "react";
import {IoIosArrowForward} from 'react-icons/io'

interface Props {
  title: string;
  subTitle: string;

  informationsubTitle1: string;
  informationsubTitle2: string;
  informationsubTitle3: string;
  informationsubTitle4: string;
  informationsubTitle5: string;

  learnMore:string
}

export function AboutSustainability({
  title,
  subTitle,
  informationsubTitle1,
  informationsubTitle2,
  informationsubTitle3,
  informationsubTitle4,
  informationsubTitle5,

  learnMore
}: Props) {
  return (
    <section className="lg:pt-[151px] pt-[120px] relative">
      <div className="bg-4 sm:!inline hidden"/>
      <div className="lg:px-[50px] flex center xl:justify-center lg:justify-between
          xl:gap-[147px] lg:gap-[100px] gap-[20px] lg:flex-row flex-col" >
        <h1 className="leading-[140%] xl:text-[36px] md:text-[30px] text-[20px]  xl:basis-1/3 lg:basis-1/2 font-semibold tracking-[1px] text-darkpurple">{title}</h1>
        <p className="text-[#656D9F] sm:text-[18px] text-[16px]  pt-[10px] xl:basis-1/3 lg:basis-1/2">
          {subTitle}
        </p>
      </div>
          <div className="pt-[22.5px] pr-[19px] pl-[25px] pb-[22.5px] bg-gradient-to-b from-[#8CC8AA] to-[#00A578] xl:basis-auto sm:basis-[47%] basis-full  rounded-[12px] mt-[74px]">
              {/* <h1 className="text-[24px] text-white font-semibold">{informationTitle1}</h1> */}
              <p className="pt-[20px] text-white text-[16px]">{informationsubTitle1}</p>
              <div className="pt-[15px] text-white font-medium text-[18px] flex gap-[2px] items-center cursor-pointer ">
                <p className="peer">
                  {learnMore}
                </p>
                <div className="peer-hover:pl-2 transition-all duration-150">
                  <IoIosArrowForward/>
                </div>
              </div>
          </div>
      <div className="flex justify-between gap-[24px] pt-[24px] xl:flex-nowrap flex-wrap">
          <div className="pt-[50px] pr-[19px] pl-[25px] pb-[22.5px] bg-white xl:basis-[24%] sm:basis-[47%]  basis-full rounded-[12px] flex flex-col justify-between ">
              {/* <h1 className="text-[24px] text-darkpurple font-semibold">{informationTitle2}</h1> */}
              <p className="pt-[20px] text-[16px] text-[#656D9F]">{informationsubTitle2}</p>
              <div className="pt-[15px] text-green font-medium text-[18px] flex gap-[2px] items-center cursor-pointer ">
                <p className="peer">
                  {learnMore}
                </p>
                <div className="peer-hover:pl-2 transition-all duration-150">
                  <IoIosArrowForward/>
                </div>
              </div>
          </div>
          <div className="pt-[50px] pr-[19px] pl-[25px] pb-[22.5px] bg-white xl:basis-[24%] sm:basis-[47%]  basis-full rounded-[12px] flex flex-col justify-between ">
              {/* <h1 className="text-[24px]  text-darkpurple font-semibold">{informationTitle3}</h1> */}
              <p className="pt-[20px]  text-[16px] text-[#656D9F]">{informationsubTitle3}</p>
              <div className="pt-[15px] text-green font-medium text-[18px] flex gap-[2px] items-center cursor-pointer ">
                <p className="peer">
                  {learnMore}
                </p>
                <div className="peer-hover:pl-2 transition-all duration-150">
                  <IoIosArrowForward/>
                </div>
              </div>
          </div>
          <div className="pt-[50px] pr-[19px] pl-[25px] pb-[22.5px] bg-white xl:basis-[24%] sm:basis-[47%]  basis-full rounded-[12px] flex flex-col justify-between ">
              {/* <h1 className="text-[24px] text-darkpurple font-semibold">{informationTitle4}</h1> */}
              <p className="pt-[20px]  text-[16px] text-[#656D9F]">{informationsubTitle4}</p>
              <div className="pt-[15px] text-green font-medium text-[18px] flex gap-[2px] items-center cursor-pointer ">
                <p className="peer">
                  {learnMore}
                </p>
                <div className="peer-hover:pl-2 transition-all duration-150">
                  <IoIosArrowForward color="#00A578"/>
                </div>
              </div>
          </div>
          <div className="pt-[50px] pr-[19px] pl-[25px] pb-[22.5px] bg-white xl:basis-[24%] sm:basis-[47%]  basis-full rounded-[12px] flex flex-col justify-between ">
              {/* <h1 className="text-[24px] text-darkpurple font-semibold">{informationTitle5}</h1> */}
              <p className="pt-[20px]  text-[16px] text-[#656D9F]">{informationsubTitle5}</p>
              <div className="pt-[15px] text-green font-medium text-[18px] flex gap-[2px] items-center cursor-pointer ">
                <p className="peer">
                  {learnMore}
                </p>
                <div className="peer-hover:pl-2 transition-all duration-150">
                  <IoIosArrowForward color="#00A578"/>
                </div>
              </div>
          </div>
      </div>
    </section>
  )
}
