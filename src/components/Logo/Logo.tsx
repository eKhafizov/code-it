// import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link
      className='flex justify-start content-center'
      href="https://new-pobeda.ru">
        {/* <Image
          src='/images/logo_black_png.png'
          width='200'
          height='50'
          alt='Логотип' /> */}
    </Link>
  )
}
