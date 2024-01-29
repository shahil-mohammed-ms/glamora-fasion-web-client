import ProductList from '@/components/products/ProductContent/ProductsList/ProductsList'
import ProductsTitle from '@/components/products/ProductContent/Title/ProductsTitle'
import React from 'react'

function WishListContentProducts() {
  return (
    <div className='WishListContentProducts' style={{
      display:'flex',flexDirection:'column',width:'85%',height:'100%',
    }}>
      <span style={{display:'flex',flexDirection:'row',alignItems:'flex-start',width:'100%',height:'100px'}}>
          <ProductsTitle txt={'WISHLIST'}  />
        </span>

      <ProductList />
      
      </div>
  )
}

export default WishListContentProducts