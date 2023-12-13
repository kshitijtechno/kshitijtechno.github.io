import * as React from 'react';
import MediaCard from '../MediaCard';
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








//import CodeSnippet from '../CodeSnippet';


function HybrisLocalSetupGuide() {
  const { textContent1, textContent2, textContent3, textContent4, textContent5,
     textContent6, textContent7, textContent8, textContent9, textContent10,
     textContent11, textContent12 } = config.hybrisLocalSetupGuide[0];
  return (
    <div id="hybris-local">
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





    </div>
  );
}
export default HybrisLocalSetupGuide;