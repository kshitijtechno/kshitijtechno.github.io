import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import config from './config';
import { Link } from 'react-router-dom';
import ScrollToTopButton from './ScrollToTopButton';
import FaceBookIcon from './images/icons/fb.png';
import InstaIcon from './images/icons/insta.png';
import LinkedInIcon from './images/icons/linkedIn.png';
import MyIntro from './MyIntro';

const Footer = () => {
  const [lastModifiedDate, setLastModifiedDate] = useState('');

  useEffect(() => {
  fetch('/lastModified.txt')
    .then(response => response.text())
    .then(date => {
      const parsedDate = new Date(date.trim()); // Remove any trailing newline
      setLastModifiedDate(
        parsedDate.toLocaleString('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour12: true,   // 12-hour format
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        })
      );
    })
    .catch(error => console.error('Error fetching last modified date:', error));
}, []);


  const handleIconClick = (event) => {
    if(event === "fb") {
      window.open(config.url_facebook, '_blank');
    } else if(event === "insta") {
      window.open(config.url_instagram, '_blank');
    } else if(event === "linkedIn") {
      window.open(config.url_linkedIn, '_blank');
    }    
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f5f5f5',
        padding: 3,
        position: 'relative',
        bottom: 0,
        marginTop: '15px',
      }}
    >
      <Typography variant="body2" color="text.secondary" align="center">
        © {new Date().getFullYear()} {config.siteName}. All rights reserved.
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center">
        {config.createby}
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center">
        <Link to="/contactus">{config.contact}</Link>
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center">
        <Link to="/disclaimer">{config.disclaimer}</Link>
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center">
        <MyIntro/>
      </Typography>      
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img src={LinkedInIcon} alt="Kshitij Wardhan Ahirwar" style={{ height: 'auto', maxWidth: '100%' }} onClick={() => handleIconClick("linkedIn")}/>
          <img src={FaceBookIcon} alt="Kshitij Wardhan Ahirwar" style={{ height: 'auto', maxWidth: '100%' }} onClick={() => handleIconClick("fb")}/>
          <img src={InstaIcon} alt="Kshitij Wardhan Ahirwar" style={{ height: 'auto', maxWidth: '100%' }} onClick={() => handleIconClick("insta")}/>
          <div>
            {lastModifiedDate && <p>Site last Updated: {lastModifiedDate}</p>}
          </div>
        </Grid>
      </Grid>        
      <ScrollToTopButton/>
    </Box>
  );
};

export default Footer;
