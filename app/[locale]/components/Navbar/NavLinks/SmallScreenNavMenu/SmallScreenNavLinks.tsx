import React from 'react'
import { SmallScreenNavLink } from './SmallScreenNavLink'
import {BiHomeAlt} from 'react-icons/bi'
import {SiReadthedocs} from 'react-icons/si'
import {BsFillCalculatorFill} from 'react-icons/bs'

export const SmallScreenNavLinks = () => {
  return (
    <div className='flex flex-col gap-[10px] w-full'>
        <SmallScreenNavLink icon={<BiHomeAlt size={20}/>} label='Home' to='/' />
        {/* <SmallScreenNavLink icon={<SiReadthedocs size={20} />} label='About' to='/about' /> */}
        <SmallScreenNavLink icon={<BsFillCalculatorFill size={20} />} label='Calculator' to='/calculator' />
    </div>
  )
}
