import React from 'react'
import './index.css'
import ProductImageDetails from './productImageDetails/ProductImageDetails'

function ProductItemContents() {
  return (
    <div className='ProductItemContents'   style={{backgroundColor:'#e8e8e8',width:'100%',marginTop:'40px'
    ,borderTopLeftRadius:'25px',borderTopRightRadius:'25px',
    paddingTop:'5px',paddingBottom:'10px'
    }} >

      <ProductImageDetails  />

      {/* review part  */}
<div>
<h1>review</h1>
</div>



      </div>
  )
}

export default ProductItemContents