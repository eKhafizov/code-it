import React from 'react'
// import Image from 'next/image'

export default function SectionControl() : JSX.Element {

  return (
    <section className='control__section section' >
      <div className='control__block' >
        <div className='control__container'>
          <h2 className='control__heading font-bold'>Вы полностью<span className="control__accent font-bold"> контролируете </span> ситуацию!</h2>
          <ul className='control__list'>
            <li className='control__item'><span className="gradient control__number font-bold">1</span><p className="control__text">Работаем официально c договором и гарантиями</p></li>
            <li className='control__item'>
              <span className="gradient-blue control__number bg-gradient-to-r from-[#31b3ec] to-[#524add] inline-block text-transparent bg-clip-text font-bold">2</span>
            </li>
            <li className='control__item'><span className="gradient-red control__number bg-gradient-to-r from-[#f8720b] to-[#fbd12a] inline-block text-transparent bg-clip-text font-bold">3</span><p className="control__text">Полный и подробный отчет перед вами после каждого этапа</p></li>
            <li className='control__item'><span className="gradient-green control__number bg-gradient-to-r from-[#f0ad68] to-[#26d5bf] inline-block text-transparent bg-clip-text font-bold">4</span><p className="control__text">Берем оплату после выполнения работ по каждому этапу</p></li>
          </ul>
        </div>
        {/* <img className="control__image"  src='/images/control2.webp' width="500"  height='500' alt='Фотография улыбающейся молодой девушки с компьютером.' /> */}
      </div>  
      </section>        
  )
}
