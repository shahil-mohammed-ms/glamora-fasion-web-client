import React from 'react'
import './index.css'
import Header from '../layouts/header/header'
import ProductList from '../products/ProductContent/ProductsList/ProductsList'
import WishListContentProducts from './wishListContentProducts/WishListProducts'

function WishListMain() {
  return (
    <div className='WishListMain' 
       >
      <Header isProduct={true}/>
      {/* <ProductList /> */}
      <div style={{display:'flex',flexDirection:'column',alignItems:'center'}} >
      <div className='WishListContent'  style={{display:'flex',flexDirection:'column',backgroundColor:'#e8e8e8',width:'95%'
      ,marginTop:'40px',borderTopLeftRadius:'25px',
      borderTopRightRadius:'25px',
    paddingTop:'120px',alignItems:'center',paddingBottom:'10px'
    }}>

<WishListContentProducts/>


      </div>

      </div>
      
      


      WishListMain
      </div>
  )
}

export default WishListMain