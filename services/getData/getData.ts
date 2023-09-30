import { type ProductElement } from '@/models'

const url = 'http://localhost:3000/api/items'

// export async function getData (data: string) {
//   return await fetch(url)
//     .then(async (res) => await (await res.json() as Promise<Product>))
//     .then((data) => data.products)
// }

export async function sendData (data: string): Promise<ProductElement[]> {
  return await fetch(`${url}?q=${data}`, {
    method: 'POST',
    body: JSON.stringify({
      search: data
    })
  })
    .then(async res => await res.json())
    .then(await new Promise(resolve => setTimeout(resolve, 2000)))
    .then(data => data)
}
