// import Image from 'next/image'
import React from 'react'

export default function SectionAdvice() {
  return (
    <section className='articles-main__section'>
      <div className='articles-main__container'>
          <div className='articles-main__block'>
              <h2 className='articles-main__title font-bold' >Советы по разработке сайтов</h2>
              <a className='articles-main__link' href="" >Перейти к советам </a>
          </div>
          {/* <Image className="articles-main__image"  src='/images/coding.png' width="60" height='00'  alt='Рисованное изображение компьютера с кодом.'/> */}
      </div>
    </section>
  )
}
