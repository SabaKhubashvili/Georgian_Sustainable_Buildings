'use client'

import React from 'react'
import { Container } from '../../Container'
import Image from 'next/image'
import useMediaQuery from '@/app/[locale]/hooks/UseMediaQuery'
import { largeScreens } from '../../MediaQueries'
import { useTranslations } from 'next-intl'



export const AboutUs = () => {
    const isAboveLargeScreens = useMediaQuery(largeScreens)
    const aboutT = useTranslations('About_us')
  return (
    <section className='lg:pt-[80px] pt-[50px]'>
        <Container>

        <div className="lg:px-[50px] flex center xl:justify-center lg:justify-between
          xl:gap-[147px] lg:gap-[100px] gap-[20px] lg:flex-row flex-col" >
        <h1 className="leading-[140%]  xl:text-[36px] md:text-[30px] text-[20px] xl:basis-1/3 lg:basis-1/2 font-semibold tracking-[1px] text-darkpurple">{aboutT('title')}</h1>
        <p className="text-[#656D9F] sm:text-[18px] text-[16px] pt-[10px] xl:basis-1/3 lg:basis-1/2">
          {aboutT('description')}
        </p>
      </div>
        </Container>
        <Container rightSpace={isAboveLargeScreens}>
            <div className='w-full flex lg:justify-end justify-center lg:items-end gap-[40px] lg:flex-nowrap flex-wrap '>
                <Image
                    src={'/Images/About_us/Image1.webp'}
                    alt='about_us-1Image'
                    width={350}
                    height={314}
                    className='xl:w-[350px] md:w-[250px] xl:h-[314px] md:h-[230px] w-full max-h-[250px]  object-cover rounded-[11px]'
                />
                <Image
                    src={'/Images/About_us/Image2.webp'}
                    alt='about_us-1Image'
                    width={350}
                    height={314}
                    className='xl:w-[350px] md:w-[250px] xl:h-[314px] md:h-[230px] w-full max-h-[250px] object-cover  rounded-[11px]'
                />
                <Image
                    src={'/Images/About_us/Image-3.webp'}
                    alt='about_us-1Image'
                    width={350}
                    height={314}
                    className='xl:w-[350px] md:w-[250px] xl:h-[314px] md:h-[230px] w-full max-h-[250px]  object-cover lg:rounded-r-[12px] rounded-[11px]'
                />
            </div>
        </Container>
    </section>
  )
}
