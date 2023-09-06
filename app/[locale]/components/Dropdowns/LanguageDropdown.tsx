'use client'

import {useState,useContext,useEffect,useRef} from 'react'
import { GeorgiaIcon, LanguageIcon, UsaIcon } from "@/public/svg/icons"
import Link from 'next-intl/link'
import { NavContext } from '../../providers/NavbarContextProvider'
import { useTranslations } from 'next-intl'


export const LanguageDropdown = () => {
    const [isToggled,setIsToggled] = useState<boolean>(false)
    const dropdownRef = useRef<HTMLDivElement>(null)
    const languageT = useTranslations('Navbar.Languages')
    
    useEffect(()=>{
        if(isToggled){
            const handleOutsideClick = (event:MouseEvent)=>{
                if(dropdownRef.current && !dropdownRef.current.contains(event.target as Node)){
                    setIsToggled(false)
                }
            }
            window.addEventListener('click',handleOutsideClick)
            return ()=> window.removeEventListener('click',handleOutsideClick)
        }
    },[isToggled])

  return (
    <div className="relative" ref={dropdownRef}>
        <div className="w-6 cursor-pointer" onClick={()=>setIsToggled(prev=>!prev)}>
            <LanguageIcon/>
        </div>
        {
            isToggled && (
                <div className='absolute right-0 bg-white p-4'>
                    <Link href={'/'} locale="ge" className='flex gap-[4px]'>
                        <p className='w-[1.3rem]'>
                            <GeorgiaIcon/>
                        </p>
                        <p>{languageT('ge')}</p>
                    </Link>
                    <Link href={'/'} locale="en" className='flex gap-[4px]'>
                        <p className='w-[1.3rem]'>
                            <UsaIcon/>
                        </p>
                        <p>{languageT('en')}</p>
                    </Link>
                </div>
            )
        }
    </div>
  )
}
