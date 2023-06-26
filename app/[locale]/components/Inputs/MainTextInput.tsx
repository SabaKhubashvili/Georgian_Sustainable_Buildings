import React, { useState } from "react";
import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
interface Props {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  required?: boolean;
}

export const MainTextInput = ({
  id,
  label,
  type = "text",
  disabled,
  register,
  errors,
  required,
}: Props) => {
  const [currentType, setCurrentType] = useState<string>(type);

  const handleToggleVisibility = (event: React.MouseEvent) => {
    event.stopPropagation();
    setCurrentType(currentType === "password" ? "text" : "password");
  };

  return (
    <div className="relative w-full ">
      <input
        className={`py-[14px] px-[14px] w-full border-[1px]  rounded-[4px] peer outline-none
      ${errors[id] ? "border-rose-600" : "border-lightPurple"}
      disabled:cursor-not-allowed
      `}
        disabled={disabled}
        type={currentType}
        placeholder=" "
        {...register(id, {
          required,
          pattern:
            type === "email"
              ? /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
              : undefined,
        })}
      />
      <div
        className={`absolute h-fit top-0 bottom-0 px-[14px] text-[12px] mt-[3px] 
        transition-all 
       duration-200 peer-placeholder-shown:my-auto  peer-placeholder-shown:text-[15px]
        peer-focus:mt-[3px] peer-focus:text-[12px] select-none pointer-events-none 
        ${errors[id] ? "text-rose-600" : "text-black"}
      `}
      >
        {label}
      </div>
      {type === "password" && (
        <div
          className="absolute top-0 bottom-0 my-auto right-2 h-fit p-1 bg-white cursor-pointer"
          onClick={handleToggleVisibility}
        >
          {currentType === "password" ? (
            <AiFillEyeInvisible size={20} />
          ) : (
            <AiFillEye size={20} />
          )}
        </div>
      )}
    </div>
  );
};
