import Logo from '@/public/logo.webp'
import Image from 'next/image'
import { Form } from '../components'
import Link from 'next/link'

function layout ({ children }: { children: React.ReactNode }) {
  return (
    <div className='w-full min-h-screen'>
      <header className='py-5 flex items-center justify-center w-full'>
        <nav className='w-[25rem] px-2 flex items-center justify-center gap-7'>
          <Link href='/'>
            <Image priority src={Logo} alt='logo' className='w-[70px] h-[70px] object-cover' />
          </Link>
          <Form showBtn={false} />
        </nav>
      </header>
      <main className='flex items-center justify-center pt-5 pb-10' >
        {children}
      </main>
    </div>
  )
}

export default layout
