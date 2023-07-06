import Image from 'next/image'
import Stripe from 'stripe'
import ProductCard from './components/ProductCard'

async function getProducts() {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '', {
    apiVersion: '2020-08-27',
  })

  const res = await stripe.prices.list({
    expand: ['data.product']
  })

  const prices = res.data
  return prices
}

export default async function Home() {
  const products = await getProducts()
  // console.log(products)
  return (
    <main className='p-4 flex flex-col'>
      <div className='max-w-[1000px] w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {
          products.map((product, productIndex) => {
            return <ProductCard key={productIndex} product={product} />
          })
        }
      </div>
    </main>
  )
}
