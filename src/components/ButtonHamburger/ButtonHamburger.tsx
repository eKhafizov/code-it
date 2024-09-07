'use client'

import React from 'react'

type MenuType = {
  isMobileOpen: boolean;
  setIsMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ButtonHamburger({setIsMobileOpen, isMobileOpen} : MenuType) {

  const handleMenu = () => {
    console.log('isOpen in function ', isMobileOpen)
    isMobileOpen && setIsMobileOpen(false);
    !isMobileOpen && setIsMobileOpen(true)
  }

  return (
    <button
      className='w-[40px] h-[40px] rounded-lg border-0 bg-[#0052cc] p-0 flex flex-col gap-[5px] justify-center content-center items-center sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden'
      onClick={handleMenu}
    >
      <span className='w-[25px] h-[2px] rounded-lg bg-[#ccdae7]'></span>
      <span className='w-[25px] h-[2px] rounded-lg bg-[#ccdae7]'></span>
      <span className='w-[25px] h-[2px] rounded-lg bg-[#ccdae7]'></span>
    </button>
  )
}
