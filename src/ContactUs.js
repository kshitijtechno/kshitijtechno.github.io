import React from 'react';
import config from './config';
import MediaCard from './MediaCard';
import {
    Grid,
  } from '@mui/material';

const ContactUs = () => {
  return (
    <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                <iframe title="Contact Form" src="https://docs.google.com/forms/d/e/1FAIpQLSd0QPy7WA_42VhRkpGyclDSECklL260NoL_z2ovehDCt0ujpg/viewform?embedded=true" width="640" height="991" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
                </Grid>
                <Grid item xs={12} md={6} sx={{ marginTop: 2 }}>
                <MediaCard
        title={config.contactus_modeldata_title}
        content={config.contactus_modeldata_data}
        maxWidth={600}
                />
<p></p>
<MediaCard
        title={config.contactus_modeldata_careers_title}
        content={config.contactus_modeldata_careers_message}
        maxWidth={600}
                />
                </Grid>
    </Grid>
                
  );
};

export default ContactUs;
