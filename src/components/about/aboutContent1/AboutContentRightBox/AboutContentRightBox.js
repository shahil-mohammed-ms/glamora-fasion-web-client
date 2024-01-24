import React from 'react'
import './index.css'

function AboutContentRightBox() {
  const imgUrl='assets/pngs/kisspng-clip-art-portable-network-graphics-computer-icons-ardis-bike-5d1ecf88c0ce53.5523647615623002967897.png'
  return (
    <div className='AboutContentRightBox'>
      <div className='AboutContentRightBoxLeft' style={{display:'flex',justifyContent:'center'}}>
        <img style={{height:'80px',width:'80px'}}
        src={imgUrl} />
      </div>
      <div className='AboutContentRightBoxRight'>
        <div > <p style={{display:'inline-block',fontSize:'26px'}} >heading</p></div>
        <div >
        <p style={{display:'inline-block'}} >something lengthy content should be written inside eheere heir where loren ishtiga bshw</p>
        </div>


      </div>
    </div>
  )
}

export default AboutContentRightBox