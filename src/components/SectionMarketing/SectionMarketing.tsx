import React from 'react'

export default function SectionMarketing() {
  return (
    <section className='marketing__section section'>
      <h2 className='marketing__heading font-bold'>Сайт от нашей студии - рабочий <span className="gradient bg-gradient-to-r from-[#e23b3b] via-[#31b3ec] to-[#6668eb] inline-block text-transparent bg-clip-text font-bold
"> инструмент улучшения ваших продаж!</span></h2>
      <div className="marketing__block">
          <ul className='marketing__list'>
              <li className='marketing__item font-bold'><span className="gradient-blue gradient-blue bg-gradient-to-r from-[#31b3ec] to-[#524add] inline-block text-transparent bg-clip-text font-bold
">Снимаем тревоги </span> холодных потенциальных клиентов</li>
              <div className='marketing__separator'></div>
              <li className='marketing__item font-bold'><span className="gradient-blue gradient-blue bg-gradient-to-r from-[#31b3ec] to-[#524add] inline-block text-transparent bg-clip-text font-bold
">Вырабатываем доверие </span> к вашему бренду и продукту</li>
              <div className='marketing__separator'></div>
              <li className='marketing__item font-bold'><span className="gradient-blue gradient-blue bg-gradient-to-r from-[#31b3ec] to-[#524add] inline-block text-transparent bg-clip-text font-bold
">Обеспечиваем логистику  </span> эффективного взаимодействия клиента с сайтом</li>
          </ul>
          <span className='marketing__info font-bold'>Согласно статистике, посетитель принимает решение за <span className="gradient bg-gradient-to-r from-[#e23b3b] via-[#31b3ec] to-[#6668eb] inline-block text-transparent bg-clip-text font-bold
"> 30 секунд</span>.<br/>Либо сайт компании вызывает доверие, либо нет. Тогда клиент уходит к конкурентам.</span>
      </div>
    </section>
  )
}
