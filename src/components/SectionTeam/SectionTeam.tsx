// import Image from 'next/image'
import React from 'react'

export default function SectionTeam() {
  return (
    <section className='team__section'>
      <div className='team__container'>
          {/* <img className='team__image' src='/images/people/image_people.webp' height='500' width='500' alt='Фото улыбающихся молодых людей за компьютерами в офисе.'/> */}
          <div className='team__block'>
              <h2 className='team__title font-bold'>Работайте с нами</h2>
              <div className='team__description'>
                  <p className='item__point'>У нас классная и сплоченная <span className='gradient team__accent bg-gradient-to-r from-[#e23b3b] via-[#31b3ec] to-[#6668eb] inline-block text-transparent bg-clip-text font-bold
'>команда IT-профессионалов.</span> 
                  Мы уже долгое время работаем вместе, создавая продукты, которыми мы гордимся!</p>
                  <span className='team__separator team__accent'></span>
                  <p className='item__point'>IT-специалисты Новой Победы работают из разных уголков мира, 
                  но <span className='gradient-blue team__accent gradient-blue bg-gradient-to-r from-[#31b3ec] to-[#524add] inline-block text-transparent bg-clip-text font-bold
'>мы всегда рядом</span> онлайн и постоянно на связи, если нужно ответить на вопросы или внести правки.</p>
                  <span className='team__separator'></span>
                  <p className='item__point'>Наша команда - редкий сплав из программистов и маркетологов, которые работают вместе и <span className='gradient team__accent bg-gradient-to-r from-[#e23b3b] via-[#31b3ec] to-[#6668eb] inline-block text-transparent bg-clip-text font-bold
'>гарантируют результат!</span></p>
              </div>
              <a className='team__button' href='#contacts-anchor'>Контакты</a>
          </div>
      </div>
    </section>
  )
}
