import { type ProductElement } from '@/models'
import Image from 'next/image'
import { imgBlur } from '@/app/models'

interface Props {
  product: ProductElement
}

function Card ({ product }: Props) {
  return (
    <div className='flex gap-5 w-full bg-zinc-100 p-3 rounded drop-shadow-md'>
      <Image className='object-cover object-bottom rounded-full w-[150px] h-[150px]' src={product.thumbnail} alt={product.title} width={500} height={500} priority blurDataURL={imgBlur} placeholder='blur' />
      <div className='flex flex-col justify-between'>
        <h2 className='text-xl font-semibold text-pink-500'>{product.title}</h2>
        <p className='text-xs'>{product.description}</p>

        <div className='flex justify-between'>
          <p className='text-pink-500 font-semibold'>${product.price}</p>
          <p>stars</p>
        </div>
      </div>
    </div>
  )
}

export default Card
