import React from 'react'

export default function SectionBenefits() : JSX.Element {
  return (
    <section
      className="bg-no-repeat   flex justify-center items-center section">
      <ul
        className="bg-gray-900 flex justify-center rounded-3xl w-96  p-0">
        <li className="flex flex-col justify-center items-center">
          <div
            className="flex flex-col justify-center items-center p-2.5 pb-2.5 w-72">
            <p
              className="text-4xl font-bold text-center text-slate-300 mb-1">
              Делаем <span className="gradient-green bg-gradient-to-r from-[#f0ad68] to-[#26d5bf] inline-block text-transparent bg-clip-text"> удобные
              </span>сайты</p>
            <p className="text-lg text-center mt-0 mb-7 w-60 p-2.5">Нашими
              сайтами приятно и удобно
              пользоваться: все на своих местах и всегда под рукой</p>
          </div>
        </li>
        <li className="flex flex-col justify-center items-center">
          <div className="h-48 w-0 flex items-center justify-center">
          </div>
        </li>
        <li className="flex flex-col justify-center items-center">
          <div
            className="flex flex-col justify-center items-center p-2.5 pb-2.5 w-72">
            <p
              className="text-4xl font-bold text-center text-slate-300 mb-1">
              Делаем <span className="gradient bg-gradient-to-r from-[#e23b3b] via-[#31b3ec] to-[#6668eb] inline-block text-transparent bg-clip-text"> продающие </span> сайты
            </p>
            <p className="text-lg text-center mt-0 mb-7 w-60 p-2.5">Ваши
              клиенты останутся на сайте
              и совершат целевое действие, а не убегут к конкурентам</p>
          </div>
        </li>
        <li className="flex flex-col justify-center items-center">
          <div className="h-48 w-0 flex items-center justify-center">
          </div>
        </li>
        <li className="flex flex-col justify-center items-center">
          <div
            className="flex flex-col justify-center items-center p-2.5 pb-2.5 w-72">
            <p
              className="text-4xl font-bold text-center text-slate-300 mb-1">
              Делаем <span className="gradient-blue bg-gradient-to-r from-[#31b3ec] to-[#524add] inline-block text-transparent bg-clip-text"> красивые
              </span>сайты</p>
            <p className="text-lg text-center mt-0 mb-7 w-60 p-2.5">Сайт -
              лицо вашего бизнеса. Вы
              точно будете гордиться тем, как выглядит ваш сайт</p>
          </div>
        </li>
      </ul>
    </section>
  )
}
