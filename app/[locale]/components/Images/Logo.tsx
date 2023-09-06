'use client'

import Image from "next/image"
import Link from "next/link"

export const Logo = () => {
  return (
    <Link href={'/'}>
        <Image
            src={'/Images/Logo/logo-no-background.webp'}
            alt="Logo"
            width={400}
            height={110}
            
            className="sm:w-[12rem] w-[10rem]"
            />
      </Link>
  )
}
