import Link from 'next/link'
import PositionedMenu from '@/components/MUI-Components/categoryMenu'

function MiddleHeader() {
  return (
    <div className='headMiddle' >
    <Link href={`/`} style={{ color: 'white' }} >Home</Link>
    {/* <Link href={`/`} >Product</Link> */}
   {/* <span><p>Category</p></span>  */}
   <PositionedMenu/>
    <Link href={`/about`} style={{ color: 'white' }}>About</Link>
    <Link href={`/contact`} style={{ color: 'white' }}>Contact</Link>
  </div>
  )
}

export default MiddleHeader