"use client";

import React from "react";
import { FillButton } from "../Buttons";
import Image from "next/image";
import { largeScreens } from "../MediaQueries";
import useMediaQuery from "@/app/[locale]/hooks/UseMediaQuery";

interface Props {
  title:string
  description:string,
  secondaryButtonLabel:string,
  mainButtonLabel:string,
  learnMore:string
}

export const MainBanner = ({title,description,secondaryButtonLabel,mainButtonLabel,learnMore}:Props) => {
  const isAboveLargeScreens = useMediaQuery(largeScreens); 
  

  return (
    <section className="relative w-full lg:min-h-[562px]  ">
      <div className="flex flex-col gap-[16px] lg:w-[65%] h-full pt-[50px] ">
        <h1 className="text-[#030852D9] font-semibold lg:text-[64px] md:text-[55px] sm:text-[40px] text-[30px]">
          {title}
        </h1>
        <p className="text-[#262B6A] md:text-[16px] text-[14px] font-medium">
          {description}
          <br />
          <a href="#portfolio" className='text-green'>{learnMore}</a>
        </p>
      </div>
      <div className="pt-[32px] flex gap-[18px] items-center">
        <FillButton color="green" label={mainButtonLabel} onClick={() => {}} />
        <h4 className="text-green font-medium md:text-[16px] text-[14px]">
          {secondaryButtonLabel}
        </h4>
      </div>
      <div className="bg-3" />
      {isAboveLargeScreens && (
        <div className="absolute top-0 right-0 w-[702px] h-[562px] -z-[10]  ">
            <Image
            src={"/Images/Banners/HomeBanner.webp"}
            alt="MainBanner Image"
            width={1000}
            height={1000}
            priority
            className="h-full w-full"
            />
            <div className=" content-blue-pattern w-[450px] h-full absolute bottom-[-14px] -z-20 right-0" />
            <div className=" content-dot-pattern w-[140px] h-[140px]  absolute top-[80px] -right-[40px] -z-10 " />
          </div>
      )}
    </section>
  );
};
