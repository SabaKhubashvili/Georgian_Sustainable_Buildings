'use client'

import React from 'react'
import { Container } from '../Container'
import { Logo } from '../Images/Logo'
import { BigScreenNavLinks } from './NavLinks'
import { AuthButtons } from './AuthButtons/AuthButtons'
import useMediaQuery from '@/app/hooks/UseMediaQuery'
import { SmallScreenNavMenu } from './SmallScreenNavMenu/SmallScreenNavMenu'

export const Navbar = () => {
  const isAboveLargeScreens = useMediaQuery('(min-width:1024px)')

  return (
    <Container>
        <nav className='w-full flex justify-between items-center'>
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
    </Container>
  )
}
