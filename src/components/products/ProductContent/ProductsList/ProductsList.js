import React from 'react'
import './index.css'
import ProductCanvas from './ProductCanvas/ProductCanvas'



function ProductList() {
const demoproducts =[1,2,3,4,5,6,7,8]

  return (
    <div  className='FeaturedParent'>
      {
     demoproducts.map((product)=>(
      
<ProductCanvas key={product} />

     ))

      }
     
    </div>
  )
}

export default ProductList