import React from 'react'
import './index.css'
import Header from '../layouts/header/header'
import ProductContent from './ProductContent/ProductContent'

function ProductsMain() {
  //backgroundColor:'#e8e8e8'
  return (
    <div className='ProductsMain' style={{backgroundColor:'white'}} >  
      <Header isProduct={true} />
      {/* <hr/>
      <div  style={{display:'none',backgroundColor:'rgba(0, 0, 0, 0.26)',width:'100%',height:'100px'}}>
      </div> */}
      <div style={{ display:'flex',flexDirection:'column',alignItems:'center', width:'100%',}}>
        <ProductContent/>

      </div>

      </div>
  )
}

export default ProductsMain