"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {AiOutlineClose} from 'react-icons/ai'
import { SmallScreenNavLinks } from "./SmallScreenNavLinks";
import { NavbarFooter } from "./NavbarFooter";

export const SmallScreenNavMenu = () => {
  const [isToggled, setIsToggled] = useState<boolean>(false);

  return (
    <div className="order-first">
      <div className=" cursor-pointer" onClick={() => setIsToggled(true)}>
        <GiHamburgerMenu size={28} />
      </div>

        <div className={`fixed left-0 top-0 
         sm:w-[300px] w-full h-full bg-white transition-transform duration-200 p-[2rem]
         flex flex-col  items-start gap-[50px]
         ${isToggled ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="self-end cursor-pointer" onClick={()=>setIsToggled(false)}>
                <AiOutlineClose size={23} color="black"/>
            </div>
            <SmallScreenNavLinks/>
            <NavbarFooter/>
        </div>
    </div>
  );
};
