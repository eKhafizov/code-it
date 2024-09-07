import React from 'react'

export default function SectionPrices() {
  return (
    <section id='prices-anchor' className='prices__section'>
    <ul className='prices__list'>
         <li className='prices__item'>
             <div  className='prices__container'>
                 <p className='prices__description font-bold'>Сайты<br/><span className="gradient-green bg-gradient-to-r from-[#f0ad68] to-[#26d5bf] inline-block text-transparent bg-clip-text font-bold
">лендинги</span><br/>от 50 000 руб.</p>
                 <p className='prices__text'>Срок разработки сайта под ключ 7-14 дней в зависимости от функционала и дизайна сайта.</p>
             </div>
         </li>
         <li className='prices__item prices__item--separator'><div  className='prices__separator'></div></li>
         <li className='prices__item'>
             <div  className='prices__container'>
                 <p className='prices__description font-bold'>Сайты<br/><span className="gradient bg-gradient-to-r from-[#e23b3b] via-[#31b3ec] to-[#6668eb] inline-block text-transparent bg-clip-text font-bold
">интернет-магазины</span><br/>от 70 000 руб.</p>
                 <p className='prices__text'>Срок разработки сайта под ключ 15-30 дней в зависимости от функционала и дизайна сайта.</p>
             </div>
         </li>
     </ul>
  </section>
  )
}
