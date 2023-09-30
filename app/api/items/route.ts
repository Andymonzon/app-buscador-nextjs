import { NextResponse } from 'next/server'
import Products from '@/mock/products.json'
import { type ProductElement } from '@/models'

export async function POST (req: Request) {
  const { search } = await req.json()

  if (search == null || search === '') {
    return NextResponse.json({ error: 'No se encontro nada' }, { status: 404 })
  }

  const url = new URL(req.url)

  const query = url.searchParams.get('q')

  if (query == null) {
    return NextResponse.json({ error: 'No se encontro nada' }, { status: 404 })
  }

  const toLowerCaseQuery = query.toLowerCase()

  const filterItem: ProductElement[] = Products.products.filter((item) =>
    item.title.toLowerCase().includes(toLowerCaseQuery) ||
    item.brand.toLowerCase().includes(toLowerCaseQuery) ||
    item.category.toLowerCase().includes(toLowerCaseQuery)
  )

  if (filterItem.length === 0) {
    return NextResponse.json({ error: 'No se encontro nada' }, { status: 404 })
  }

  return NextResponse.json(filterItem)
}
