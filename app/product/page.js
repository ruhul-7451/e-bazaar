"use client"
import React from 'react'
import useCart from '../(store)/store'
const ProductPage = (props) => {
    const { searchParams } = props
    const { price_id } = searchParams
    const product = useCart(state => state.product)
    console.log(product)
    return (
        <div>ProductPage</div>
    )
}

export default ProductPage