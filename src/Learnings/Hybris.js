import { Container, Paper } from '@mui/material';
import TrackPageAnalytics from '../TrackPageAnalytics';
import HybrisInterview from './HybrisInterview';
import { Link } from 'react-router-dom';


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
          <TrackPageAnalytics pagename="HybrisInterview"/>
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
                    <Link to="/learnings/hybris/local-setup">
                      Hybris local setup guide
                    </Link>
                    </li>
                    <li>
                      <a href="#hybris-local" onClick={(e) => scrollToSection('hybris-local', e)}>
                        Hybris local setup common issues
                      </a>
                    </li>
                  </ul>
                </nav>
                <HybrisInterview/>                
              </Paper>
            </Container>
        </div>
    );
}

export default Hybris;