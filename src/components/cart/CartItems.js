import React from 'react'
import './index.css'
import Header from '../layouts/header/header'
import CartContent from './cartContent/CartContent'


function CartItems() {
  return (
    <div className='CartItems'>
      <Header  isProduct={true}/>
      <div style={{display:'flex',flexDirection:'column',alignItems:'center',height:'100%'}} >
      <div   style={{display:'flex',flexDirection:'column',backgroundColor:'#e8e8e8',width:'95%',height:'100%'
      ,marginTop:'40px',borderTopLeftRadius:'25px',
      borderTopRightRadius:'25px',
    paddingTop:'80px',alignItems:'center',paddingBottom:'10px'
    }}>

<CartContent />



</div>

      </div>


      </div>
  )
}

export default CartItems