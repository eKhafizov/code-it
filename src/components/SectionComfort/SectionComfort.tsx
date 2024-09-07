import React from 'react'
// import Image from 'next/image'

export default function SectionComfort() {
  return (
    <section className='w-[300px] p-0 min-h-[800px] mb-[55px] rounded-3xl flex flex-col sm:flex-row sm:w-[90%] sm:h-auto sm:min-h-[500px] sm:mx-auto sm:my-[100px] sm:mb-[100px] bg-[#171e25] overflow-hidden ' >
      {/* <img className='w-[300px] min-h-[500px] p-0 h-[200px] sm:h-auto sm:w-[50%] xl:w-[500px] object-cover '
      src='/images/laptop-typing_MOK9SCVSIP.webp'
      width="500"
      height='200'
      alt='Изображение девушки, смотрящей в ноутбук.'/> */}
      <div className='w-[300px] p-0 sm:w-[40%] sm:h-auto flex flex-col sm:px-[40px] sm:py-[10px]'>
          <h2 className='text-[#ccdae7] text-4xl ml-[20px] sm:ml-0 font-bold' >С нами <span className="gradient-blue bg-gradient-to-r from-[#31b3ec] to-[#524add] inline-block text-transparent bg-clip-text"> легко и приятно </span> работать! </h2>
          <ul className='w-[95%] text-base px-[20px] py-0 gap-[10px] flex flex-col m-0 sm:p-0'>
              <li className='w-[95%] p-0 text-base sm:w-[400px] sm:text-lg text-[#a7b5c4]'>
                  Мы разговариваем на человеческом языке без бравирования техническими терминами
              </li>
              <li className='w-[100px] h-[1px] bg-["linear-gradient(351deg, #31b3ec 23%, #524add 87%)"] border-0 flex justify-center items-center content-center m-0 my-[5px]'></li>
              <li className='w-[95%] p-0 text-base sm:w-[400px] sm:text-lg text-[#a7b5c4]'>Все подробно и понятно рассказываем, объясняем и предоставляем варианты решений на выбор
              </li>
              <li className='w-[100px] h-[1px] bg-["linear-gradient(351deg, #31b3ec 23%, #524add 87%)"] border-0 flex justify-center items-center content-center m-0 my-[5px]'></li>
              <li className='w-[95%] p-0 text-base sm:w-[400px] sm:text-lg text-[#a7b5c4]'>
                  Мы всегда рядом. Всегда на связи. Нас не нужно искать и ждать нашего ответа часами
              </li>
          </ul>
          <a href='#contacts-anchor' ><div className='w-[240px]h-[60px] border-0 bg-[#0052cc] text-[#fff] text-xl flex justify-center items-center content-center rounded-[30px] mx-auto my-[30px] '>Связаться с нами</div></a>
      </div>
    </section>
  )
}
