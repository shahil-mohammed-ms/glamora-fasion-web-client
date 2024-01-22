import React from 'react'
import './index.css'
import TemporaryDrawer from '@/components/MUI-Components/drawer/MUIFilterDrawer'

function FSLeft() {
  return (
    <div className='FSLeft'>
        <div className='FSLeftFilter' >
        <TemporaryDrawer />
        </div>
        <div className='FSLeftText'>
          <p style={{
            display:'inline-block',
            fontSize:'15px'
          }} >Showing 1–18 of 25 results</p>
        </div>

      </div>
  )
}

export default FSLeft