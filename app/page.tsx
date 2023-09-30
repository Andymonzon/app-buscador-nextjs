import { Form } from './components'
import Logo from '@/public/logo.webp'
import Image from 'next/image'

export default function Home () {
  return (
    <main className='flex flex-col items-center justify-center w-full min-h-screen gap-5'>
      <Image src={Logo} priority alt='logo' className='w-[100px] h-[100px] object-cover' />
      <h1 className='text-4xl font-bold'>Bazar Online</h1>
      <Form width='w-[95%]' />
    </main>
  )
}
