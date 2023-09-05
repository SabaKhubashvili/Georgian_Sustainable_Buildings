"use client";

import React, { useState } from "react";
import { Modal } from "./Modal";
import { MainTextInput } from "../Inputs/MainTextInput";
import {useForm,FieldValues,SubmitHandler} from 'react-hook-form'
import { UseRegisterModal } from "@/app/hooks/UseRegisterModal";
import { UseLoginModal } from "@/app/hooks/UseLoginModal";
import axios from "axios";
import {toast} from 'react-hot-toast'
import { useTranslations } from "next-intl";




export const RegisterModal = () => {
  const registerModal = UseRegisterModal();
  const loginModal = UseLoginModal();
  const modalT = useTranslations('Modal')
  const [isLoading,setIsLoading] = useState<boolean>(false)

  const{
    register,
    handleSubmit,
    formState:{
      errors
    },
    reset
  } = useForm<FieldValues>({
    defaultValues:{
      username:'',  
      email:'',
      password:'',
    }
  })

  const handleModalChange = () =>{
    if(!isLoading){
      registerModal.onClose()
      loginModal.onOpen()
    }
  }

  
  const bodyContent = (
    <React.Fragment>
      <MainTextInput id='username' label={modalT('nameLabel')}register={register} errors={errors} required disabled={isLoading}/>
      <MainTextInput id='email' label={modalT('mailLabel')} register={register} errors={errors} required disabled={isLoading}/>
      <MainTextInput id='password' type="password" label={modalT('passwordLabel')} register={register} errors={errors} required disabled={isLoading}/>
    </React.Fragment>
  )
  const FooterContent = (
    <div>
      {modalT('registerFooter')} <span className="text-purple cursor-pointer" onClick={handleModalChange}>{modalT('ClickHere')}</span>
    </div>
  )

  const onSubmit:SubmitHandler<FieldValues> = async(data) =>{
    if(!isLoading){
      setIsLoading(true)
      try{
        const response = await axios.post('/api/auth/register',data)
        toast.success(response.data.message)
        registerModal.onClose()
        loginModal.onOpen()
        reset()
      }catch(error:any){
        toast.error(error.response.data.message)
      }finally{ 
        setIsLoading(false)
      }
    }
  }
    
  
  return (
    <Modal
      isOpen={registerModal.isOpen}
      onClose={() => registerModal.onClose()}
      title={modalT('registerTitle')}
      subTitle={modalT('registerSubTitle')}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={FooterContent}
      disabled={isLoading}
      actionLabel={modalT('registerActionLabel')}
    />
  );
};
