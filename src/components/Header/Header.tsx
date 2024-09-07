'use client'
import React, { useState } from 'react'
import Logo from '../Logo/Logo'
import MenuDesktop from '../MenuDesktop/MenuDesktop'
import MenuMobile from '../MenuMobile/MenuMobile'
import ButtonHamburger from '../ButtonHamburger/ButtonHamburger'



export default function Header() : JSX.Element {

  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);

  return (
    <header>
      <nav className='sm:flex sm:justify-between sm:py-[15px] sm:px-[50px] flex content-center items-center p-2'>
        <div id='desktopMenu' className='sm:flex sm:justify-between sm:align-middle sm:w-[100%] my-0 mx-auto w-[96%]'>
          <Logo />
          <MenuDesktop />
        </div> 
        <ButtonHamburger isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen} />
      </nav>
      <div id='mobileMenu' className='flex relative sm:hidden' >
        {isMobileOpen && (<MenuMobile />)}
      </div>
    </header>
  )
}