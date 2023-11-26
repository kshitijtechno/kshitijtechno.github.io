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
                    {config.youtubeVideos.map((video) => (
                        <YoutubeMediaCard
                        videoId={video.videoId}
                        title={video.title}
                        content={video.content}                    
                    />
                    ))};
                </Grid>
                
    </Grid>
                
  );
};

export default Videos;
