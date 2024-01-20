import React from 'react'
import './index.css'
import CustomButtonMUIHover from '@/components/MUI-Components/custom/customButton'
import HoverChangeColorButton from '@/components/MUI-Components/custom/hoverChangeColorButton'

function OfferLeft() {
  return (
    <div className='OfferLeft' >
      <div style={{display:'flex',alignItems:'center',}} >
       <img 
       style={{height:'60px',width:'60px',}}
       src={`/assets/pngs/kisspng-clip-art-portable-network-graphics-computer-icons-ardis-bike-5d1ecf88c0ce53.5523647615623002967897.png`} />
         </div>
      <div style={{display:'flex',alignItems:'center'}} > 
         <p style={{display:'inline-block',fontSize:'40px',}} > 25 % OFF</p>
      </div>
      <div style={{display:'flex',alignItems:'center'}} > 
      <p style={{display:'inline-block',fontSize:'25px'}} > On All Orders Above $299!</p>
     
      </div>
      <div style={{display:'flex',alignItems:'center',width:'80%'}} > 
      <p style={{display:'inline-block',fontSize:'15px',color:'gray'}} >
      Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor incididunt labore dolore.
      </p>
      </div>
      <div style={{display:'flex',alignItems:'center'}} >
        <HoverChangeColorButton btntext={'GRAB THIS OFFER'} btnsize={'large'} ishover={true}/>
         </div>
    </div>
  )
}

export default OfferLeft