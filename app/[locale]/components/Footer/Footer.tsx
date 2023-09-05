import React from "react";
import { NewsLetter } from "./NewsLetter/NewsLetter";
import { Container } from "../Container";
import { GrMail } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { useTranslations } from "next-intl";

interface Props {}

export const Footer = ({}: Props) => {
  const footerKeys = [
    {
      title: "title1",
      comp1: "sec1title1",
      comp2: "sec1title2",
      comp3: "sec1title3",
    },

    {
      title: "title2",
      comp1: "sec2title1",
      comp2: "sec2title2",
      comp3: "sec2title3",
      comp4: "sec2title4",
    },
    {
      title: "title3",
      comp1: "sec3title1",
      comp2: "sec3title2",
      comp3: "sec3title3",
    },
  ];
  const footerT = useTranslations("Footer");
  
  return (
    <footer className="mt-[50px] bg-gradient-to-b from-[#E8F1FB] to-[#90b4db8c] pt-[224px] ">
      <Container>
        <NewsLetter newsLetterTitle={footerT("newsLetterTitle")} />
        <section className="pt-[180px] flex justify-between lg:flex-row flex-col">
          {footerKeys.map((singleCol) => (
            <div key={footerT(singleCol.title)}>
              <h2 className="text-[#9EA1BD] text-[12px] font-bold tracking-[1px] uppercase">
                {footerT(singleCol.title)}
              </h2>
              <ul className="pt-[40px] flex flex-col gap-[10px]">
                <li className="text-[#5E6191] font-medium text-[14px] cursor-pointer">
                  {footerT(singleCol.comp1)}
                </li>
                <li className="text-[#5E6191] font-medium text-[14px] cursor-pointer">
                  {footerT(singleCol.comp2)}
                </li>
                <li className="text-[#5E6191] font-medium text-[14px] cursor-pointer">
                  {footerT(singleCol.comp3)}
                </li>
                {singleCol.comp4 && (
                  <li className="text-[#5E6191] font-medium text-[14px] cursor-pointer">
                    {singleCol.comp4}
                  </li>
                )}
              </ul>
            </div>
          ))}
          <div>
            <h2 className="text-[#9EA1BD] text-[12px] font-bold tracking-[1px] uppercase">
              contact
            </h2>
            <ul className="pt-[40px] flex flex-col gap-[10px]">
              <li className="text-[#5E6191] font-medium text-[14px] cursor-pointer">
                <a
                  href="malito:georgian.sustainable.buildings@gmail.com"
                  target="_blank"
                >
                  georgian.sustainable.buildings@gmail.com
                </a>
              </li>
              <li className="text-[#5E6191] font-medium text-[14px] cursor-pointer">
                <a href="tel:+99558153269" target="_blank">
                  +995 558 15 32 69
                </a>
              </li>
              <li className="text-[#5E6191]  text-[14px] cursor-pointer">
                360 Spear St Floor 4, San Francisco, CA 94105
              </li>
            </ul>
          </div>
        </section>
        <div className="mt-[40px] mb-[46px] h-[1px] w-full  bg-[#73779F]" />
        <div className="flex justify-between pb-[123px]">
          <p className="text-[#5E6191] text-[12px]">
            © Copyright 2023. All Rights Reserved.
          </p>
          <div className="flex gap-[30px]">
            <a href="mailto:khubashvili.saba12@gmail.com" target="_blank">
              <GrMail color="#1890FF" size={24} />
            </a>
            <a href="https://www.facebook.com" target="_blank">
              <FaFacebookF color="#8B8B8B" size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/sabakhubashvili/"
              target="_blank"
            >
              <SlSocialLinkedin color="#8B8B8B" size={24} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
