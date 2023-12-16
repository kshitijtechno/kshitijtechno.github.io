import { Container, Paper } from '@mui/material';
import TrackPageAnalytics from '../TrackPageAnalytics';
import JavaInterview from './JavaInterview';

const Java = () => {
  const scrollToSection = (id, event) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
    return (
        <div>
          <TrackPageAnalytics pagename="Java"/>
            <Container maxWidth="lg" sx={{ marginTop: 4 }}>        
              <Paper elevation={2} sx={{ padding: 3, borderRadius: 4 }}>
              <nav>
                  <ul>
                    <li>
                      <a href="#java-interview" onClick={(e) => scrollToSection('java-interview', e)}>
                        Java Interview Questions and Answers
                      </a>
                    </li>
                  </ul>
                </nav>
                <JavaInterview/>
                
              </Paper>
            </Container>
        </div>
    );
}

export default Java;