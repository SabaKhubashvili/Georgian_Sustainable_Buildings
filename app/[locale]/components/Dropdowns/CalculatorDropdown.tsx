'use client'
import React, { useState } from 'react'
import Icon from '../Icon'
import WebsiteIcons from '@/public/svg/IconsObject'
import { Values } from '../Calculator/Calculator'


interface Props{
    label?:string
    type:keyof Values,
    content:{
        label:string,
        point:number
    }[],
    value?:string,
    setValue:(value:string,points:number,type:keyof Values)=>void,
}

export const MainDropdown = ({
    label,
    type,
    content,
    value,
    setValue,
}:Props) => {
    const [isOpen,setIsOpen] = useState(false)


  return (
    <div className='flex sm:flex-row flex-col gap-[10px] items-center w-full'>
        <h4 className='text-lightPurple 2xl:text-[20px] md:text-[16px] sm:text-[15px] text-[13px]'>{label}</h4>
        <div className='relative flex-grow'>
            <div className='py-2 px-5 border-[1px] border-solid border-lightPurple
             flex gap-[30px] justify-between cursor-pointer
            '
            onClick={()=>{setIsOpen(prev=>!prev)}}
            >
                <p className=' select-none'>
                    {value || content[0].label}
                </p>
                <div className={`
                ${isOpen && ' rotate-180'}
                w-[20px] flex items-center transition-transform duration-200`}>
                    <Icon
                        svg={WebsiteIcons['Dropdown_Down']}
                    />
                </div>
            </div>
            {
                isOpen && 
                <div className='w-full absolute top-[42px] bg-white py-2 px-5'>
                    {
                        content.map(cont=>(
                            <h1 className='text-lightPurple text-[14px] cursor-pointer'
                            onClick={()=>{setValue(cont.label,cont.point,type)}}
                            key={cont.label}
                            >{cont.label}</h1>
                        ))
                    }
                </div>
            }
        </div>
    </div>
  )
}
