import React from 'react'
import './index.css'

function ServicesBox({TitleText,IconImge}) {



  return(
    <div className='ServicesBox'>
<img src={`assets/pngs/${IconImge}.png`}  style={{height:'30px',width:'30px'}} />
   <p style={{fontSize:'20px'}} >
  {TitleText}
   </p>
    </div>
  )
}

function Services() {
  return (
    <div className='Services' >
      
<ServicesBox TitleText={'Express Delivery'} 
IconImge={'kisspng-clip-art-portable-network-graphics-computer-icons-ardis-bike-5d1ecf88c0ce53.5523647615623002967897'} />
<ServicesBox TitleText={'Order Tracking'}
IconImge={'kisspng-clip-art-portable-network-graphics-computer-icons-ardis-bike-5d1ecf88c0ce53.5523647615623002967897'} />
<ServicesBox TitleText={'Regular Discounts'}
IconImge={'kisspng-clip-art-portable-network-graphics-computer-icons-ardis-bike-5d1ecf88c0ce53.5523647615623002967897'} />
    </div>
  )
}

export default Services