import * as React from 'react';
import MediaCard from '../MediaCard';
import { Container, Paper, Grid } from '@mui/material';
import LeftMenu from '../LeftMenu';
import TrackPageAnalytics from '../TrackPageAnalytics';
import msg from './hybris_message';
import config from '../config';
import { Link } from 'react-router-dom';
import image1 from '../images/hybrisProjectImportIntellij/image1.png';
import image2 from '../images/hybrisProjectImportIntellij/image2.png';
import image3 from '../images/hybrisProjectImportIntellij/image3.png';
import image4 from '../images/hybrisProjectImportIntellij/image4.png';
import image5 from '../images/hybrisProjectImportIntellij/image5.png';
import image6 from '../images/hybrisProjectImportIntellij/image6.png';
import image7 from '../images/hybrisProjectImportIntellij/image7.png';
import image8 from '../images/hybrisProjectImportIntellij/image8.png';
import image9 from '../images/hybrisProjectImportIntellij/image9.png';
import image10 from '../images/hybrisProjectImportIntellij/image10.png';
import image11 from '../images/hybrisProjectImportIntellij/image11.png';
import image12 from '../images/hybrisProjectImportIntellij/image12.png';
import image13 from '../images/hybrisProjectImportIntellij/image13.png';
import image14 from '../images/hybrisProjectImportIntellij/image14.png';
import image15 from '../images/hybrisProjectImportIntellij/image15.png';
import image16 from '../images/hybrisProjectImportIntellij/image16.png';


const HybrisProjectImportIntellij = () => {
    const {textContent1, textContent2, textContent3, textContent4,
        textContent5, textContent6, textContent7, textContent8,
        textContent9, textContent10, textContent11, textContent12,
        textContent13, textContent14, textContent15, textContent16,
        textContent17} = msg.hybrisProjectImportIntellij[0];
    return(
        <div id="hybris-project-import-intellij">
        <TrackPageAnalytics pagename="HybrisProjectImport"/>
        <Container maxWidth="xl" sx={{ marginTop: 4 }}>          
            <Paper elevation={2} sx={{ padding: 3, borderRadius: 4 }}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <LeftMenu />
                </Grid>          
                <Grid item xs={8}>
                    <MediaCard
                    content="How to import Hybris project into intellij"
                    cardStyle={{ maxWidth: '100%', backgroundColor: '#1CB5E0', textAlign:'center' }}
                    />
                    <h4>{textContent1}</h4>
                    <p dangerouslySetInnerHTML={{ __html: textContent2 }} />
                    <Link to={config.uri_hybrisLocalSetup}>Hybris local setup guide</Link>
                    <p dangerouslySetInnerHTML={{ __html: textContent3 }} />
                    <img src={image1} alt="Kshitij Wardhan Ahirwar" style={{ height: 'auto', maxWidth: '100%', border: '1px solid #00ff00' }}/><br/>
                    <p dangerouslySetInnerHTML={{ __html: textContent4 }} />
                    <img src={image2} alt="Kshitij Wardhan Ahirwar" style={{ height: 'auto', maxWidth: '100%', border: '1px solid #00ff00' }}/><br/>
                    <p dangerouslySetInnerHTML={{ __html: textContent5 }} />
                    <img src={image3} alt="Kshitij Wardhan Ahirwar" style={{ height: 'auto', maxWidth: '100%', border: '1px solid #00ff00' }}/><br/>
                    <p></p>
                    <img src={image4} alt="Kshitij Wardhan Ahirwar" style={{ height: 'auto', maxWidth: '100%', border: '1px solid #00ff00' }}/><br/>
                    <p dangerouslySetInnerHTML={{ __html: textContent6 }} />
                    <img src={image5} alt="Kshitij Wardhan Ahirwar" style={{ height: 'auto', maxWidth: '100%', border: '1px solid #00ff00' }}/><br/>
                    <p dangerouslySetInnerHTML={{ __html: textContent7 }} />
                    <img src={image6} alt="Kshitij Wardhan Ahirwar" style={{ height: 'auto', maxWidth: '100%', border: '1px solid #00ff00' }}/><br/>
                    <p dangerouslySetInnerHTML={{ __html: textContent8 }} />
                    <img src={image7} alt="Kshitij Wardhan Ahirwar" style={{ height: 'auto', maxWidth: '100%', border: '1px solid #00ff00' }}/><br/>
                    <p dangerouslySetInnerHTML={{ __html: textContent9 }} />
                    <img src={image8} alt="Kshitij Wardhan Ahirwar" style={{ height: 'auto', maxWidth: '100%', border: '1px solid #00ff00' }}/><br/>
                    <p dangerouslySetInnerHTML={{ __html: textContent10 }} />
                    <img src={image9} alt="Kshitij Wardhan Ahirwar" style={{ height: 'auto', maxWidth: '100%', border: '1px solid #00ff00' }}/><br/>
                    <p dangerouslySetInnerHTML={{ __html: textContent11 }} />
                    <img src={image10} alt="Kshitij Wardhan Ahirwar" style={{ height: 'auto', maxWidth: '100%', border: '1px solid #00ff00' }}/><br/>
                    <p dangerouslySetInnerHTML={{ __html: textContent12 }} />
                    <img src={image11} alt="Kshitij Wardhan Ahirwar" style={{ height: 'auto', maxWidth: '100%', border: '1px solid #00ff00' }}/><br/>
                    <p dangerouslySetInnerHTML={{ __html: textContent13 }} />
                    <img src={image12} alt="Kshitij Wardhan Ahirwar" style={{ height: 'auto', maxWidth: '100%', border: '1px solid #00ff00' }}/><br/>
                    <p dangerouslySetInnerHTML={{ __html: textContent14 }} />
                    <img src={image13} alt="Kshitij Wardhan Ahirwar" style={{ height: 'auto', maxWidth: '100%', border: '1px solid #00ff00' }}/><br/>
                    <p dangerouslySetInnerHTML={{ __html: textContent15 }} />
                    <img src={image14} alt="Kshitij Wardhan Ahirwar" style={{ height: 'auto', maxWidth: '100%', border: '1px solid #00ff00' }}/><br/>
                    <p dangerouslySetInnerHTML={{ __html: textContent16 }} />
                    <img src={image15} alt="Kshitij Wardhan Ahirwar" style={{ height: 'auto', maxWidth: '100%', border: '1px solid #00ff00' }}/><br/>
                    <p dangerouslySetInnerHTML={{ __html: textContent17 }} />
                    <img src={image16} alt="Kshitij Wardhan Ahirwar" style={{ height: 'auto', maxWidth: '100%', border: '1px solid #00ff00' }}/><br/>
                    <p dangerouslySetInnerHTML={{ __html: msg.hybrisLocalSetupGuide[0].textContent25 }} />

                </Grid>
            </Grid>
            </Paper>
        </Container>
    </div>
    );
}
export default HybrisProjectImportIntellij;