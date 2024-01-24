import React from 'react'
import './index.css'

function AboutFinalContent() {
  return (
    <div className='AboutFinalContent' >
      <div className='AboutFinalContentLeft'>
       <div className='AboutFinalContentLeftBox1' >
        <p style={{
          fontSize:'12px'

        }} >we are visionaries</p>
        </div>

       <div className='AboutFinalContentLeftBox2'>
        <p style={{
          fontSize:'60px'

        }}>Mission</p>
        </div>

       <div className='AboutFinalContentLeftBox3'>
        <p style={{
          width:'50%'

        }}>Donec dapibus ullamcorper magna quis posuere. Aenean tincidunt posuere tellus nec dapibus.
           Aliquam pharetra egestas tellus. Nulla sed quam ante. Curabitur porta pharetra nunc,
           in maximus ex ultricies a. Donec nibh turpis, eleifend ut tristique ut, aliquam eu urna. Fusce eget ante tellus.</p>
        </div>
      </div>

      <div className='AboutFinalContentRight'>
      <img className='AboutFinalContentRightImg'
         src='assets/main-banner-images/boxed-water-is-better-n1pULBOO24M-unsplash.jpg' />
      </div>
    </div>
  )
}

export default AboutFinalContent