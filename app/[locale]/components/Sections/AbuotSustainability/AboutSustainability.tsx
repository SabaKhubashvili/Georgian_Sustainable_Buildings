"use client";

import React from "react";
import {IoIosArrowForward} from 'react-icons/io'

interface Props {
  title: string;
  subTitle: string;

  informationTitle1: string;
  informationsubTitle1: string;

  informationTitle2: string;
  informationsubTitle2: string;

  informationTitle3: string;
  informationsubTitle3: string;

  informationTitle4: string;
  informationsubTitle4: string;

  learnMore:string
}

export function AboutSustainability({
  title,
  subTitle,
  informationTitle1,
  informationTitle2,
  informationTitle3,
  informationTitle4,
  informationsubTitle1,
  informationsubTitle2,
  informationsubTitle3,
  informationsubTitle4,

  learnMore
}: Props) {
  return (
    <section className="lg:pt-[151px] pt-[120px] relative">
      <div className="bg-4 sm:!inline hidden"/>
      <div className="lg:px-[50px] flex center xl:justify-center lg:justify-between
          xl:gap-[147px] lg:gap-[100px] gap-[20px] lg:flex-row flex-col" >
        <h1 className="leading-[140%] text-[36px] xl:basis-1/3 lg:basis-1/2 font-semibold tracking-[1px] text-darkpurple">{title}</h1>
        <p className="text-[#656D9F] text-[18px]  pt-[10px] xl:basis-1/3 lg:basis-1/2">
          {subTitle}
        </p>
      </div>

      <div className="flex justify-between gap-[24px] pt-[74px] xl:flex-nowrap flex-wrap">
          <div className="pt-[50px] pr-[19px] pl-[25px] pb-[22.5px] bg-gradient-to-b from-[#8CC8AA] to-[#00A578] xl:basis-auto sm:basis-[47%] basis-full  rounded-[12px]">
              <h1 className="text-[24px] text-white font-semibold">{informationTitle1}</h1>
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
          <div className="pt-[50px] pr-[19px] pl-[25px] pb-[22.5px] bg-white xl:basis-auto sm:basis-[47%]  basis-full rounded-[12px] ">
              <h1 className="text-[24px] text-darkpurple font-semibold">{informationTitle2}</h1>
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
          <div className="pt-[50px] pr-[19px] pl-[25px] pb-[22.5px] bg-white xl:basis-auto sm:basis-[47%]  basis-full rounded-[12px] ">
              <h1 className="text-[24px]  text-darkpurple font-semibold">{informationTitle3}</h1>
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
          <div className="pt-[50px] pr-[19px] pl-[25px] pb-[22.5px] bg-white xl:basis-auto sm:basis-[47%]  basis-full rounded-[12px] ">
              <h1 className="text-[24px] text-darkpurple font-semibold">{informationTitle4}</h1>
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
      </div>
    </section>
  )
}
