import * as React from 'react';
import MediaCard from '../MediaCard';
import { Container, Paper } from '@mui/material';
import TrackPageAnalytics from '../TrackPageAnalytics';
import config from '../config';
import image1 from '../images/hybrisLocalSetupGuide/sapjdkimg1.png';
import image2 from '../images/hybrisLocalSetupGuide/image2.png';
import image3 from '../images/hybrisLocalSetupGuide/image3.png';
import image4 from '../images/hybrisLocalSetupGuide/image4.png';
import image5 from '../images/hybrisLocalSetupGuide/image5.png';
import image6 from '../images/hybrisLocalSetupGuide/image6.png';
import image7 from '../images/hybrisLocalSetupGuide/image7.png';
import image8 from '../images/hybrisLocalSetupGuide/image8.png';
import image9 from '../images/hybrisLocalSetupGuide/image9.png';
import image10 from '../images/hybrisLocalSetupGuide/image10.png';
import image11 from '../images/hybrisLocalSetupGuide/image11.png';
import image12 from '../images/hybrisLocalSetupGuide/image12.png';
import image13 from '../images/hybrisLocalSetupGuide/image13.png';
import image14 from '../images/hybrisLocalSetupGuide/image14.png';
import image15 from '../images/hybrisLocalSetupGuide/image15.png';
import image16 from '../images/hybrisLocalSetupGuide/image16.png';
import image17 from '../images/hybrisLocalSetupGuide/image17.png';
import image18 from '../images/hybrisLocalSetupGuide/image18.png';
import image19 from '../images/hybrisLocalSetupGuide/image19.png';
import image20 from '../images/hybrisLocalSetupGuide/image20.png';
import image21 from '../images/hybrisLocalSetupGuide/image21.png';
import image22 from '../images/hybrisLocalSetupGuide/image22.png';
import image23 from '../images/hybrisLocalSetupGuide/image23.png';
import image24 from '../images/hybrisLocalSetupGuide/image24.png';
import image25 from '../images/hybrisLocalSetupGuide/image25.png';
import image26 from '../images/hybrisLocalSetupGuide/image26.png';
import image27 from '../images/hybrisLocalSetupGuide/image27.png';
import image28 from '../images/hybrisLocalSetupGuide/image28.png';
import image29 from '../images/hybrisLocalSetupGuide/image29.png';
import image30 from '../images/hybrisLocalSetupGuide/image30.png';


