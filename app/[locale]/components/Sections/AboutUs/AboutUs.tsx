'use client'

import React from 'react'
import { Container } from '../../Container'
import Image from 'next/image'
import useMediaQuery from '@/app/[locale]/hooks/UseMediaQuery'
import { largeScreens } from '../../MediaQueries'

interface Props{
    title:string,
    description:string
}

export const AboutUs = ({title,description}:Props) => {
    const isAboveLargeScreens = useMediaQuery(largeScreens)
  return (
    <section className='lg:pt-[80px] pt-[50px]'>
        <Container>

        <div className="lg:px-[50px] flex center xl:justify-center lg:justify-between
          xl:gap-[147px] lg:gap-[100px] gap-[20px] lg:flex-row flex-col" >
        <h1 className="leading-[140%] text-[36px] xl:basis-1/3 lg:basis-1/2 font-semibold tracking-[1px] text-darkpurple">{title}</h1>
        <p className="text-[#656D9F] text-[18px]  pt-[10px] xl:basis-1/3 lg:basis-1/2">
          {description}
        </p>
      </div>
        </Container>
        <Container rightSpace={isAboveLargeScreens}>
            <div className='w-full flex lg:justify-end justify-center lg:items-end gap-[40px] lg:flex-nowrap flex-wrap '>
                <Image
                    src={'/Images/About_us/Image-1.webp'}
                    alt='about_us-1Image'
                    width={350}
                    height={314}
                    className='xl:w-[350px] md:w-[250px] xl:h-[314px] md:h-[230px] w-full max-h-[250px]  object-cover rounded-[12px]'
                />
                <Image
                    src={'/Images/About_us/Image-2.webp'}
                    alt='about_us-1Image'
                    width={350}
                    height={314}
                    className='xl:w-[350px] md:w-[250px] xl:h-[314px] md:h-[230px] w-full max-h-[250px] object-cover  rounded-[12px]'
                />
                <Image
                    src={'/Images/About_us/Image-3.webp'}
                    alt='about_us-1Image'
                    width={350}
                    height={314}
                    className='xl:w-[350px] md:w-[250px] xl:h-[314px] md:h-[230px] w-full max-h-[250px]  object-cover lg:rounded-r-[12px] rounded-[12px]'
                />
            </div>
        </Container>
    </section>
  )
}