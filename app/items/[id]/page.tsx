import { Suspense } from 'react'
import { CardInfo } from './components'
import Skeleton from './skeleton'
import { randomUUID } from 'crypto'

export function ProductId ({ params }: { params: { id: string } }) {
  return (
    <section>
      <Suspense fallback={<Skeleton />} >
        <CardInfo id={params.id} key={randomUUID()} />
      </Suspense>
    </section >
  )
}

export default ProductId
