'use client'
import React, { useEffect, useRef, useState } from 'react'
import Icon from '../Icon'
import WebsiteIcons from '@/public/svg/IconsObject'
import { Values } from '../Calculator/Calculator'


interface Props{
    label?:string
    type:keyof Values,
    content:{
        label:string,
        point:any,
        feedback:string
    }[],
    value?:string,
    setValue:(value:string,points:number,type:keyof Values,feedback:string)=>void,
    placeholder?:string
}

export const MainDropdown = ({
    label,
    type,
    content,
    value,
    setValue,
    placeholder
}:Props) => {
    const [isOpen,setIsOpen] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(()=>{
        if(isOpen){
            const handleOutsideClick = (e:MouseEvent) =>{
                if(ref.current && !ref.current.contains(e.target as Node)){
                    setIsOpen(false)
                }
            }

            window.addEventListener('click',handleOutsideClick)

            return () => window.removeEventListener('click',handleOutsideClick)
        }
    },[isOpen])

  return (
    <div className='flex flex-col gap-[10px] items-center w-full'>
        <h4 className='text-lightPurple 2xl:text-[16px] xl:text-[15px] md:text-[14px] sm:text-[13px] text-[16px] md:text-center text-start'>{label}</h4>
        <div className='relative flex-grow w-full'  ref={ref}>
            <div className='py-2 px-5 border-[1px] border-solid border-lightPurple
             flex gap-[30px] justify-between cursor-pointer w-full
            '
            onClick={()=>{setIsOpen(prev=>!prev)}}
            >
                <p className='select-none text-gray-500 '>
                    {value || placeholder || content[0].label}
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
                <div className='w-full absolute top-[42px] bg-white py-2 px-5 z-10'>
                    {
                        content.map(cont=>(
                            <h1 className='text-lightPurple text-[14px] cursor-pointer'
                            onClick={()=>{
                                if(value !== cont.label){
                                    setValue(cont.label,cont.point,type,cont.feedback)
                                    setIsOpen(false)
                                }
                            }}
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
