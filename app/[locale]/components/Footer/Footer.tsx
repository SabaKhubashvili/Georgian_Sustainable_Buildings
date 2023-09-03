import React from 'react'
import { NewsLetter } from './NewsLetter/NewsLetter'
import { Container } from '../Container'
import {GrMail} from 'react-icons/gr'
import {FaFacebookF} from 'react-icons/fa'
import {SlSocialLinkedin} from 'react-icons/sl'

interface Props{
  newsLetterTitle:string,
  content:{
    title:string,
    comp1:string,
    comp2:string,
    comp3:string,
    comp4?:string,
  }[]
}

export const Footer = ({newsLetterTitle,content}:Props) => {
  return (
    <footer className='mt-[50px] bg-gradient-to-b from-[#E8F1FB] to-[#90b4db8c] pt-[224px] '>
      <Container>
        <NewsLetter newsLetterTitle={newsLetterTitle} />
        <section className='pt-[180px] flex justify-between lg:flex-row flex-col'>
          {content.map(singleCol=>(

            
            <div key={singleCol.title}>
              <h2 className='text-[#9EA1BD] text-[12px] font-bold tracking-[1px] uppercase'>{singleCol.title}</h2>
              <ul className='pt-[40px] flex flex-col gap-[10px]'> 
                <li className='text-[#5E6191] font-medium text-[14px] cursor-pointer'>{singleCol.comp1}</li>
                <li className='text-[#5E6191] font-medium text-[14px] cursor-pointer'>{singleCol.comp2}</li>
                <li className='text-[#5E6191] font-medium text-[14px] cursor-pointer'>{singleCol.comp3}</li>
                {
                  singleCol.comp4 && 
                  <li className='text-[#5E6191] font-medium text-[14px] cursor-pointer'>{singleCol.comp4}</li>
                }
              </ul>
          </div>
          ))
          }
          <div>
            <h2 className='text-[#9EA1BD] text-[12px] font-bold tracking-[1px] uppercase'>contact</h2>
            <ul className='pt-[40px] flex flex-col gap-[10px]'> 
              <li className='text-[#5E6191] font-medium text-[14px] cursor-pointer'>Here must be mail</li>
              <li className='text-[#5E6191] font-medium text-[14px] cursor-pointer'>Here number</li>
              <li className='text-[#5E6191]  text-[14px] cursor-pointer'>360 Spear St Floor 4, San Francisco, CA 94105</li>
            </ul>
          </div> 
        </section>
        <div className='mt-[40px] mb-[46px] h-[1px] w-full  bg-[#73779F]' />
        <div className='flex justify-between pb-[123px]'>
          <p className='text-[#5E6191] text-[12px]'>© Copyright 2023. All Rights Reserved.</p>
          <div className='flex gap-[30px]'>
            <a href="mailto:khubashvili.saba12@gmail.com" target='_blank'>
              <GrMail color='#1890FF' size={24}/>
            </a>
            <a href="https://www.facebook.com" target='_blank'>
              <FaFacebookF color='#8B8B8B' size={24}/>
            </a>
              <a href="https://www.linkedin.com/in/sabakhubashvili/" target='_blank' >
                <SlSocialLinkedin color='#8B8B8B' size={24}/>
              </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
