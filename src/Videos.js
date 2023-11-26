import React from 'react';
import config from './config';
import MediaCard from './MediaCard';
import YoutubeMediaCard from './YoutubeMediaCard';
import {
    Grid,
  } from '@mui/material';

const Videos = () => {
  return (
    <Grid container spacing={2}>
                
                <Grid item xs={12}>
                <MediaCard
                     content={config.youtube_modeldata_message}
                     maxWidth={"100%"}
                />
                </Grid>
                <Grid item xs={12}>
                <YoutubeMediaCard
                    videoId={config.youtube_videoId_1}
                    title={config.youtube_videoId_1_title}
                    content={config.youtube_videoId_1_content}                    
                />
                <YoutubeMediaCard
                    videoId={config.youtube_videoId_2}
                    title={config.youtube_videoId_2_title}
                    content={config.youtube_videoId_2_content}                    
                />
                </Grid>
                
    </Grid>
                
  );
};

export default Videos;
