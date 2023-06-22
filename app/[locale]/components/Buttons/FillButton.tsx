'use client'


interface Props {
    label: string;
    onClick: () => void;
    color: string;
    full?:boolean
  }

export const FillButton = ({
    full,
    color,
    onClick,
    label
}:Props) => {
  return (
    <button
        className={`px-[17px] py-[12px] rounded-[4px] 
        border-transparentButton 
        border-[1px] border-solid font-bold leading-[18px] lg:text-[16px] text-[14px] text-white
        ${full && 'w-full'}
        ${color === "blue" ? "bg-blue" : "bg-green"}
        `}
        onClick={onClick}
    >
        {label}
    </button>
  )
}
