import React from 'react'

export default function MenuMobile() : JSX.Element {

  return (
    <ul className='text-base list-none justify-between w-[250px] p-0 sm:hidden flex flex-col content-center absolute -top-[10px] right-0 rounded-tl-[20px] rounded-tr-0 rounded-bl-[20px] rounded-br-0 leading-8 bg-[#0052cc] pb-[10px]'>
      <li className='text-lg text-[#ccdae7] flex justify-center'>
        <a href='https://new-pobeda.ru/#about-anchor' className='text-lg text-[#ccdae7] no-underline'>О нас</a>
      </li>
      <li className='text-lg text-[#ccdae7] flex justify-center'>
        <a href='https://new-pobeda.ru/#contacts-anchor' className='text-lg text-[#ccdae7] no-underline'>Контакты</a>
      </li>
      <li className='text-lg text-[#ccdae7] flex justify-center'>
        <a href='https://new-pobeda.ru/#prices-anchor' className='text-lg text-[#ccdae7] no-underline'>Цены</a>
      </li>
      <li className='text-lg text-[#ccdae7] flex justify-center'>
        <a href="<?php echo get_permalink(101); ?>" className='text-lg text-[#ccdae7] no-underline'>Статьи</a>
      </li>
    </ul>
  )
}
