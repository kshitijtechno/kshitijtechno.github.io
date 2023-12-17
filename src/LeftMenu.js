import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Paper, Drawer, Hidden, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import config from './config';

const LeftMenu = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleLinkClick = () => {
    handleDrawerClose();
  };

  return (
    <div>
    <Hidden smUp>
      <IconButton onClick={handleDrawerOpen} edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
    </Hidden>
      {/* Visible on larger screens */}
      <Hidden smDown>
        <Container maxWidth="100%">
          <Paper elevation={2} sx={{ borderRight: '1px solid #ccc', padding: 3, borderRadius: 4 }}>
            <div>
              <nav>
                <ul>
                  <h3>Hybris</h3>
                  <li>
                    <Link to={config.uri_hybrisInterview} onClick={handleLinkClick}>
                      Hybris interview
                    </Link>
                  </li>
                  <li>
                    <Link to={config.uri_hybrisLocalSetup} onClick={handleLinkClick}>
                      Hybris local setup guide
                    </Link>
                  </li>
                  <li>
                    <Link to={config.uri_hybrisProjectImportIntellij} onClick={handleLinkClick}>
                      Import hybris project in IntelliJ
                    </Link>
                  </li>
                </ul>
              </nav>
              <hr />
              <nav>
                <ul>
                  <h3>Java</h3>
                  <li>
                    <Link to={config.uri_javaInterview} onClick={handleLinkClick}>
                      Java interview
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </Paper>
        </Container>
      </Hidden>

      <div>
      {/* Visible on smaller screens (mobile) */}
      <Hidden smUp>

        <Drawer
          variant="temporary"
          anchor="left"
          open={isDrawerOpen}
          onClose={handleDrawerClose}
          sx={{ width: '70vw' }}
        >
          <Container>
            <div>
              <nav>
                <ul>
                  <h3>Hybris</h3>
                  <li>
                    <Link to={config.uri_hybrisInterview} onClick={handleLinkClick}>
                      Hybris interview
                    </Link>
                  </li>
                  <li>
                    <Link to={config.uri_hybrisLocalSetup} onClick={handleLinkClick}>
                      Hybris local setup guide
                    </Link>
                  </li>
                  <li>
                    <Link to={config.uri_hybrisLocalSetup} onClick={handleLinkClick}>
                      Import hybris project in IntelliJ
                    </Link>
                  </li>
                </ul>
              </nav>
              <hr />
              <nav>
                <ul>
                  <h3>Java</h3>
                  <li>
                    <Link to={config.uri_javaInterview} onClick={handleLinkClick}>
                      Java interview
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </Container>
        </Drawer>
      </Hidden>
    </div>
    </div>
  );
};

export default LeftMenu;
