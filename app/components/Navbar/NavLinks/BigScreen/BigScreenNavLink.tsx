"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface Props {
  label: string;
  to: string;
}

export const BigScreenNavLink = ({ label, to }: Props) => {
  const pathname = usePathname();

  return (
  <Link href={to} className={`
    ${pathname === to ? 'text-darkpurple' : 'text-[#73779F]'}
    font-semibold lg:text-[16px] text-[14px] leading-[100%]
  `}>
    {label}
  </Link>
  )
};
