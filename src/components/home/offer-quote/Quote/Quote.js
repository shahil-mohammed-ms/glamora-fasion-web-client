
import React from 'react'
import './index.css'


function Quote() {
  return (
    <div className='Quote' >
      
<div className='QuoteBox'>

<div className='QuoteBoxTop' >
<img  style={{width:'60px',height:'60px'}}
 src={`/assets/pngs/kisspng-computer-icons-quotation-mark-desktop-wallpaper-5ae1abfc525790.6574900415247390683373.png`}  />
</div>
<div className='QuoteBoxContent' style={{textAlign: 'left'}} >
 
  <p   style={{fontSize:'35px',}}>
  Proident Earum, Luctus Autem, Class Impedit Nostrud Pariatur, Perferendis Eiusmod Minima Perferendis, Itaque Recusandae Eligendi Facilisis.
  </p>
  
  
</div>
<div className='QuoteBoxBottom' >
<p style={{fontSize:'15px',color:'grey'}}>
 -------------------- Mark muller
  </p>
</div>
</div>

    </div>
  )
}

export default Quote