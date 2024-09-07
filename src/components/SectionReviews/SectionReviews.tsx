import React from 'react'
// import Image from 'next/image'

export default function SectionReviews() {
  return (
    <section className='reviews__section'>
    <div className='reviews__container'>
        <ul className='reviews__list'>
            <li className='reviews__item'>
                <p className='reviews__text'>Работали с Новой победой в 2022 году. Разрабатывали нам сайт it-consulto.ru для работы в b2b сегменте. Очень довольны сотрудничеством. Будем обращаться вновь обязательно </p>
                <div className='reviews__author'>
                    {/* <img className='reviews__photo' alt='Фото улыбающегося мужчины.' src='/images/reviews/client81.webp' width='50' height='50' /> */}
                    <div className='reviews__speaker'>
                        <span className='reviews__name'>Виталий Смирнов</span>
                        <span className='reviews__company'>Консалтинг It-consulto</span>
                    </div>
                </div>
            </li>
            <li className='reviews__item'>
                <p className='reviews__text'>Обратилась к ребятам по рекомендации знакомых, которым они делали сайт. Нам нужен был сайт для нашей кондитерской. Главным требованием была красота и удобство. Справились на отлично!</p>
                <div className='reviews__author'>
                    {/* <img className='reviews__photo' alt='Фото довольной клиентки.' src='/images/reviews/client10.webp' width='50' height='50'/> */}
                    <div className='reviews__speaker'>
                        <span className='reviews__name'>Ксения Иванова</span>
                        <span className='reviews__company'>Кондитерская Тарт Деко</span>
                    </div>
                </div>
            </li>
            <li className='reviews__item'>
                <p className='reviews__text'>Работали с Новой Победой при создании сайта нашего образовательного проекта по обучению детей и подросткой за рубежом. Все получилось супер! Молодцы! </p>
                <div className='reviews__author'>
                    {/* <img className='reviews__photo' alt='Фото довольного мужчины.' src='/images/reviews/client3.webp' width='50' height='50' /> */}
                    <div className='reviews__speaker'>
                        <span className='reviews__name'>Игорь Литвинов</span>
                        <span className='reviews__company'>Компания studentio.ru</span>
                    </div>
                </div>
            </li>
            <li className='reviews__item'>
                <p className='reviews__text'>Выражаю благодарность коллективу разработчиков и нашему персональному менеджеру Ивану! Это первые айтишники, которые не затягивают проект и дают адекватные цены. Так держать</p>
                <div className='reviews__author'>
                    {/* <img className='reviews__photo' alt='Фото улыбающегося мужчины.' src='/images/reviews/client2.webp' width='50' height='50' /> */}
                    <div className='reviews__speaker'>
                        <span className='reviews__name'>Александр Макаров</span>
                        <span className='reviews__company'>Фонд Asset-Contol Management</span>
                    </div>
                </div>
            </li>
            <li className='reviews__item'>
                <p className='reviews__text'>Обратились в Новую Победу за сайтом для нашей компании по импорту товаров из США и Европы. Понравилась четкость работы, соблюдение сроков, отсутствие понтов и вежливость</p>
                <div className='reviews__author'>
                    {/* <img className='reviews__photo' alt='Фото улыбающегося клиента.' height='50'src='/images/reviews/client7.webp' width='50' /> */}
                    <div className='reviews__speaker'>
                        <span className='reviews__name'>Макс Полин</span>
                        <span className='reviews__company'>Компания-импортер INT-TRADER</span>
                    </div>
                </div>
            </li>
            <li className='reviews__item'>
                <p className='reviews__text'>Первый случай работы с программистами, когда не заваливают умными словами, а все нормально объясняют. Наш менеджер Евгений всегда был на связи и помогал во всех нюансах. Рекомендую</p>
                <div className='reviews__author'>
                    {/* <img className='reviews__photo' alt='Фото довольной девушки.' src='/images/reviews/client6.webp' width='50' height='50' /> */}
                    <div className='reviews__speaker'>
                        <span className='reviews__name'>Мария Панкратова</span>
                        <span className='reviews__company'>Маркетинг-студия Code-me-easy</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</section>
  )
}
