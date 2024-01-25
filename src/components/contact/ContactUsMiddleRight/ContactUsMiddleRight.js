import React from 'react'
import './index.css'
import Link from 'next/link'


function ContactUsMiddleRight() {


  return (
    <div className='ContactUsMiddleRight'>
      <div className='QuickLinks'>
        <div className='QuickLinksTitle'>
        <p style={{display:'inline-block',fontSize:'30px',color:'gray'}}>Quick Links</p>

        </div>
<div className='QuickLinksBody'>
<Link href="/">
        <p>HOME</p>
      </Link>
      <Link href="/about">
        <p>ABOUT US</p>
      </Link>
      <Link href="/contact">
        <p>CONTACT US</p>
      </Link>

</div>
      </div>

      <div className='LCollections'>
        <div className='LCollectionsTitle'>
        <p style={{display:'inline-block',fontSize:'30px',color:'gray'}}> Latest collections</p>
        </div>
        <div className='LCollectionsBody'>
        <Link href="/">
        <p>MEN's</p>
      </Link>
      <Link href="/">
        <p>WOMEN's</p>
      </Link>
      <Link href="/">
        <p>MEN's SHOE's</p>
      </Link>
      <Link href="/">
        <p>WOMEN's SHOE's</p>
      </Link>

        </div>

      </div>


    </div>
  )
}

export default ContactUsMiddleRight