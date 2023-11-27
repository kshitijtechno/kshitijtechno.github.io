import React from 'react';
import config from './config';
import MediaCard from './MediaCard';
import YoutubeMediaCard from './YoutubeMediaCard';
import {
  Grid,
} from '@mui/material';
import { Helmet } from 'react-helmet';

const Videos = () => {
  return (
    <div>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <MediaCard
          content={config.youtube_modeldata_message}
          cardStyle={{ maxWidth: '100%', backgroundColor:'#c8cfd1' }}
        />
      </Grid>
      <Grid item xs={4}/>
       <Grid item xs={4}>
       <MediaCard
          content="Technology"
          cardStyle={{ maxWidth: '100%', backgroundColor: '#1CB5E0', textAlign:'center' }}
        />
       </Grid>
      <Grid item xs={12}>
          {config.youtubeVideosTechnology.map((video, index) => (
            <YoutubeMediaCard
              key={index}
              videoId={video.videoId}
              title={video.title}
              content={video.content}
            />
          ))};
       </Grid>
       <Grid item xs={4}/>
       <Grid item xs={4}>
       <MediaCard
          content="VBlog/Unboxing/Others"
          cardStyle={{ maxWidth: '100%', backgroundColor: '#1CB5E0', textAlign:'center' }}
        />
       </Grid>
       <Grid item xs={12}>
          {config.youtubeVideosMisc.map((video, index) => (
            <YoutubeMediaCard
             key={index}
              videoId={video.videoId}
              title={video.title}
              content={video.content}
            />
          ))};
       </Grid>
    </Grid>
    <Helmet>
    <title>Videos</title>
  </Helmet>
  </div>

  );
};

export default Videos;
