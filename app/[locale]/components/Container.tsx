import React from 'react'

interface Props{
    children:React.ReactNode
    rightSpace?:boolean
}

export const Container = ({children,rightSpace}:Props) => {
  return (
    <section className={`max-w-[1840px] mx-auto py-[30px]   relative
    ${rightSpace ? ' lg:pl-[60px] md:pl-[50px] sm:pl-[40px] pl-[20px]' : ' lg:px-[60px] md:px-[50px] sm:px-[40px] px-[20px]'}
    `}>
        {children}
    </section>
  )
}
