import React from 'react';
import { Box, Typography } from '@mui/material';
import config from './config';
import { Link } from 'react-router-dom';
import ScrollToTopButton from './ScrollToTopButton';


const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f5f5f5',
        padding: 3,
        position: 'relative',
        bottom: 0,
        width: '100%',
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
      <ScrollToTopButton/>
    </Box>
    
  );
};

export default Footer;
