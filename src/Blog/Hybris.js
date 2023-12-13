import { Container, Paper } from '@mui/material';
import TrackPageAnalytics from '../TrackPageAnalytics';
import HybrisLocalSetupGuide from './HybrisLocalSetupGuide';
import HybrisInterview from './HybrisInterview';

const Hybris = () => {
  const scrollToSection = (id, event) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'auto' });
    }
  };
    return (
        <div>
          <TrackPageAnalytics pagename="Hybris"/>
            <Container maxWidth="lg" sx={{ marginTop: 4 }}>        
              <Paper elevation={2} sx={{ padding: 3, borderRadius: 4 }}>
              <nav>
                  <ul>
                    <li>
                      <a href="#hybris-interview" onClick={(e) => scrollToSection('hybris-interview', e)}>
                        Hybris Interview Questions and Answers
                      </a>
                    </li>
                    <li>
                      <a href="#hybris-local" onClick={(e) => scrollToSection('hybris-local', e)}>
                        Hybris local setup guide
                      </a>
                    </li>
                    <li>
                      <a href="#hybris-local" onClick={(e) => scrollToSection('hybris-local', e)}>
                        Hybris local setup common issues
                      </a>
                    </li>
                  </ul>
                </nav>
                <HybrisInterview/>
                <HybrisLocalSetupGuide/>
                
              </Paper>
            </Container>
        </div>
    );
}

export default Hybris;