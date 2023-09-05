"use client";

import { UseLoginModal } from "@/app/hooks/UseLoginModal";
import React, { useState } from "react";
import { Modal } from "./Modal";
import { MainTextInput } from "../Inputs/MainTextInput";
import {useForm,FieldValues,SubmitHandler} from 'react-hook-form'
import { UseRegisterModal } from "@/app/hooks/UseRegisterModal";
import { useTranslations } from "next-intl";


export const LoginModal = () => {
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
    if(!isLoading){
      registerModal.onOpen()
      loginModal.onClose()
    }
  }
  const ModalT = useTranslations('Modal')
  
  const bodyContent = (
    <React.Fragment>
      <MainTextInput id='email' label={ModalT('mailLabel') || "Email"} register={register} errors={errors} required disabled={isLoading}/>
      <MainTextInput id='password' type="password" label={ModalT('passwordLabel') || "Password"} register={register} errors={errors} required disabled={isLoading}/>
    </React.Fragment>
  )
  const FooterContent = (
    <div>
      {ModalT('loginFooter')} <span className="text-purple cursor-pointer" onClick={handleModalChange}>{ModalT('ClickHere')}</span>
    </div>
  )

  const onSubmit:SubmitHandler<FieldValues> = (data) =>{
    console.log(data)
  }
    
  
  return (
    <Modal
      isOpen={loginModal.isOpen}
      onClose={() => loginModal.onClose()}
      title={ModalT('loginTitle')}
      subTitle={ModalT('loginSubTitle')}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={FooterContent}
      disabled={isLoading}
      actionLabel={ModalT('loginActionLabel')}
    />
  );
};
