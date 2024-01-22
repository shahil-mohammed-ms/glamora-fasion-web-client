import React from 'react'

function ProductsTitle({txt,txtcolor}) {
  return (
    <p style={{
     display:'inline-block', fontSize:'60px', color:`${'gray'}`
    }}
     > {txt||'SHOP'} </p>
  )
}

export default ProductsTitle