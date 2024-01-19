import './sections.css'
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Avatar from '@mui/material/Avatar';
import MUIButton from '@/components/MUI-Components/Button';


function RightHeader() {
  return (
    <div className='headLast' >
      <Badge badgeContent={4} color="primary">
      <NotificationsIcon color="action" />
    </Badge>
    <Badge badgeContent={4} color="primary">
      <FavoriteIcon color="action" />
    </Badge>
    <Badge badgeContent={4} color="primary">
      <ShoppingCartIcon color="action" />
    </Badge>
    <>
 {false ?  (<Avatar src='/assets/main-banner-images/boxed-water-is-better-n1pULBOO24M-unsplash.jpg' />)
  :(<MUIButton text={'login'} btnvariant={'contained'}/>)}
    </>
   
    

      </div>
  )
}

export default RightHeader