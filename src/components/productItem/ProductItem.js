import React from 'react'
import './index.css'
import Header from '../layouts/header/header'
import ProductItemContents from './productItemContent/ProductItemContents'

function ProductItem({productId}) {
  return (
    <div className='ProductItem' style={{backgroundColor:'white',width:'100%'}}>
      <Header   isProduct={true}/>
      <div style={{ display:'flex',flexDirection:'column',alignItems:'center', width:'100%',}}>
      <div className='ProductContents' 
    style={{display:'flex',flexDirection:'column',backgroundColor:'#e8e8e8',width:'95%',marginTop:'40px'
    ,borderTopLeftRadius:'25px',borderTopRightRadius:'25px',
    paddingTop:'40px',alignItems:'center',paddingBottom:'10px'
    }} >
<ProductItemContents />

    </div>

      </div>
{/* next footer or other components here */}
      
      </div>
  )
}

export default ProductItem