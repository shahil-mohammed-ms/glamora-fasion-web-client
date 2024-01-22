import Link from 'next/link'
import './header.css'
import MiddleHeader from './sections/Middle';
import RightHeader from './sections/Right';
import MiddleHeaderMobile from './sections/mobileScreen/Middle';

function Header({isProduct}) {
  return (
    <div className='app-bar' style={isProduct && {backgroundColor:'rgba(0, 0, 0, 0.26)'}} >
      <div className='headLogo'>
  <span>
  {  <img style={{height:'80px',width:'110px'}} src='https://websitedemos.net/store-04/wp-content/uploads/sites/157/2020/05/site-logo-white-free-img.png' alt="Logo" />
    
    }
  </span>
</div  >

   <MiddleHeaderMobile/>
   <MiddleHeader/>
   <RightHeader/>
   
    </div>
  )
}

export default Header