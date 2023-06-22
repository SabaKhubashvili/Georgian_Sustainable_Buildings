'use client'

import React from 'react'
import { BigScreenNavLink } from './BigScreenNavLink'

interface Props{
  data:{
    home:string,
    about:string,
    calculator:string
  }
}

export const BigScreenNavLinks = ({data}:Props) => {

  
  return (
    <div className='flex gap-[27px] items-center'>
        <BigScreenNavLink label={data.home} to={'/'} />
        <BigScreenNavLink label={data.about} to={'/about'} />
        <BigScreenNavLink label={data.calculator} to={'/calculator'} />
    </div>
  )
}
