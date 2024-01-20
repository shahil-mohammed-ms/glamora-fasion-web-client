import React from 'react'
import './index.css'
import OfferLeft from './OfferLeft/OfferLeft'

function Offer() {
  return (
    <div className='Offer'
    style={{
      backgroundImage: `url('/assets/pngs/pngwing.com.png')`,
      backgroundSize:'cover',
      backgroundPosition:'center'
    }}
    >
      <OfferLeft/>
      <div className='OfferRight' >
        <span>
        <img className='OfferRightImg'
         src='/assets/pngs/transparent-clothing-yellow-cartoon-costume-fashion-design-5dcd16d3b517e4.0630543515737218117418.png' />
        </span>
     
      </div>

    </div>
  )
}

export default Offer