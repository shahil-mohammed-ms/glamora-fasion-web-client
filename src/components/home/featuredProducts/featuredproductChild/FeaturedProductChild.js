import React from 'react'
import './index.css'
import FeaturedProductChildTop from './Top/FeaturedProductChildTop'
import FeaturedProductChildBottom from './Bottom/FeaturedProductChildBottom'

function FeaturedProductChild() {
  return (
    <div className='FeaturedProductChild'>
     <FeaturedProductChildTop/>
      <FeaturedProductChildBottom/>
      </div>
  )
}

export default FeaturedProductChild