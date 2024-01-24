'use client'
import React from 'react'
import './index.css'
import Header from '../layouts/header/header';
import Offer from '../home/offer-quote/Offer/Offer';
import AboutContent1 from './aboutContent1/AboutContent1';
import AboutContentTitle from './aboutContentTitle/AboutContentTitle';
import AboutFinalContent from './finalContent/AboutFinalContent';

const overlayStyle = {
  content: '',
  // position: 'absolute',
  width:'100%',
  height:'400px',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the alpha value to control darkness
  
};


function AboutUser() {
  return (
    <div className='AboutUser'>
      <div className='AboutUserTop' style={{
        width:'100%',
        height:'400px',
         backgroundImage: `url('/assets/main-banner-images/boxed-water-is-better-n1pULBOO24M-unsplash.jpg')`,
         backgroundSize: 'cover',
         backgroundPosition: '50% 48%',
         display:'flex',
        

      }} >
<div style={overlayStyle}>

<Header  />

<div style={{ width:'100%',display:'flex',justifyContent:'center',paddingTop:'50px'}} >

<p style={{
  display:'inline-block',
  fontSize:'60px',
  color:'white',
  
}} >ABOUT US</p>
  
</div>
</div>
      </div>
    <AboutContent1/>
    <Offer/>
    <AboutContentTitle/>
   <AboutFinalContent/>
      AboutUser
      
      </div>
  )
}

export default AboutUser