'use client'
import Image from 'next/image'
import React from 'react'

interface Props{
    image:string,
    title:string
}

export const PortfolioImageComponent = ({title,image}:Props) => {
  return (
    <div className='relative  h-[290px]  md:w-[250px] w-full'>
        <Image
            src={`/Images/Portfolio/${image}`}
            width={440}
            height={480}
            alt='Portfolio_image'
            className='rounded-[12px] w-full h-full object-cover'
        />
        <Image
            src={`/Images/Portfolio/portfolio-overlay.webp`}
            width={440}
            height={480}
            alt='Portfolio_Overlay'
            className='absolute top-0 rounded-[12px]  w-full h-full object-cover'
        />
        <div className='w-full px-[10px] absolute bottom-[10px] text-white text-[15px] text-center right-0 left-0 mx-auto font-medium'>
          {title}
        </div>
    </div>
  )
}
