import React from 'react'

export default function SectionContacts() {
  return (
    <section id='contacts-anchor' className='contact-form__section section'>
      <div className='contact-form__container'>
        <h2 className='contact-form__heading font-bold'><span className="gradient-blue-pink bg-gradient-to-r from-[#31b3ec] to-[#f89aa6] inline-block text-transparent bg-clip-text font-bold">Будь победителем!</span> Твоя новая победа начинается <span className="gradient bg-gradient-to-r from-[#31b3ec] to-[#524add] inline-block text-transparent bg-clip-text font-bold"> здесь и сейчас! </span></h2>
        <div className='contact-form__buttons' >
            <a className='contact-form__button font-bold' href='https://wa.me/79958825141'>WhatsApp</a>
            <a className='contact-form__button font-bold' href='https://t.me/@new_pobeda'>Telegram</a>
            <a className='contact-form__button font-bold' href="mailto:hello@new-pobeda.ru">hello@new-pobeda.ru</a>
            <a className='contact-form__button font-bold' href="tel:+79958825141">+7 (995) 882-51-41</a>
        </div>
      </div>
    </section>
  )
}
