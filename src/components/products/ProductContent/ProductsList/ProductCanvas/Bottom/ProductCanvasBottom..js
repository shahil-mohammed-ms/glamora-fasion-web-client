import React from 'react'
import './index.css'
import RatingMUI from '@/components/MUI-Components/Rating'

function ProductCanvasBottom() {
  return (
    <div className='FBottom'>
      <div className='FBottomCategory ' style={{height:'15%'}}>
<p style={{display:'inline-block' ,color:'gray',fontSize:'12px' }} >
  Men's wear
</p>
      </div>
      <div className='FBottomContent'  >
<div> 
  <p style={{display:'inline-block' ,fontSize:'14px' }} > 
  DARK BROWN JEANS  UTRA PRO MAX ADC
  </p>
</div>
<div className='FRating' >
<RatingMUI ratingSize={'small'}/>
</div>
<div className='Frate'>
$35.00
</div>

</div>


      </div>
  )
}

export default ProductCanvasBottom