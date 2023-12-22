import * as React from 'react';
import { Container, Paper, Grid } from '@mui/material';
import MediaCard from '../MediaCard';
import CodeSnippet from '../CodeSnippet';
import LeftMenu from '../LeftMenu';
import TrackPageAnalytics from '../TrackPageAnalytics';
import config from './hybris_message';

import image1 from '../images/hybrisInterview/image1.png';


function HybrisInterview() {
  return (
    <div id="hybris-interview">
      <TrackPageAnalytics pagename="HybrisInterview"/>
      <Container maxWidth="xl" sx={{ marginTop: 4 }}>          
        <Paper elevation={2} sx={{ padding: 3, borderRadius: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <LeftMenu />
          </Grid>          
          <Grid item xs={8}>
                <MediaCard
                  content="SAP Commerce cloud interview questions"
                  cardStyle={{ maxWidth: '100%', backgroundColor: '#1CB5E0', textAlign:'center' }}
                  />
                {config.hybrisInterviewQA.map((data, index) => (
                    <div key={index+1}>
                      <h3>{index+1}) {data.question}</h3>
                      <p dangerouslySetInnerHTML={{ __html: data.answer }} />
                      {data.code && (
                        <CodeSnippet language="javascript" code={data.code} />
                      )}
                      {data.image && data.image === "image1" && (
                        <img src={image1} alt="Kshitij Wardhan Ahirwar" style={{ height: 'auto', maxWidth: '100%', border: '1px solid #00ff00' }}/>
                      )}
                    </div>            
                  ))}
                  </Grid>
            </Grid>        
        </Paper>
      </Container>
    </div>
  );
}
export default HybrisInterview;