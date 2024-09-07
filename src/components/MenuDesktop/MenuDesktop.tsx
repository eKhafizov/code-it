import React from 'react'
import Link from 'next/link'

export default function MenuDesktop() {

  return (
    <ul className='sm:text-base sm:flex sm:justify-between sm:w-[300px] sm:p-0 w-[100%] p-0 hidden flex-row content-center'>
      <li className='text-lg no-underline text-[#ccdae7]'>
        <Link href='https://new-pobeda.ru/#about-anchor' className='no-underline text-[#a7b5c4]'>О нас</Link>
      </li>
      <li className='text-lg no-underline text-[#ccdae7]'>
        <a href='https://new-pobeda.ru/#contacts-anchor' className='no-underline text-[#a7b5c4]'>Контакты</a>
      </li>
      <li className='text-lg no-underline text-[#ccdae7]'>
        <a href='https://new-pobeda.ru/#prices-anchor' className='no-underline text-[#a7b5c4]'>Цены</a>
      </li>
      <li className='text-lg no-underline text-[#ccdae7]'>
        <a href="<?php echo get_permalink(101); ?>" className='no-underline text-[#a7b5c4]'>Статьи</a>
      </li>
    </ul>
  )
}
