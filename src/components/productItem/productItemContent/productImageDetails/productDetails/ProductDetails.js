'use client'
import React from 'react'
import './index.css'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const marks = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 37,
    label: '37°C',
  },
  {
    value: 100,
    label: '100°C',
  },
];

function valuetext(value) {
  return `${value}°C`;
}

 function DiscreteSliderLabel() {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Always visible"
        defaultValue={80}
        getAriaValueText={valuetext}
        step={10}
        marks={marks}
        valueLabelDisplay="on"
      />
    </Box>
  );
}

function ProductDetails() {
  return (
    <div className='ProductDetails'>
      <div> home/men's/tshirt</div>
      <div> <p style={{fontFamily:'monospace',fontSize:'30px'}}>$145.00</p></div>
      <div> <p style={{width:'70%'}}>  
      Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.
       Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
       Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.
        </p></div>
        <div>
          <DiscreteSliderLabel />
        </div>

        <div className='qtybtn'>
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
          <div className='btn'>
          <Button variant="contained" endIcon={<AddShoppingCartIcon />}>
  Add Cart
</Button>

          </div>


        </div>
        <hr/>
        <div>
          <p style={{fontStyle:'italic'}}> category : Men's </p>
        </div>



     
      </div>
  )
}

export default ProductDetails