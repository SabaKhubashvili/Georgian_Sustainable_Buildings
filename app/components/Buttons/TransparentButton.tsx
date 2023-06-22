
interface Props {
  label: string;
  onClick: () => void;
  color: string;
  full?:boolean
}

export const TransparentButton = ({ label, onClick, color,full }: Props) => {
  return (
    <button
      className={`px-[17px] py-[12px] rounded-[4px] 
      border-transparentButton 
      border-[1px] border-solid font-bold leading-[18px] lg:text-[16px] text-[14px]
      ${full && 'w-full'}
      ${color === "blue" ? "text-blue" : "text-green"}
       `}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
