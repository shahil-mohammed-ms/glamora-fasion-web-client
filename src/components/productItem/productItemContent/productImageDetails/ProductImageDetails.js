import React from 'react'
import './index.css'
import ProductImage from './productImage/ProductImage'
import ProductDetails from './productDetails/ProductDetails'

function ProductImageDetails() {
  return (
    <div className='ProductImageDetails'>
      <ProductImage/>
      <ProductDetails/>
      
      </div>
  )
}

export default ProductImageDetails