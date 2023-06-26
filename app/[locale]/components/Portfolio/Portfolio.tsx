"use client";

import React, { useState } from "react";
import { Container } from "../Container";
import { PortfolioImageComponent } from "./PortfolioImageComponent";

interface Props{
    title:string,
    description:string
}

export const Portfolio = ({title,description}:Props) => {

  const slicedDescription =
    description.length > 400
      ? description.slice(0, 400).split(" ").slice(0, -1).join(" ")
      : description;

  const remainingText = description.slice(slicedDescription.length);

  return (
    <section className="lg:pt-[359px] pt-[300px] -mt-[150px] bg-[#00A5780D]">
      <Container>
        <div
          className="w-full flex justify-between relative 
            before:content-dot-pattern-green  md:before:inline before:hidden before:absolute before:-right-10 before:-top-10 before:z-[-1] gap-[28px] lg:flex-row flex-col"
        >
          <div className="basis-auto w-full ">
            <h1 className="text-darkpurple font-semibold leading-[140%] text-[36px]">
              {title}
            </h1>
            <p className="pt-[40px] text-darkpurple text-[18px]">
              {slicedDescription}
            </p>
            <div className="lg:pt-[71px] flex justify-between items-start gap-[20px] lg:flex-row flex-col ">
              {remainingText.length > 1 && (
                <p className=" text-darkpurple text-[18px]">{remainingText}</p>
              )}
              <div className="flex lg:flex-col flex-row lg:w-fit w-full md:flex-nowrap flex-wrap  justify-around items-end gap-[48px]  basis-auto">
                <PortfolioImageComponent
                  title="Track & Manage incident reporting on job sites."
                  image="Portfolio-1.webp"
                />
                <PortfolioImageComponent
                  title="Upskill your workers with integrated training management."
                  image="Portfolio-2.webp"
                />
              </div>
            </div>
          </div>
          <div className="flex lg:gap-[78px] gap-[28px] basis-auto lg:flex-col flex-row lg:flex-nowrap flex-wrap lg:justify-normal justify-around">
            <PortfolioImageComponent title="Enables skill based pay rates with Shift differential pay." image="Portfolio-3.webp" />
            <PortfolioImageComponent title="Assign workers to shift based on training certifications." image="Portfolio-4.webp" />
            <PortfolioImageComponent title="Let Workers manage their profile from one APP." image="Portfolio-5.webp" />
          </div>
        </div>
      </Container>
    </section>
  );
};
