'use client'
import React from 'react'
import Button from '@mui/material/Button';

const CustomButtonMUIHover = ({btnbgc,btntext,btntextcolor,btnsize,ishover}) => {
  const buttonStyles = {
    background: 'white',
    color: 'black',
    transition: 'transform 0.3s ease-out',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
  };
  const containerStyles = {
    '&:hover': {
      transform: 'translateY(-5px)',
    },
  }

  return (
  
     <Button style={buttonStyles} sx={ishover && containerStyles} size={btnsize}>
      {btntext}
    </Button>
  
   
  );
};

 export default CustomButtonMUIHover;