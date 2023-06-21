import React from 'react'
import { TransparentButton } from '../../Buttons'

export const AuthButtons = () => {
  return (
    <div className='flex items-center gap-[20px]'>
        <h4 className='text-lightPurple font-medium md:text-[16px] text-[14px]'>
            Sign In
        </h4>
        <TransparentButton label={'Try it for free'} onClick={()=>{}} color='blue' />
    </div>
  )
}
