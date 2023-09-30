import { type ProductElement } from '@/models'
import Image from 'next/image'
import { imgBlur } from '@/app/models'
import { IconStarFilled, IconStarHalfFilled, IconStar } from '@tabler/icons-react'

interface Props {
  product: ProductElement
}

function Card ({ product }: Props) {
  const fullStars = Math.floor(product.rating)
  const hasHalfStar = product.rating % 1 !== 0

  return (
    <div className='flex gap-5 w-full bg-zinc-100 p-3 rounded drop-shadow-md'>
      <Image className='object-cover object-bottom rounded-full w-[150px] h-[150px]' src={product.thumbnail} alt={product.title} width={500} height={500} priority blurDataURL={imgBlur} placeholder='blur' />
      <div className='flex flex-col justify-between'>
        <h2 className='text-lg font-bold text-pink-500'>{product.title}</h2>
        <p className='text-xs font-semibold'>{product.description}</p>

        <div className='flex justify-between'>
          <p className='text-pink-500 font-semibold'>${product.price}</p>
          <div className='flex items-center text-pink-500'>
            {
              [...new Array(5)].map((_star, index) => {
                return index < fullStars ? <IconStarFilled size={15} /> : hasHalfStar ? <IconStarHalfFilled size={15} /> : <IconStar size={15} />
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
