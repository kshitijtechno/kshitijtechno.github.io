import React from 'react';
import config from './config';
import MediaCard from './MediaCard';
import {
    Grid,
  } from '@mui/material';
import TrackPageAnalytics from './TrackPageAnalytics';

const ContactUs = () => {
  return (
    <div>
    <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
            <iframe title="Contact Form" src="https://docs.google.com/forms/d/e/1FAIpQLSd0QPy7WA_42VhRkpGyclDSECklL260NoL_z2ovehDCt0ujpg/viewform?embedded=true" width="640" height="991" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
        </Grid>
        <Grid item xs={12} md={6} sx={{ marginTop: 2 }}>
            <MediaCard
              title={config.contactus_modeldata_title}
              content={config.contactus_modeldata_data}
              cardStyle={{ maxWidth: '600' }}
              cardTitleStyle={{backgroundColor: '#4ac0e3'}}
              />
            <p></p>
            <MediaCard
              title={config.contactus_modeldata_careers_title}
              content={config.contactus_modeldata_careers_message}
              cardStyle={{ maxWidth: '600' }}
              cardTitleStyle={{backgroundColor: '#4ac0e3'}}
              />

             <p></p> 
             <div>
               <iframe title="comment form" src="https://docs.google.com/forms/d/e/1FAIpQLSdCdbMjbDrFCzZRgD96AYZlJAzPwJ6VXKb8ZPKe41b0Z9xcLg/viewform?embedded=true" width="640" height="554" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
             </div>        
            <div>
            </div>

        </Grid>
        
    </Grid>
    <TrackPageAnalytics/></div>
                
  );
};

export default ContactUs;
