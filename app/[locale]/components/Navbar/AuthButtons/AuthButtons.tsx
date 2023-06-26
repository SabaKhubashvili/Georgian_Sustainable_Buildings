import React from "react";
import { TransparentButton } from "../../Buttons";
import { LanguageDropdown } from "../../Dropdowns/LanguageDropdown";
import { UseLoginModal } from "@/app/hooks/UseLoginModal";
import { UseRegisterModal } from "@/app/hooks/UseRegisterModal";

interface Props{
  data:{
    sign_in:string,
    try:string
  }
}

export const AuthButtons = ({data}:Props) => {

  const loginModal = UseLoginModal()
  const registerModal = UseRegisterModal()

  return (
    <div className="flex gap-[10px] items-center">
      <div className="flex items-center gap-[20px]">
        <h4 className="text-lightPurple font-medium md:text-[16px] text-[14px] cursor-pointer" onClick={()=>loginModal.onOpen()}>
          {data.sign_in}
        </h4>
        <TransparentButton
          label={data.try}
          onClick={()=>registerModal.onOpen()}
          color="blue"
        />
      </div>

      <LanguageDropdown />
    </div>
  );
};
