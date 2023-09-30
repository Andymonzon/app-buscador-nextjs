import Logo from '@/public/logo.webp'
import Image from 'next/image'
import { Form } from '../components'

function layout ({ children }: { children: React.ReactNode }) {
  return (
    <div className='w-full min-h-screen'>
      <header className='py-5 flex items-center justify-center w-full'>
        <nav className='w-[25rem] flex items-center justify-center gap-7'>
          <Image src={Logo} alt='logo' className='w-[70px] h-[70px] object-cover' />
          <Form showBtn={false} />
        </nav>
      </header>
      {children}
    </div>
  )
}

export default layout
