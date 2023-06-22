'use client'

import React,{useContext} from 'react'
import { Logo } from '../Images/Logo'
import { BigScreenNavLinks,SmallScreenNavMenu } from './NavLinks'
import { AuthButtons } from './AuthButtons/AuthButtons'
import useMediaQuery from '@/app/[locale]/hooks/UseMediaQuery'
import { largeScreens } from '../MediaQueries'
import { NavContext } from '../../providers/NavbarContextProvider'

export const Navbar = () => {
  const isAboveLargeScreens = useMediaQuery(largeScreens);
  const NavbarContext = useContext(NavContext)
  
  return (
        <nav className=' max-w-[1840px] mx-auto py-[30px] xl:px-[75px] lg:px-[60px] md:px-[50px] sm:px-[40px] px-[20px]
        w-full left-0 right-0  flex justify-between items-center fixed'>
            <div className='lg:ml-0 ml-auto'>
              <Logo/>
            </div>
            { isAboveLargeScreens ?
              <React.Fragment>
                  <BigScreenNavLinks data={NavbarContext.Links}/>
                  <AuthButtons data={NavbarContext.Auth} />
              </React.Fragment>
              :
              <SmallScreenNavMenu/>
            }
        </nav>
  )
}
