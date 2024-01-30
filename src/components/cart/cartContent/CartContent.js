import React from 'react'
import './index.css'
import ProductsTitle from '@/components/products/ProductContent/Title/ProductsTitle'

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';

function CartContent() {
  const cartItems = [
    {
      id: 1,
      image: 'url/to/image1.jpg',
      product: 'Product A',
      price: 20.99,
      quantity: 2,
      subtotal: 41.98,
    },
    {
      id: 2,
      image: 'url/to/image2.jpg',
      product: 'Product B',
      price: 15.49,
      quantity: 3,
      subtotal: 46.47,
    },
    {
      id: 3,
      image: 'url/to/image3.jpg',
      product: 'Product C',
      price: 10.00,
      quantity: 1,
      subtotal: 10.00,
    },
  ];
  return (
    <div className='CartContent' style={{
      display:'flex',flexDirection:'column',width:'85%',height:'100%',paddingBottom:'200px'
    }}>

<span style={{display:'flex',flexDirection:'row',alignItems:'flex-start',width:'100%',height:'100px'}}>
          <ProductsTitle txt={'Cart'}  />
        </span>

        <div  className='CartItemListTotal'>
          <div className='CartItemList'>
          <table style={{ width: '97%', borderCollapse: 'collapse', }}>
      <thead style={{ height: '60px',backgroundColor:'gray'}}>
        <tr  >
          <th></th>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
          <th></th>
        </tr>
      </thead>
      <tbody className='tablebdy' style={{border: '2px solid #ddd',}}>
        {cartItems.map((item) => (
          <tr key={item.id} style={{ height: '100px',}}>
            <td><img src={`assets/main-banner-images/boxed-water-is-better-n1pULBOO24M-unsplash.jpg`} alt={item.product}
             style={{ width: '50px', height: '50px' }} /></td>
            <td>${item.product}</td>
            <td>${item.price.toFixed(2)}</td>
            <td>
           
          <div className='qty'>
          <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <IconButton color="primary"  aria-label="add quantity">
        <RemoveIcon />
      </IconButton>

      <Button  >0</Button>

      <IconButton color="primary" aria-label="subract quantity">
        <AddIcon />
      </IconButton>
    </ButtonGroup>

          </div>
      
              
              </td>
            <td >${item.subtotal.toFixed(2)}
            
            </td>
            <td>
            <IconButton aria-label="delete">
              <CancelIcon />
            </IconButton>
            </td>


          </tr>
        ))}
      </tbody>
    </table>

          </div>

          <div className='CartItemTotal'>

t
          </div>



        </div>
      
    
      </div>
  )
}

export default CartContent