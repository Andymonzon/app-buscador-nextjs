import { type ProductElement } from '@/models'

const url = 'http://localhost:3000/api/items'

export async function getProduct (id: string) {
  return await fetch(`${url}/${id}`)
    .then(async (res) => await (await res.json() as Promise<ProductElement>))
    .then((data) => data)
}

export async function sendData (data: string): Promise<ProductElement[]> {
  return await fetch(`${url}?q=${data}`, {
    method: 'POST',
    body: JSON.stringify({
      search: data
    })
  })
    .then(async res => await res.json())
    .then(data => data)
}
