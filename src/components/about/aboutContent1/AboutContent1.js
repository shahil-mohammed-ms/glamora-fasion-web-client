import React from 'react'
import './index.css'
import AboutContentRightBox from './AboutContentRightBox/AboutContentRightBox'

function AboutContent1() {
  return (
    <div className='AboutContent1' >

      <div className='AboutContentLeft'>
        <img src='assets/pngs/kisspng-happiness-husband-wife-marriage-hug-husband-wife-5b2ce048947886.9561478515296676566082.png' 
        className='AboutContentLeftImg'/>
      </div>
      <div className='AboutContentRight'>
      <AboutContentRightBox />
      <AboutContentRightBox />


      </div>


    </div>
  )
}

export default AboutContent1