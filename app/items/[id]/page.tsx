import { Suspense } from 'react'
import { CardInfo } from './components'
import Skeleton from './skeleton'

function ProductId ({ params }: { params: { id: string } }) {
  return (
    <section>
      <Suspense fallback={<Skeleton />} >
        <CardInfo id={params.id} />
      </Suspense>
    </section >
  )
}

export default ProductId
