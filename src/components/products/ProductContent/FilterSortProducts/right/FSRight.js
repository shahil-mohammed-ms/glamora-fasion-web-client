'use client'
import React from 'react'
import './index.css'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ListIcon from '@mui/icons-material/List';
import GridViewSharpIcon from '@mui/icons-material/GridViewSharp';

function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Default</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Default</MenuItem>
          <MenuItem value={20} onClick={()=>console.log('hi')} >sort by price: high to low</MenuItem>
          <MenuItem value={30}>sort by price: low to high</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

function FSRight() {
  return (
    <div className='FSRight'>
    <div className='FSRightSorting' >
      <BasicSelect />

    </div>
      <div className='FSRightIcons'>
        <GridViewSharpIcon fontSize='large'/>
        <ListIcon fontSize='large'/>
      </div>
    </div>
  )
}

export default FSRight