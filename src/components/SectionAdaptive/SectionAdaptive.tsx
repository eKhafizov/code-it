// import Image from 'next/image'
import React from 'react'

export default function SectionAdaptive() {
  return (
    <section className='adaptive__section section'>      
            <div className='adaptive__container'>
                <div className='adaptive__left'>
                    <h2 className='adaptive__heading font-bold'>Качественная мобильная и планшетная версии сайта <span className="gradient-blue bg-gradient-to-r from-[#31b3ec] to-[#524add] inline-block text-transparent bg-clip-text "> в подарок</span></h2>
                    {/* <Image className="adaptive__image__left"  src='/images/articles/user-interface2.png' width="60" height='50' alt='Рисунок с изображением смартфона.'/> */}
                </div>
                <div className="adaptive__block">
                    {/* <Image className="adaptive__image__right"  src='/images/articles/user-interface.png' width="60" height='50' alt='Рисунок с изображением смартфона.'/> */}
                    <ul className='adaptive__list'>
                        <li className='adaptive__item'>По статистике 70% людей посещают сайты с мобильного телефона. Это <span className="adaptive__accent font-bold"> важный сегмент</span> покупателей, который нельзя потерять</li>
                        <li><div className="adaptive__separator"></div></li>
                        <li className='adaptive__item adaptive__item--expensive'>Сделать качественную функциональную и красивую версию для смартфона - не так и просто. Многие студии запрашивают за каждую версию <span className="adaptive__accent font-bold"> огромные деньги</span></li>
                        <li><div className="adaptive__separator"></div></li>
                        <li className='adaptive__item adaptive__item--gift'>Мы же сделаем вам <span className="adaptive__accent font-bold"> в подарок </span>не просто самостоятельную мобильную версию, но и версию для планшетов <br/><span className="adaptive__bold font-bold">Три сайта по цене одного</span></li>
                    </ul>
                </div>      
            </div>
        </section>
  )
}
