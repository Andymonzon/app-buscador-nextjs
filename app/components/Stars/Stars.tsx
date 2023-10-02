import { IconStarFilled, IconStarHalfFilled, IconStar } from '@tabler/icons-react'

function Stars ({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0

  return (
    <div className='flex items-center text-pink-500'>
      {
        [...new Array(5)].map((_star, index) => {
          return index < fullStars ? <IconStarFilled key={index} size={15} /> : hasHalfStar ? <IconStarHalfFilled key={index} size={15} /> : <IconStar key={index} size={15} />
        })
      }
    </div>
  )
}

export default Stars
