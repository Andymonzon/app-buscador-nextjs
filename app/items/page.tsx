import { Suspense } from 'react'
import Skeleton from './skeleton'
import { Card } from './components'
import { sendData } from '@/services'
import { randomUUID } from 'crypto'

const fetchProducts = async (search: string) => {
  return await sendData(search)
}

async function CardContainer ({ search }: { search: string }) {
  const products = await fetchProducts(search)
  return (
    <>
      {
        products.length > 0
          ? products.map(product => (
            <Card key={product.id} product={product} />
          ))
          : <p className='text-2xl font-bold'>No se encontraron resultados</p>
      }
    </>
  )
}

async function Items (
  { searchParams }: { searchParams: { search: string } }
) {
  return (
    <section className='flex w-full md:w-[60%] xl:w-1/3 items-center justify-center flex-col gap-5' key={randomUUID()}>
      <Suspense fallback={<Skeleton />}>
        <CardContainer search={searchParams.search} />
      </Suspense>
    </section>
  )
}

export default Items
