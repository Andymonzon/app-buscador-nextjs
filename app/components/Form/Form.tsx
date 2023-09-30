'use client'

import { IconSearch } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'

interface Props {
  width?: string
  showBtn?: boolean
}

function Form ({ width = 'w-full', showBtn = true }: Props) {
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const filds = new FormData(e.target as HTMLFormElement)
    const search = filds.get('search') as string
    if (search !== '') {
      router.push(`/items?search=${search}`)
    } else {
      return null
    }
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-5 items-center justify-center'>
      <div className={`flex relative ${width}`}>
        <input name='search' type="text" placeholder="Laptops, smartphones, ..." className='w-full py-2 pl-2 pr-10 box-border bg-gray-200 outline-none rounded' />
        <IconSearch className='absolute top-0 right-0 p-2 text-zinc-400' size={40} />
      </div>
      {
        showBtn
          ? <button type="submit" className='bg-pink-500 w-min mx-auto px-10 py-2 rounded-full text-white hover:bg-pink-600 duration-200'>Buscar</button>
          : null
      }
    </form>
  )
}

export default Form
