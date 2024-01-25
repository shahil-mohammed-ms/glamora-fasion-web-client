"use client"
import React from 'react'
import './index.css'
import { Box, Button } from '@mui/material';

function ContactUsMiddleLeft() {
  const [formData, setFormData] = React.useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };
  return (
    <div className='ContactUsMiddleLeft'>
      <div className='ContactUsQuestion'>
        <div style={{display:'flex',width:'100%'}}>
        <p className='ContactUsQuestionTitle'>GOT QUESTIONS?</p>
        </div>
        
        <div style={{display:'flex',width:'100%'}}>
        <p className='ContactUsQuestionBody'>
        Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.
         Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo.
         Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.
        </p>

        </div>
       
      </div>

<div className='ContactUsMiddleLeftForm'>
<form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column'}} >
      <h3>full Name</h3>
      <input type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required />
            <h3>Email</h3>
            <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <h3>subject</h3>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <h3>Messge</h3>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <Box>
           {true? (<Button size='large' type="submit"  style={{ backgroundColor: 'black',color:'white', '&:hover': { backgroundColor: 'gray' } }} >
            Send
            </Button>)
           
           :(<Button size='large' disabled >Sending...</Button>)}
          </Box>
      


        {/* <button type="submit">send</button> */}
      </form>

</div>




    </div>
  )
}

export default ContactUsMiddleLeft