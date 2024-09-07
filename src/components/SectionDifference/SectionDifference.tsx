import React from 'react'

export default function SectionDifference() : JSX.Element {
  return (
    <section className='p-0 flex flex-col sm:flex-row sm:gap-[50px] gap-[100px] m-0 mx-auto items-center min-h-[300px] '>
      <div className='w-[300px] p-0 pl-[20px] m-0 mb-[55px] mt-[100px]sm:w-[550px] sm:mb-[100px] sm:mt-[80px]'>
          <span className='text-[#ccdae7] text-start font-bold p-0 text-4xl'>Сегодня уже <span className="gradient bg-gradient-to-r from-[#e23b3b] via-[#31b3ec] to-[#6668eb] inline-block text-transparent bg-clip-text"> недостаточно </span> иметь просто красивый сайт.</span><span className='text-4xl text-[#ccdae7] pr-0 pl-[10px] font-bold mb-[26px]'>Вам нужен сайт, который будет <span className="gradient-green bg-gradient-to-r from-[#f0ad68] to-[#26d5bf] inline-block text-transparent bg-clip-text"> продавать  </span>ваш бренд, ваш продукт, ваши услуги!</span>
      </div>
      <ul className='p-0 sm:p-[10px] m-0 mx-auto w-[300px] sm:w-[350px] pt-[30px] pb-[30px] flex flex-col items-center rounded-[10px]'>
          <li className='text-[16px] py-[10px] px-[30px] min-h-[10px] flex text-[#a7b5c4] bg-[#171e25] w-[220px] pl-[50px] pr-[10px] rounded-[15px] items-center content-center bg-[url("/images/internet1.png")] bg-20 bg-no-repeat bg-left-center' 
          //background-position: left 15px center; 
          >Сделаем вам удобный и функциональный сайт
          </li>
          <li className='text-[16px] py-[10px] px-[30px] min-h-[10px] flex text-[#a7b5c4] bg-[#171e25] w-[220px] pl-[50px] pr-[10px] rounded-[15px] items-center content-center bg-[url("/images/internet1.png")] bg-20 bg-no-repeat bg-left-center' >Выгодно отличим ваш сайт от конкурентов</li>
          <li className='text-[16px] py-[10px] px-[30px] min-h-[10px] flex text-[#a7b5c4] bg-[#171e25] w-[220px] pl-[50px] pr-[10px] rounded-[15px] items-center content-center bg-[url("/images/internet1.png")] bg-20 bg-no-repeat bg-left-center' >Применим эффективные маркетинговые техники</li>
      </ul>
    </section>
  )
}
