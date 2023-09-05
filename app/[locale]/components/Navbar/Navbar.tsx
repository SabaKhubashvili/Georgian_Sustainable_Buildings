'use client'

import React,{useContext, useEffect, useState} from 'react'
import { Logo } from '../Images/Logo'
import { BigScreenNavLinks,SmallScreenNavMenu } from './NavLinks'
import { AuthButtons } from './AuthButtons/AuthButtons'
import useMediaQuery from '@/app/[locale]/hooks/UseMediaQuery'
import { largeScreens } from '../MediaQueries'
import { NavContext } from '../../providers/NavbarContextProvider'
import { useTranslations } from 'next-intl'

export const Navbar = () => {
  const isAboveLargeScreens = useMediaQuery(largeScreens);
  const [isTopOfPage,setIsTopOfPage] = useState<boolean>(true)

  useEffect(()=>{
    const handleScroll = () =>{
      if(window.scrollY === 0){
        setIsTopOfPage(true)
      }else{
        setIsTopOfPage(false)
      }
    }
    window.addEventListener('scroll',handleScroll)
    return () => window.addEventListener('scroll',handleScroll)
  },[])
  const navbarLinksT = useTranslations('Navbar.Links')
  const navbarAuthT = useTranslations('Navbar.Auth')
  const linkKeys = ['Home','About_us','Calculator']
  const authKeys = ['Sign_In','Try']
  
  return (
        <nav className={` 
        ${isTopOfPage ? 'bg-transparent' : 'bg-white'}
        transition-colors duration-200
        max-w-[1840px] mx-auto py-[30px] xl:px-[75px] lg:px-[60px] md:px-[50px] sm:px-[40px] px-[20px]
        w-full left-0 top-0 right-0  flex justify-between items-center fixed z-[50]`}>
            <div className='lg:ml-0 ml-auto'>
              <Logo/>
            </div>
            { isAboveLargeScreens ?
              <React.Fragment>
                  <BigScreenNavLinks data={linkKeys.map(key=>navbarLinksT(key))}/>
                  <AuthButtons data={authKeys.map(key=>navbarAuthT(key))} />
              </React.Fragment>
              :
              <SmallScreenNavMenu/>
            }
        </nav>
  )
}
