import { Container, Paper, Grid } from '@mui/material';
import TrackPageAnalytics from '../TrackPageAnalytics';
import MediaCard from '../MediaCard';
import LeftMenu from '../LeftMenu';
import CodeSnippet from '../CodeSnippet';
import msg from './hybris_message';
import image1 from '../images/hybrisDataModeling/image1.png';
import image2 from '../images/hybrisDataModeling/image2.png';



const HybrisDataModeling = () => {
    const { textContent1, textContent2, textContent3, code1, textContent4, 
        textContent5, textContent6 } = msg.hybrisDataModeling[0];
    return (
        <div id="hybris-items">
        <TrackPageAnalytics pagename="HybrisDataModeling"/>
        <Container maxWidth="xl" sx={{ marginTop: 4 }}>          
            <Paper elevation={2} sx={{ padding: 3, borderRadius: 4 }}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <LeftMenu />
                    </Grid>          
                    <Grid item xs={8}>
                        <MediaCard
                        content="Deep dive into data modeling in SAP Commerce Cloud"
                        cardStyle={{ maxWidth: '100%', backgroundColor: '#1CB5E0', textAlign:'center' }}
                        />
                        <p dangerouslySetInnerHTML={{ __html: textContent1 }} />
                        <img src={image1} alt="Kshitij Wardhan Ahirwar" style={{ height: 'auto', maxWidth: '100%', border: '1px solid #00ff00' }}/><br/>
                        <p dangerouslySetInnerHTML={{ __html: textContent2 }} />
                        <img src={image2} alt="Kshitij Wardhan Ahirwar" style={{ height: 'auto', maxWidth: '100%', border: '1px solid #00ff00' }}/><br/>
                        <p dangerouslySetInnerHTML={{ __html: textContent3 }} />
                        <CodeSnippet language="javascript" code={code1}/>
                        <p dangerouslySetInnerHTML={{ __html: textContent4 }} />
                        <p dangerouslySetInnerHTML={{ __html: textContent5 }} />
                        <p dangerouslySetInnerHTML={{ __html: textContent6 }} />

                    </Grid>
                </Grid>
            </Paper>
            </Container>
        </div>
    
    );
}
export default HybrisDataModeling;