import React from 'react'
import Link from 'next/link'
// import Image from 'next/image'

export default function SectionAbout() : JSX.Element {
  return (
    <section id='about-anchor' className='flex flex-col p-0 min-h-[700px] sm:min-h-[750px] sm:mx-o sm:my-auto sm:bg-auto sm:bg-right-top sm:bg-no-repeat'>
            <h2 className='min-w-[200px] w-auto max-w-[100%] p-0 text-[50px] text-[#ccdae7] text-center m-auto mt-[100px] sm:text-[80px] sm:w-[85%] font-bold' >Продающие сайты<br className='xl:hidden'/><span className="gradient bg-gradient-to-r from-[#e23b3b] via-[#31b3ec] to-[#6668eb] inline-block text-transparent bg-clip-text"> для победителей</span></h2>
            <div className='p-0 mx-auto mt-6 sm:mt-12 sm:mb-12'>
                <div className='w-80 p-0 text-base text-[#e5e7eb] text-center'>Разрабатываем все виды сайтов для бизнеса. Адекватно общаемся на понятном вам языке</div>
            </div>
            <Link href='#about-anchor' >
                <div className='w-52 h-14 border-none bg-[#0052cc] text-[#fff] text-xl flex justify-center content-center items-center rounded-3xl m-0 mx-auto ' >Подробнее</div>
            </Link>
            {/* <Image className='flex w-[90%] my-[40px] mx-auto sm:my-[30px]' src='/images/Frame-1.png'  width='800' height='600' alt='Изображение ноутбука.' /> */}
        </section>
  )
}
