import { NextResponse } from 'next/server'
import Products from '@/mock/products.json'

export function GET (_req: Request, { params }: { params: { id: string } }) {
  const { id } = params

  if (id == null) {
    return NextResponse.json('No se encontro nada')
  }

  const productFind = Products.products.find((item) => item.id === +id)

  if (productFind == null) {
    return NextResponse.json('No se encontro nada')
  }

  return NextResponse.json(productFind)
}
