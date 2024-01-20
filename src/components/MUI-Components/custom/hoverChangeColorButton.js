'use client'
import React from 'react'
import Button from '@mui/material/Button';

function HoverChangeColorButton({btnbgc,btntext,btntextcolor,btnsize,ishover}) {
  const buttonStyles = {
    background: 'gray',
    color: 'white',
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
  )
}

export default HoverChangeColorButton