import * as React from 'react';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import {
    Container,
    Grid,
    Paper,
  } from '@mui/material';

export default function YoutubeMediaCard({ videoId, title, content }) {
  return (
    <Container maxWidth="lg" sx={{ marginTop: 1 }}>
        <Paper elevation={2} sx={{ padding: 1, borderRadius: 4 }}>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <CardMedia>
                        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </CardMedia> 
                </Grid>
                <Grid item xs={12} md={6}>
                        <Typography gutterBottom variant="h5" component="div">
                           {title}          
                        </Typography>
                        <Typography variant="body2" color="text.primary">
                           {content}
                        </Typography>        
                </Grid>
            </Grid>      
        </Paper>
    </Container>
  );
}