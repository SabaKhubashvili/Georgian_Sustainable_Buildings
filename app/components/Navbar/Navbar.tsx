'use client'

import React from 'react'
import { Container } from '../Container'
import { Logo } from '../Images/Logo'
import { BigScreenNavLinks,SmallScreenNavMenu } from './NavLinks'
import { AuthButtons } from './AuthButtons/AuthButtons'
import useMediaQuery from '@/app/hooks/UseMediaQuery'
import { largeScreens } from '../MediaQueries'

export const Navbar = () => {
  const isAboveLargeScreens = useMediaQuery(largeScreens);

  return (
        <nav className=' max-w-[1840px] mx-auto py-[30px] xl:px-[75px] lg:px-[60px] md:px-[50px] sm:px-[40px] px-[20px]
        w-full left-0 right-0  flex justify-between items-center fixed'>
            <div className='lg:ml-0 ml-auto'>
              <Logo/>
            </div>
            { isAboveLargeScreens ?
              <React.Fragment>
                  <BigScreenNavLinks/>
                  <AuthButtons/>
              </React.Fragment>
              :
              <SmallScreenNavMenu/>
            }
        </nav>
  )
}
