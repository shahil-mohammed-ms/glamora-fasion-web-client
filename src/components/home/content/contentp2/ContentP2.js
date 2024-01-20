'use client'
import React from 'react'
import './index.css'
import CustomButtonMUIHover from '@/components/MUI-Components/custom/customButton';


function ContentP2() {
  return (
    <div className='ContentP2'>
      
      <div className='ContentP2Top' >

<div className='ContentP2Top-img' style={{
        backgroundImage: `url('/assets/main-banner-images/boxed-water-is-better-n1pULBOO24M-unsplash.jpg')`,
      }}>
          <span style={{height:'90%',width:'90%',display:'flex',flexDirection:'column',justifyContent:'space-evenly',padding:'0px'}}> 
        <p style={{color:'white',fontSize:'35px',display:"inline-block" }} > FREE SHIPPING </p>
        <p style={{color:'white',fontSize:'30px',display:"inline-block" }} > On All Orders Above $299 </p>
        <span style={{color:'white',fontSize:'35px',display:"inline-block" }} > <CustomButtonMUIHover  btntext={'VIEW COLLECTION'} 
               btnsize={'large'} ishover={true}/> </span>
        </span>

</div>
      </div>


      <div className='ContentP2Bottom' >
<div className='ContentP2Bottom-img1' style={{
        backgroundImage: `url('/assets/main-banner-images/boxed-water-is-better-n1pULBOO24M-unsplash.jpg')`,

      }}>
     <span style={{height:'55%',width:'50%',display:'flex',justifyContent:'center',padding:'20px'}}> 
        <p style={{color:'white',fontSize:'35px',display:"inline-block" }} > MEN'S COLLECTION </p>
        </span>

      </div>
<div className='ContentP2Bottom-img2' style={{
        backgroundImage: `url('/assets/main-banner-images/boxed-water-is-better-n1pULBOO24M-unsplash.jpg')`,
      }}>
         <span style={{height:'55%',width:'50%',display:'flex',justifyContent:'center',padding:'20px'}}> 
        <p style={{color:'white',fontSize:'35px',display:"inline-block" }} > WOMEN'S COLLECTION </p>
        </span>
      </div>


</div>

    </div>
  )
}

export default ContentP2