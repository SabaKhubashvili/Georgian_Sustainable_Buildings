"use client";

import React, { useState, useEffect, useCallback,useRef } from "react";
import { FillButton } from "../Buttons";
import { AiOutlineClose } from "react-icons/ai";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  disabled?: boolean;
  body: React.ReactElement;
  footer: React.ReactElement;
  title: string;
  subTitle: string;
  actionLabel:string
}

export const Modal = ({
  isOpen,
  onClose,
  onSubmit,
  disabled,
  body,
  footer,
  title,
  subTitle,
  actionLabel
}: Props) => {
  const [showModal, setshowModal] = useState<boolean>(isOpen);
  const modalRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    setshowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return null;
    }
    setshowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [setshowModal,onClose,disabled]);

  const handleSubmit = useCallback(()=>{
    if(disabled){
        return null
    }

    onSubmit()
  },[onSubmit,disabled])

  useEffect(()=>{
    if(showModal  && !disabled){

        const handleOutsideClick = (event:MouseEvent) =>{
            if(modalRef.current && !modalRef.current.contains(event.target as Node)){
               handleClose()
            }
        }

        window.addEventListener('click',handleOutsideClick)
        return () => {window.removeEventListener('click',handleOutsideClick)}
    }
  },[showModal,disabled])
  

  if (!isOpen) {
    return null;
  }

  return (
    <section className="fixed inset-0 z-[100] w-full h-full flex justify-center items-center bg-neutral-900/75 outline-none overflow-y-auto">
      <div className="md:w-4/6 lg:w-3/6 xl:w-2/5 w-full my-6 mx-auto h-full md:h-auto">
        <div
          className={`
        ${showModal ? "translate-y-0" : "translate-y-[250%]"}
        transition-all duration-300 h-full
        `}
        >
          <div ref={modalRef} className="bg-white p-7 flex flex-col gap-[20px]"> 
            <div className="flex justify-between">
              <div>
                <h1 className="font-bold text-[21px] ">{title}</h1>
                <p className="text-[11px] pt-[4px]">{subTitle}</p>
              </div>
              <div className="cursor-pointer" onClick={handleClose}>
                <AiOutlineClose size={24} />
              </div>
            </div>
            <div className="my-[10px] h-[1px] w-full  bg-[#73779f6d]" />
            <div className="flex flex-col gap-[10px]">{body}</div>
            <div className="flex flex-col gap-[10px]">
              <FillButton label={actionLabel} onClick={handleSubmit} color="blue" />
              {footer}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
