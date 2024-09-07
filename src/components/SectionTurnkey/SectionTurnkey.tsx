// import Image from 'next/image'
import React from 'react'

export default function SectionTurnkey() {
  return (
    <section className='turnkey__section section'>
    {/* <img className='turnkey__image' src='/images/turnkey_image_3.webp'  width="500" height='500' alt='Фотография довольной девушки, которой программист показывает сайт с готовой работой.' /> */}
    <div className='turnkey__info'>
        <h2 className='turnkey__heading font-bold' >Сделаем вам классный сайт <span className="gradient bg-gradient-to-r from-[#e23b3b] via-[#31b3ec] to-[#6668eb] inline-block text-transparent bg-clip-text
"> под ключ </span></h2>
        <ul className='turnkey__list'>
            <li className='turnkey__item'>
                Вам не нужно ломать голову над нюансами дизайна, интерфейсов и программирования.
            </li>
            <li className='turnkey__item-separator'></li>
            <li className='turnkey__item'>Возьмем на себя весь процесс разработки, чтобы вы смогли<span className='turnkey__accent'> сфокусироваться на главном</span> - на вашем бизнесе.
            </li>
            <li className='turnkey__item-separator'></li>
            <li className='turnkey__item'>
                Сделаем для вас удобный сайт, который будет легко обслуживать даже человеку без специальных знаний!
            </li>
        </ul>
        <a href='#contacts-anchor' ><div className="turnkey__button">Связаться с нами</div></a>
    </div>
</section>
  )
}