function HybrisLocalSetupGuide() {
  const { textContent1, textContent2, textContent3, textContent4, textContent5,
     textContent6, textContent7, textContent8, textContent9, textContent10,
     textContent11, textContent12,textContent13, textContent14,
     textContent15, textContent16, textContent17, textContent18,
     textContent19, textContent20, textContent21, textContent22, 
     textContent23, textContent24, textContent25, textContent26,
     textContent27, textContent28 } = config.hybrisLocalSetupGuide[0];
  return (
    <div id="hybris-local">
      <TrackPageAnalytics pagename="HybrisLocalSetup"/>
      <Container maxWidth="lg" sx={{ marginTop: 4 }}>        
        <Paper elevation={2} sx={{ padding: 3, borderRadius: 4 }}>
              
        <MediaCard
        content="How to setup SAP commerce cloud in local system for development"
        cardStyle={{ maxWidth: '100%', backgroundColor: '#1CB5E0', textAlign:'center' }}
        />
        <h4>{textContent1}</h4>
        {textContent2}
        <p dangerouslySetInnerHTML={{ __html: textContent3 }} />
        <img src={image1} alt="Kshitij Wardhan Ahirwar" style={{ height: '300px', width: '700px', border: '1px solid #00ff00' }}/><br/>
        <img src={image4} alt="Kshitij Wardhan Ahirwar" style={{ height: '100px', width: '700px', border: '1px solid #00ff00' }}/><br/>
        <p dangerouslySetInnerHTML={{ __html: textContent4 }} />
        <img src={image5} alt="Kshitij Wardhan Ahirwar" style={{ height: '100px', width: '700px', border: '1px solid #00ff00' }}/><br/>
        <p dangerouslySetInnerHTML={{ __html: textContent5 }} />
        <img src={image2} alt="Kshitij Wardhan Ahirwar" style={{ height: '300px', width: '700px', border: '1px solid #00ff00' }}/><br/>
        <img src={image3} alt="Kshitij Wardhan Ahirwar" style={{ height: '300px', width: '700px', border: '1px solid #00ff00' }}/><br/>
        <p dangerouslySetInnerHTML={{ __html: textContent6 }} />
        <img src={image6} alt="Kshitij Wardhan Ahirwar" style={{ height: '100px', width: '1100px', border: '1px solid #00ff00' }}/><br/>
        {textContent7}
        <img src={image7} alt="Kshitij Wardhan Ahirwar" style={{ height: '100px', width: '500px', border: '1px solid #00ff00' }}/><br/>
        <p dangerouslySetInnerHTML={{ __html: textContent8 }} />
        <img src={image8} alt="Kshitij Wardhan Ahirwar" style={{ height: '100px', width: '1100px', border: '1px solid #00ff00' }}/><br/>
        {textContent9}
        <img src={image9} alt="Kshitij Wardhan Ahirwar" style={{ height: '300px', width: '700px', border: '1px solid #00ff00' }}/><br/>
        <p dangerouslySetInnerHTML={{ __html: textContent10 }} />
        <img src={image10} alt="Kshitij Wardhan Ahirwar" style={{ height: '100px', width: '1100px', border: '1px solid #00ff00' }}/><br/>
        <p dangerouslySetInnerHTML={{ __html: textContent11 }} />
        <img src={image11} alt="Kshitij Wardhan Ahirwar" style={{ height: '300px', width: '700px', border: '1px solid #00ff00' }}/><br/>
        <p dangerouslySetInnerHTML={{ __html: textContent12 }} />
        <img src={image12} alt="Kshitij Wardhan Ahirwar" style={{ height: '300px', width: '700px', border: '1px solid #00ff00' }}/><br/>
        <p></p>
        <img src={image13} alt="Kshitij Wardhan Ahirwar" style={{ height: '300px', width: '700px', border: '1px solid #00ff00' }}/><br/>
        <p dangerouslySetInnerHTML={{ __html: textContent13 }} />
        <img src={image14} alt="Kshitij Wardhan Ahirwar" style={{ height: '300px', width: '700px', border: '1px solid #00ff00' }}/><br/>
        <p dangerouslySetInnerHTML={{ __html: textContent14 }} />
        <img src={image15} alt="Kshitij Wardhan Ahirwar" style={{ height: '100px', width: '1100px', border: '1px solid #00ff00' }}/><br/>
        <p dangerouslySetInnerHTML={{ __html: textContent15 }} />
        <img src={image16} alt="Kshitij Wardhan Ahirwar" style={{ height: '100px', width: '1100px', border: '1px solid #00ff00' }}/><br/>
        <p dangerouslySetInnerHTML={{ __html: textContent16 }} />
        <img src={image17} alt="Kshitij Wardhan Ahirwar" style={{ height: '100px', width: '1100px', border: '1px solid #00ff00' }}/><br/>
        <p dangerouslySetInnerHTML={{ __html: textContent17 }} />
        <img src={image18} alt="Kshitij Wardhan Ahirwar" style={{ height: '100px', width: '1100px', border: '1px solid #00ff00' }}/><br/>
        <p dangerouslySetInnerHTML={{ __html: textContent18 }} />
        <img src={image19} alt="Kshitij Wardhan Ahirwar" style={{ height: '100px', width: '1100px', border: '1px solid #00ff00' }}/><br/>
        <p dangerouslySetInnerHTML={{ __html: textContent19 }} />
        <img src={image20} alt="Kshitij Wardhan Ahirwar" style={{ height: '300px', width: '700px', border: '1px solid #00ff00' }}/><br/>
        <p dangerouslySetInnerHTML={{ __html: textContent20 }} />
        <img src={image21} alt="Kshitij Wardhan Ahirwar" style={{ height: '300px', width: '700px', border: '1px solid #00ff00' }}/><br/>
        <p dangerouslySetInnerHTML={{ __html: textContent21 }} />
        <img src={image22} alt="Kshitij Wardhan Ahirwar" style={{ height: '300px', width: '700px', border: '1px solid #00ff00' }}/><br/>
        <p dangerouslySetInnerHTML={{ __html: textContent26 }} />
        <img src={image26} alt="Kshitij Wardhan Ahirwar" style={{ height: '300px', width: '700px', border: '1px solid #00ff00' }}/><br/>
        <p dangerouslySetInnerHTML={{ __html: textContent22 }} />
        <img src={image23} alt="Kshitij Wardhan Ahirwar" style={{ height: '100px', width: '1100px', border: '1px solid #00ff00' }}/><br/>
        <p dangerouslySetInnerHTML={{ __html: textContent23 }} />
        <img src={image24} alt="Kshitij Wardhan Ahirwar" style={{ height: '100px', width: '500px', border: '1px solid #00ff00' }}/><br/>
        <p dangerouslySetInnerHTML={{ __html: textContent24 }} />
        <img src={image25} alt="Kshitij Wardhan Ahirwar" style={{ height: '300px', width: '700px', border: '1px solid #00ff00' }}/><br/>
        <p dangerouslySetInnerHTML={{ __html: textContent27 }} />
        <img src={image27} alt="Kshitij Wardhan Ahirwar" style={{ height: '300px', width: '700px', border: '1px solid #00ff00' }}/><br/>
        <p></p>
        <img src={image28} alt="Kshitij Wardhan Ahirwar" style={{ height: '300px', width: '700px', border: '1px solid #00ff00' }}/><br/>
        <p dangerouslySetInnerHTML={{ __html: textContent28 }} />
        <img src={image29} alt="Kshitij Wardhan Ahirwar" style={{ height: '300px', width: '700px', border: '1px solid #00ff00' }}/><br/>
        <p></p>
        <img src={image30} alt="Kshitij Wardhan Ahirwar" style={{ height: '300px', width: '700px', border: '1px solid #00ff00' }}/><br/>
        <p dangerouslySetInnerHTML={{ __html: textContent25 }} />
        </Paper>
        </Container>
    </div>
  );
}
export default HybrisLocalSetupGuide;