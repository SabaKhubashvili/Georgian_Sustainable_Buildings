"use client";

import React from "react";
import { FillButton } from "../Buttons";
import Image from "next/image";
import { largeScreens } from "../MediaQueries";
import useMediaQuery from "@/app/hooks/UseMediaQuery";

export const MainBanner = () => {
  const isAboveLargeScreens = useMediaQuery(largeScreens);

  return (
    <section className="relative w-full min-h-[562px]  ">
      <div className="flex flex-col gap-[16px] lg:w-[65%] h-full pt-[50px] ">
        <h1 className="text-[#030852D9] font-semibold lg:text-[64px] md:text-[55px] sm:text-[40px] text-[30px]">
          We understand the complexity of the Construction Business
        </h1>
        <p className="text-[#262B6A] md:text-[16px] text-[14px] font-medium">
          Projects are unique, Sites are unique, Scale is variable, Workers
          change, subcontractors change along with cost and timeline. Did we
          miss anything? We have designed domo to handle all of these for you
          and much more!
        </p>
      </div>
      <div className="pt-[32px] flex gap-[18px] items-center">
        <FillButton color="green" label="Request Demo" onClick={() => {}} />
        <h4 className="text-green font-medium md:text-[16px] text-[14px]">
          Try it out
        </h4>
      </div>
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
