"use client"

import React from 'react'
import { useRouter } from 'next/navigation'
import useCart from '../(store)/store'
export default function ProductCard(props) {
    const { product } = props
    const { id: price_id, unit_amount: cost_price, product: product_info } = product
    const { name, description } = product_info
    const setProduct = useCart(state => state.setProduct)

    const router = useRouter();

    function onProductClick() {
        const newProduct = {
            name,
            description,
            price_id,
            cost_price,
            product_info,
        }
        setProduct({ newProduct })
        router.push('/product?price_id=' + price_id)
    }

    return (
        <div className='flex flex-col shadow bg-white hover:shadow-lg cursor-pointer' onClick={onProductClick}>
            <img src={product_info.images[0]} alt={product_info.name} className='w-full h-full object-cover' />
            <div className='p-4 flex flex-col'>
                <h2 className='text-xl font-semibold'>{product_info.name}</h2>
                <p className='text-gray-500'>{product_info.description}</p>
                <div className='flex justify-between items-center mt-4'>
                    <p className='text-xl font-semibold'>${(cost_price / 100).toFixed(2)}</p>
                    <button className='bg-blue-900 text-white px-4 py-2 rounded-full'>Add to cart</button>
                </div>
            </div>
        </div>
    )
}
