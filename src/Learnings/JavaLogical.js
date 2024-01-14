import * as React from 'react';
import MediaCard from '../MediaCard';
import { Container, Paper, Grid } from '@mui/material';
import LeftMenu from '../LeftMenu';
import TrackPageAnalytics from '../TrackPageAnalytics';
import msg from './hybris_message';
import CodeSnippet from '../CodeSnippet';

import image1 from '../images/hybrisLogical/image1.png';
import image2 from '../images/hybrisLogical/image2.png';


function JavaLogical() {
  const { textContent1, code1, textContent2, code2} = msg.hybrisLogical[0];
  return (
    <div id="java-logical">
      <TrackPageAnalytics pagename="JavaLogical"/>
      <Container maxWidth="xl" sx={{ marginTop: 4 }}>          
        <Paper elevation={2} sx={{ padding: 3, borderRadius: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <LeftMenu />
          </Grid>          
          <Grid item xs={9}>
                <MediaCard
                  content="Java Logical Program"
                  cardStyle={{ maxWidth: '100%', backgroundColor: '#1CB5E0', textAlign:'center' }}
                  />
                <p dangerouslySetInnerHTML={{ __html: textContent1 }} />
                <CodeSnippet language="javascript" code={code1}/>
                <p></p>
                <img src={image1} alt="Kshitij Wardhan Ahirwar" style={{ height: 'auto', maxWidth: '100%', border: '1px solid #00ff00' }}/><br/>
                <p dangerouslySetInnerHTML={{ __html: textContent2 }} />
                <CodeSnippet language="javascript" code={code2}/>
                <p></p>
                <img src={image2} alt="Kshitij Wardhan Ahirwar" style={{ height: 'auto', maxWidth: '100%', border: '1px solid #00ff00' }}/><br/>


          </Grid>
        </Grid>
        </Paper>
        </Container>
    </div>
  );
}
export default JavaLogical;