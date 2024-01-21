import React from 'react'
import './index.css'
import FeaturedProductChild from './featuredproductChild/FeaturedProductChild'

function FeaturedHome() {
const demoproducts =[1,2,3,4,5,6,7,8]

  return (
    <div  className='FeaturedParent'>
      {
     demoproducts.map((product)=>(
      
<FeaturedProductChild/>

     ))

      }
     
    </div>
  )
}

export default FeaturedHome