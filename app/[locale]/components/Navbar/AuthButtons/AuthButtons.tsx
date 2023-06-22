import React from "react";
import { TransparentButton } from "../../Buttons";
import { LanguageDropdown } from "../../Dropdowns/LanguageDropdown";

interface Props{
  data:{
    sign_in:string,
    try:string
  }
}

export const AuthButtons = ({data}:Props) => {


  return (
    <div className="flex gap-[10px] items-center">
      <div className="flex items-center gap-[20px]">
        <h4 className="text-lightPurple font-medium md:text-[16px] text-[14px]">
          {data.sign_in}
        </h4>
        <TransparentButton
          label={data.try}
          onClick={() => {}}
          color="blue"
        />
      </div>

      <LanguageDropdown />
    </div>
  );
};
