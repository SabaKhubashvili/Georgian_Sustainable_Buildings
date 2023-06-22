'use client'
import {useState,useContext} from 'react'
import { GeorgiaIcon, LanguageIcon, UsaIcon } from "@/public/svg/icons"
import Link from 'next-intl/link'
import { NavContext } from '../../providers/NavbarContextProvider'


export const LanguageDropdown = () => {
    const [isToggled,setIsToggled] = useState<boolean>(false)
    const data = useContext(NavContext)

  return (
    <div className="relative">
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
                        <p>{data.languages.ge}</p>
                    </Link>
                    <Link href={'/'} locale="en" className='flex gap-[4px]'>
                        <p className='w-[1.3rem]'>
                            <UsaIcon/>
                        </p>
                        <p>{data.languages.en}</p>
                    </Link>
                </div>
            )
        }
    </div>
  )
}
