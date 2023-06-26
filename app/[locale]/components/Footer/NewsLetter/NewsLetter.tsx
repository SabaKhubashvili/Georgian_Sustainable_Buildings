'use client'

import React from 'react'
import { NewsLetterInput } from '../../Inputs/NewsLetterInput'

interface Props{
    newsLetterTitle:string
}

export const NewsLetter = ({newsLetterTitle}:Props) => {
  return (
    <div className='flex flex-col gap-[40px] justify-center items-center'>
        <h1 className='text-[#282D6C] font-semibold leading-[120%] text-[34px]  text-center max-w-[800px] '>
            {newsLetterTitle}
        </h1>
        <NewsLetterInput/>
    </div>
  )
}
