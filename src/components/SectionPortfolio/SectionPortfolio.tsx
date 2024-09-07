// import Image from 'next/image'
import React from 'react'

export default function SectionPortfolio() {
  return (
    <section className='portfolio__section' >
            <div className='portfolio__container' >
                <h2 className='portfolio__title font-bold'>Наши работы</h2>
                <p className='portfolio__description'>Мы <span className='gradient portfolio__accent bg-gradient-to-r from-[#e23b3b] via-[#31b3ec] to-[#6668eb] inline-block text-transparent bg-clip-text font-bold
'>создаем сайты</span> разной сложности: от простых визиток до сложных проектов.</p>
                <ul className='portfolio__list'>
                    <li className='portfolio__item'>
                        <a className='portfolio__link'>
                            {/* <img className='portfolio__image' src='/images/portfolio/portfolio2.webp'  alt='Скриншот экрана с изображением веб-сайта, который сделала наша студия.'height='500' width='200' /> */}
                        </a>
                    </li>
                    <li className='portfolio__separator-container'><div className='portfolio__separator'></div></li>
                    <li className='portfolio__item'>
                        <a className='portfolio__link'>
                            {/* <img className='portfolio__image'  src='/images/portfolio/portfolio0.webp'  alt='Скриншот экрана с изображением веб-сайта, который сделала наша студия.' height='500' width='200'  /> */}
                        </a>
                    </li>
                    <li className='portfolio__separator-container'><div className='portfolio__separator'></div></li>
                    <li className='portfolio__item'>
                        <a className='portfolio__link'>
                            {/* <img className='portfolio__image'  src='/images/portfolio/portfolio4.webp'  alt='Скриншот экрана с изображением веб-сайта, который сделала наша студия.' height='500' width='200'  /> */}
                        </a>
                    </li>
                    <li className='portfolio__separator-container'><div className='portfolio__separator'></div></li>
                    <li className='portfolio__item'>
                        <a className='portfolio__link'>
                            {/* <img className='portfolio__image' src='/images/portfolio/portfolio9.webp'  alt='Скриншот экрана с изображением веб-сайта, который сделала наша студия.' height='500' width='200'  /> */}
                        </a>
                    </li>
                    <li className='portfolio__separator-container'><div className='portfolio__separator'></div></li>
                    <li className='portfolio__item'>
                        <a className='portfolio__link'>
                            {/* <img className='portfolio__image'  src='/images/portfolio/portfolio3.webp'  alt='Скриншот экрана с изображением веб-сайта, который сделала наша студия.' height='500' width='200' /> */}
                        </a>
                    </li>
                    <li className='portfolio__separator-container'><div className='portfolio__separator'></div></li>
                    <li className='portfolio__item'>
                        <a className='portfolio__link'>
                            {/* <img className='portfolio__image'  src='/images/portfolio/portfolio10.webp'  alt='Скриншот экрана с изображением веб-сайта, который сделала наша студия.' height='500' width='200' /> */}
                        </a>
                    </li>
                </ul>
                <p className='portfolio__slogan'>Мы делаем удобные сайты. Вы сами сможете <span className='gradient-blue gradient-blue bg-gradient-to-r from-[#31b3ec] to-[#524add] inline-block text-transparent bg-clip-text
 font-bold'>легко редактировать</span>сайт. Всему научим и все подробно объясним!</p>
            </div>
        </section>
  )
}
