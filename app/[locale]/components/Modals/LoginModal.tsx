"use client";

import { UseLoginModal } from "@/app/hooks/UseLoginModal";
import React, { useState } from "react";
import { Modal } from "./Modal";
import { MainTextInput } from "../Inputs/MainTextInput";
import {useForm,FieldValues,SubmitHandler} from 'react-hook-form'
import { UseRegisterModal } from "@/app/hooks/UseRegisterModal";

interface Props{
  title:string,
  subTitle:string
  actionLabel:string,
  footerContent:string,
  mailLabel?:string,
  passwordLabel?:string
}

export const LoginModal = ({
  title,
  subTitle,
  actionLabel,
  footerContent,
  mailLabel,
  passwordLabel
}:Props) => {
  const loginModal = UseLoginModal();
  const registerModal = UseRegisterModal();

  const [isLoading,setIsLoading] = useState<boolean>(false)

  const{
    register,
    handleSubmit,
    formState:{
      errors
    }
  } = useForm<FieldValues>({
    defaultValues:{
      email:'',
      password:'',
    }
  })
  const handleModalChange = () =>{
    registerModal.onOpen()
    loginModal.onClose()
  }
  
  
  const bodyContent = (
    <React.Fragment>
      <MainTextInput id='email' label={mailLabel || "Email"} register={register} errors={errors} required disabled={isLoading}/>
      <MainTextInput id='password' label={passwordLabel || "Password"} register={register} errors={errors} required disabled={isLoading}/>
    </React.Fragment>
  )
  const FooterContent = (
    <div>
      {footerContent} <span className="text-purple cursor-pointer" onClick={handleModalChange}>Click here</span>
    </div>
  )

  const onSubmit:SubmitHandler<FieldValues> = (data) =>{
    console.log(data)
  }
    
  
  return (
    <Modal
      isOpen={loginModal.isOpen}
      onClose={() => loginModal.onClose()}
      title={title}
      subTitle={subTitle}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={FooterContent}
      disabled={isLoading}
      actionLabel={actionLabel}
    />
  );
};
