import React from 'react'
// import Image from 'next/image'

export default function SectionExpertise() {
  return (
    <section className='py-0 sm:px-[50px] min-h-[400px] sm:pl-[50px] my-[50px] mx-auto mt-[40px] sm:mt-[80px]'>
      {/* <Image
        className='pl-[20px] mb-[15px] sm:pl-0 sm:mb-[10px]'
        src='/images/logo_black_png.png'
        width="120"
        height='100'
        alt='Изображение логотипа компании Новая Победа.'
      /> */}
      <h2 className='w-[300px] p-0 text-4xl m-0 ml-[20px] text-[#ccdae7] sm:w-[580px] text-start sm:text-5xl font-bold' >Берем на себя<span className="gradient-blue gradient-blue bg-gradient-to-r from-[#31b3ec] to-[#524add] inline-block text-transparent bg-clip-text
"> все заботы </span> по дизайну, разработке и менеджменту вашего сайта</h2>
      <span className='text-[#a7b5c4] w-[300px] p-0 ml-[20px] mb-[20px] sm:w-[500px] text-start text-lg sm:pl-0 mt-[10px] sm:mb-[60px] flex'>Чтобы вы смогли уделять больше времени своему бизнесу, продукту и достижению целей.</span>

      <div className=' flex flex-col m-0 mt-[50px] p-0 w-[300px] sm:my-[100px] sm:w-[95%] sm:flex sm:mx-auto items-center sm:flex-row min-h-[450px] sm:mt-[120px] sm:gap-[80px]' >
          <div>
            <ul className='items-center justify-center gap-[15px] flex flex-col m-0 p-0 list-none'>
              <li className='w-[250px] h-[45px] p-0 flex justify-center content-center items-center uppercase text-center font-bold text-[#ccdae7] rounded-md bg-[#222d3b] sm:p-[24px] sm:w-[272px] shadow-[ 0 0 24px -12px #1b2435, inset 0 0 0 1px #313c4d]'>Лендинги</li>
              <li className='w-[250px] h-[45px] p-0 flex justify-center content-center items-center uppercase text-center font-bold text-[#ccdae7] rounded-md bg-[#222d3b] sm:p-[24px] sm:w-[272px] shadow-[ 0 0 24px -12px #1b2435, inset 0 0 0 1px #313c4d]'>Интернет-магазины</li>
              <li className='w-[250px] h-[45px] p-0 flex justify-center content-center items-center uppercase text-center font-bold text-[#ccdae7] rounded-md bg-[#222d3b] sm:p-[24px] sm:w-[272px] shadow-[ 0 0 24px -12px #1b2435, inset 0 0 0 1px #313c4d]'>Сайты-визитки</li>
            </ul>
          </div>
          <div className='bg-background-indigo bg-right-center bg-no-repeat rounded-[10px] w-[290px] h-[250px] p-0 mt-0 sm:w-[500px] sm:h-[350px] shadow-[1px 1px 5px #FFDDE1]'
          >
              {/* <img 
                className='expertise__visual-img origin-center rotate-15'  
                src='/images/front-indigo.webp'
                width="500"
                height='500'
                alt='Изображение мультимедиа-экранов.'
              /> */}
          </div>
      </div>

    </section>
  )
}
