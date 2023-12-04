import { Container, Paper } from '@mui/material';
import TrackPageAnalytics from './TrackPageAnalytics';


const Disclaimer = () => {
    return (
        <div>
            <TrackPageAnalytics pagename="Disclaimer"/>
            <Container maxWidth="lg" sx={{ marginTop: 4 }}>        
              <Paper elevation={2} sx={{ padding: 3, borderRadius: 4 }}>
                 <h1>Disclaimer for Kshitij Techno or Kshitij Wardhan Ahirwar</h1>
                 <p>Last updated: 3rd Dec 2023</p>
                 <ol>
                    <li>
                        <strong>Use of Website:</strong>
                        <p>The information provided on Kshitij Techno (the "Service") is for general informational purposes only. The content is provided by Kshitij Techno and while we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.</p>
                    </li>

                    <li>
                        <strong>External Links:</strong>
                        <p>Kshitij Techno may contain links to external websites that are not provided or maintained by or in any way affiliated with Kshitij Techno. Please note that Kshitij Techno or Kshitij Wardhan Ahirwar does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.</p>
                    </li>

                    <li>
                        <strong>Affiliate Disclaimer:</strong>
                        <p>Some links within the Service may be affiliate links. This means that Kshitij Techno or Kshitij Wardhan Ahirwar may earn a commission if you click on the link and make a purchase. However, this will not incur any additional cost to you.</p>
                    </li>

                    <li>
                        <strong>Content Changes:</strong>
                        <p>Kshitij Techno or Kshitij Wardhan Ahirwar reserves the right to make additions, deletions, or modifications to the content on the Service at any time without prior notice.</p>
                    </li>

                    <li>
                        <strong>No Guarantees:</strong>
                        <p>Kshitij Techno or Kshitij Wardhan Ahirwar does not warrant that the website is free of viruses or other harmful components.</p>
                    </li>

                    <li>
                        <strong>Limitation of Liability:</strong>
                        <p>In no event shall Kshitij Techno or Kshitij Wardhan Ahirwar be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence, or other torts, arising out of or in connection with the use of the Service or the contents of the Service.</p>
                    </li>

                    <li>
                        <strong>Changes to Disclaimer:</strong>
                        <p>Kshitij Techno reserves the right to amend or update this disclaimer at any time without notice.</p>
                    </li>
                </ol>
                <p>By using the Service, you hereby consent to our disclaimer and agree to its terms.</p>

                <p>If you have any questions about this disclaimer, please contact us at codingcrust@gmail.com.</p>
                <address>
                    Kshitij Techno<br />
                    Kshitij Wardhan Ahirwar<br />
                    codingrust@gmail.com<br />
                </address>
              </Paper>
            </Container>
        </div>
    );
}

export default Disclaimer;