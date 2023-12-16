import { Link } from 'react-router-dom';
import { Container, Paper } from '@mui/material';
import config from './config';


const LeftMenu = () => {
  return (
    <Container maxWidth="100%">
      <Paper elevation={2} sx={{ borderRight: '1px solid #ccc', padding: 3, borderRadius: 4 }}>
        <div>
          <nav>
            <ul>
              <h3>Hybris</h3>
              <li>
                <Link to={config.uri_hybrisInterview}>Hybris interview</Link>
              </li>
              <li>
                <Link to={config.uri_hybrisLocalSetup}>Hybris local setup guide</Link>
              </li>
              <li>
                <Link to={config.uri_hybrisLocalSetup}>Import hybris project in intellij</Link>
              </li>
            </ul>
          </nav>
          <hr/>
          <nav>
            <ul>
              <h3>Java</h3>
              <li>
                <Link to={config.uri_javaInterview}>Java interview</Link>
              </li>
            </ul>
          </nav>
        </div>
      </Paper>
    </Container>
  );
};

export default LeftMenu;
