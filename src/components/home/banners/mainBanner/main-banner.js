import './mainBanner.css'
import MUIButton from '@/components/MUI-Components/Button'

function MainBanner() {
  return (
    <div className="mainBanner" >
    
    <span>
    <span><h4>SUMMER COLLECTION</h4></span>
    <span><h1>INTRODUCING</h1></span>
    <span><h1>NEW ARRIVALS</h1></span>
    </span>
    
    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,<br/>
     luctus nec ullamcorper mattis, pulvinar dapibus leo.</span>
    <span><MUIButton text={'VIEW COLLECTION'} btnvariant={'contained'} btnSize={'large'} btnColor={'primary'}/></span>
    </div>
  )
}

export default MainBanner