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
    <main className='flex items-center justify-center pt-5 pb-10' key={randomUUID()}>
      <section className='flex w-1/3 items-center justify-center flex-col gap-5'>
        <Suspense fallback={<Skeleton />}>
          <CardContainer search={searchParams.search} />
        </Suspense>
      </section>
    </main>
  )
}

export default Items
