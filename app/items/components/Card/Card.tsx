'use client'
import { type ProductElement } from '@/models'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { imgBlur } from '@/app/models'
import { Stars } from '@/app/components'

interface Props {
  product: ProductElement
}

function Card ({ product }: Props) {
  const router = useRouter()
  const productLink = (productId: number) => {
    router.push(`/items/${productId}`)
  }

  return (
    <div onClick={() => { productLink(product.id) }} className='cursor-pointer flex gap-5 w-full bg-zinc-100 p-3 rounded drop-shadow-md'>
      <Image className='object-cover object-bottom rounded-full w-[150px] h-[150px]' src={product.thumbnail} alt={product.title} width={500} height={500} priority blurDataURL={imgBlur} placeholder='blur' />
      <div className='flex flex-col justify-between'>
        <h2 className='text-lg font-bold text-pink-500'>{product.title}</h2>
        <p className='text-xs font-semibold'>{product.description}</p>

        <div className='flex justify-between'>
          <p className='text-pink-500 font-semibold'>${product.price}</p>
          <Stars rating={product.rating} />
        </div>
      </div>
    </div>
  )
}

export default Card
