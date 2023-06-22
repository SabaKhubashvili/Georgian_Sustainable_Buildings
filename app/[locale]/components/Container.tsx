import React from 'react'

interface Props{
    children:React.ReactNode
}

export const Container = ({children}:Props) => {
  return (
    <section className='max-w-[1840px] mx-auto py-[30px] xl:px-[75px]  lg:px-[60px] md:px-[50px] sm:px-[40px] px-[20px] relative'>
        {children}
    </section>
  )
}
