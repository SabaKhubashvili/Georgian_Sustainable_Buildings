import React from "react";

interface Props {
  label: string;
  onClick: () => void;
  color: string;
}

export const TransparentButton = ({ label, onClick, color }: Props) => {
  return (
    <button
      className={`px-[17px] py-[12px] rounded-[4px] text-${color} border-transparentButton 
      border-[1px] border-solid font-bold leading-[18px] lg:text-[16px] text-[14px] `}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
