import * as React from 'react';
import MediaCard from '../MediaCard';
import { Container, Paper, Grid } from '@mui/material';
import LeftMenu from '../LeftMenu';
import TrackPageAnalytics from '../TrackPageAnalytics';
//import config from '../config';
//import CodeSnippet from '../CodeSnippet';



function JavaInterview() {
  return (
    <div id="java-interview">
      <TrackPageAnalytics pagename="JavaInterview"/>
      <Container maxWidth="xl" sx={{ marginTop: 4 }}>          
        <Paper elevation={2} sx={{ padding: 3, borderRadius: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <LeftMenu />
          </Grid>          
          <Grid item xs={8}>
                <MediaCard
                  content="Java interview questions and answers"
                  cardStyle={{ maxWidth: '100%', backgroundColor: '#1CB5E0', textAlign:'center' }}
                  />
                Work is in progress. Thanks for visiting.
                </Grid>
        </Grid>
    
              
        
        </Paper>
        </Container>
    </div>
  );
}
export default JavaInterview;