import { Stars } from '@/app/components'
import { getProduct } from '@/services'
import Image from 'next/image'

async function getInfo (id: string) {
  return await getProduct(id)
}

async function CardInfo ({ id }: { id: string }) {
  const product = await getInfo(id)

  return (
    <div className='bg-zinc-100 p-3 rounded drop-shadow-md w-[20rem] flex flex-col flex-wrap items-center justify-center gap-5'>
      <header className='flex gap-5 items-center'>
        <Image priority src={product.thumbnail} width={500} height={500} className='w-[200px] h-[200px] rounded-full object-cover' alt={product.title} />
        <div className='flex flex-col gap-5'>
          {
            product.images.slice(0, 3).map((image) => {
              return <Image priority key={image} src={image} width={150} height={150} className='w-[50px] h-[50px] rounded-full object-cover' alt={product.title} />
            })
          }
        </div>
      </header>
      <main className='w-full flex flex-col gap-8 items-center'>
        <div className='w-full flex flex-col gap-2 items-center'>
          <h2 className='text-2xl text-center font-bold text-pink-500'>{product.title} - {product.brand}</h2>
          <div className='flex justify-evenly items-center w-full'>
            <div className='text-center'>
              <p className='text-lg font-bold text-pink-500'>${product.price}</p>
              <p className='text-xs font-semibold'>{product.stock} disponible</p>
            </div>
            <Stars rating={product.rating} />
          </div>
        </div>
        <p className='text-xs font-semibold'>{product.description}</p>
      </main>
      <button className='bg-pink-500 text-white p-3 rounded-full w-full hover:bg-pink-700 duration-200'>Comprar</button>
    </div>
  )
}

export default CardInfo
