'use client'

import React from 'react'
import { BigScreenNavLink } from './BigScreenNavLink'


export const BigScreenNavLinks = () => {

  return (
    <div className='flex gap-[27px] items-center'>
        <BigScreenNavLink label='Home' to={'/'} />
        <BigScreenNavLink label='About' to={'/about'} />
        <BigScreenNavLink label='Calculator' to={'/calculator'} />
        <BigScreenNavLink label='Test' to={'/Test'} />
        <BigScreenNavLink label='Test' to={'/Test'} />
        <BigScreenNavLink label='Test' to={'/Test'} />
        <BigScreenNavLink label='Test' to={'/Test'} />
    </div>
  )
}
