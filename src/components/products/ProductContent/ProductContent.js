import React from 'react'
import  './index.css'
import ProductsTitle from './Title/ProductsTitle'
import FilterSortProduct from './FilterSortProducts/FilterSortProduct'

function ProductContent() {
  return (
    <div className='ProductContents' 
    style={{backgroundColor:'#e8e8e8',width:'95%',height:'1000px',marginTop:'40px',borderTopLeftRadius:'25px',borderTopRightRadius:'25px',
    paddingTop:'120px',alignItems:'center'
    }} >
      <div className='ProductContentSUB' style={{
        display:'flex',flexDirection:'column',width:'85%',height:'100%',
      }} >
        <span style={{display:'flex',flexDirection:'row',alignItems:'flex-start',width:'100%',height:'100px'}}>
          <ProductsTitle txt={'SHOP'}  />
        </span>
        <div style={{display:'flex',flexDirection:'row',width:'100%',paddingTop:'30px'}} >
          <FilterSortProduct/>


        </div>





      </div>
      </div>
  )
}

export default ProductContent