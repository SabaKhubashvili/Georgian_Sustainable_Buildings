"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface Props {
  label: string;
  to: string;
  icon:React.ReactElement
}

export const SmallScreenNavLink = ({ label, to,icon }: Props) => {
  const pathname = usePathname();

  return (
  <Link href={to} className={`
    ${pathname === to ? 'text-darkpurple bg-[#EDEEF3]' : 'text-[#73779F]'}
    font-semibold md:text-[16px] text-[14px] leading-[100%] flex gap-[10px] p-[5px] w-full rounded-[8px]
  `}>
    {icon}
    <p>
      {label}
    </p>
  </Link>
  )
};
