"use client";

import React, { useState } from "react";
import { Modal } from "./Modal";
import { MainTextInput } from "../Inputs/MainTextInput";
import {useForm,FieldValues,SubmitHandler} from 'react-hook-form'
import { UseRegisterModal } from "@/app/hooks/UseRegisterModal";
import { UseLoginModal } from "@/app/hooks/UseLoginModal";


interface Props{
  title:string,
  subTitle:string
  actionLabel:string,
  footerContent:string,
  mailLabel:string,
  passwordLabel:string,
  usernameLabel:string
}


export const RegisterModal = ({
  title,
  subTitle,
  actionLabel,
  footerContent,
  mailLabel,
  passwordLabel,
  usernameLabel
}:Props) => {
  const registerModal = UseRegisterModal();
  const loginModal = UseLoginModal();

  const [isLoading,setIsLoading] = useState<boolean>(false)

  const{
    register,
    handleSubmit,
    formState:{
      errors
    }
  } = useForm<FieldValues>({
    defaultValues:{
      username:'',  
      email:'',
      password:'',
    }
  })

  const handleModalChange = () =>{
    registerModal.onClose()
    loginModal.onOpen()
  }
  
  const bodyContent = (
    <React.Fragment>
      <MainTextInput id='username' label={usernameLabel}register={register} errors={errors} required disabled={isLoading}/>
      <MainTextInput id='email' label={mailLabel} register={register} errors={errors} required disabled={isLoading}/>
      <MainTextInput id='password' label={passwordLabel} register={register} errors={errors} required disabled={isLoading}/>
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
      isOpen={registerModal.isOpen}
      onClose={() => registerModal.onClose()}
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
