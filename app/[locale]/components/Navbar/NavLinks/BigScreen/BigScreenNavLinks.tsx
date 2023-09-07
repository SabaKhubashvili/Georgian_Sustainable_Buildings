'use client'

import React from 'react'
import { BigScreenNavLink } from './BigScreenNavLink'

interface Props{
  data:any
}

export const BigScreenNavLinks = ({data}:Props) => {

  
  return (
    <div className='flex gap-[27px] items-center'>
        <BigScreenNavLink label={data[0]} to={'/'} />
        {/* <BigScreenNavLink label={data[1]} to={'/about'} /> */}
        <BigScreenNavLink label={data[2]} to={'/calculator'} />
    </div>
  )
}
