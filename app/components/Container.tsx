import React from 'react'

interface Props{
    children:React.ReactNode
}

export const Container = ({children}:Props) => {
  return (
    <section className='max-w-[1840px] mx-auto py-[30px] lg:px-[75px] md:px-[60px] sm:px-[40px] px-[20px]'>
        {children}
    </section>
  )
}
