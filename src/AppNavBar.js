import React from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import profilePic from './images/1.png';
import { Link, useNavigate } from 'react-router-dom';
import config from './config';
import Collapse from '@mui/material/Collapse';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import OndemandVideoRoundedIcon from '@mui/icons-material/OndemandVideoRounded';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const AppNavBar = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [productMenuOpen, setProductMenuOpen] = React.useState(null);
  const [hybrisMenuOpen, setHybrisMenuOpen] = React.useState(null);
  const [quizMenuOpen, setQuizMenuOpen] = React.useState(null);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const navigate = useNavigate();

  const handleAvatarClick = () => {
    navigate('/');
  };

  const handleMenuOpen = (menu, anchorElSetter) => (event) => {
    anchorElSetter(event.currentTarget);
  };

  const handleMenuClose = (anchorElSetter) => {
    anchorElSetter(null);
  };

  return (
    <>
      <AppBar position="fixed" className="appBar">
        <Toolbar>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton
              sx={{ p: 1 }}
              onClick={toggleDrawer(true)}
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
              <List>
                <ListItem button component={Link} to="/" onClick={toggleDrawer(false)}>
                  <HomeRoundedIcon sx={{ color: "#ece509" }} />&nbsp;
                  <ListItemText primary={config.menuItem1} />
                </ListItem>
                <ListItem button onClick={handleMenuOpen('product', setProductMenuOpen)} style={{ paddingLeft: '20px' }}>
                  <FontAwesomeIcon icon={faStar} size="sm" style={{ color: "#ece509" }} />&nbsp;
                  <ListItemText primary={config.menuItem2} />
                  <KeyboardArrowDownIcon />
                </ListItem>
                <Collapse in={Boolean(productMenuOpen)}>
                  <List component="div" disablePadding>
                    <ListItem button component={Link} to={config.uri_products_dixnary} onClick={toggleDrawer(false)} style={{ paddingLeft: '40px' }}>
                      <ListItemText primary="Dixnary" />
                    </ListItem>
                  </List>
                </Collapse>
                <ListItem button onClick={handleMenuOpen('hybris', setHybrisMenuOpen)} style={{ paddingLeft: '20px' }}>
                  <AutoStoriesRoundedIcon sx={{ color: "#ece509" }} />&nbsp;
                  <ListItemText primary={config.menuItem3} />
                  <KeyboardArrowDownIcon />
                </ListItem>
                <Collapse in={Boolean(hybrisMenuOpen)}>
                  <List component="div" disablePadding>
                    <ListItem button component={Link} to={config.uri_hybrisInterview} onClick={toggleDrawer(false)} style={{ paddingLeft: '40px' }}>
                      <ListItemText primary="Hybris" />
                    </ListItem>
                    <ListItem button component={Link} to={config.uri_javaInterview} onClick={toggleDrawer(false)} style={{ paddingLeft: '40px' }}>
                      <ListItemText primary="Java" />
                    </ListItem>
                  </List>
                </Collapse>
                <ListItem button onClick={handleMenuOpen('hybris', setQuizMenuOpen)} style={{ paddingLeft: '20px' }}>
                  <EmojiEventsRoundedIcon sx={{ color: "#ece509" }} />&nbsp;
                  <ListItemText primary={config.menuItem5} />
                  <KeyboardArrowDownIcon />
                </ListItem>
                <Collapse in={Boolean(quizMenuOpen)}>
                  <List component="div" disablePadding>
                    <ListItem button component={Link} to={config.uri_hybrisquiz} onClick={toggleDrawer(false)} style={{ paddingLeft: '40px' }}>
                      <ListItemText primary="Hybris" />
                    </ListItem>
                    <ListItem button component={Link} to={config.uri_freerecharge} onClick={toggleDrawer(false)} style={{ paddingLeft: '40px' }}>
                      <ListItemText primary="Free Recharge" />
                    </ListItem>
                  </List>
                </Collapse>
                <ListItem button component={Link} to="/videos" onClick={toggleDrawer(false)}>
                  <OndemandVideoRoundedIcon sx={{ color: "#ece509" }} />&nbsp;
                  <ListItemText primary={config.menuItem4} />
                </ListItem>
              </List>
            </Drawer>
          </Box>

          <Box sx={{ flexGrow: 1 }}>
            <img src={profilePic} alt="Kshitij Wardhan Ahirwar" height="50" onClick={handleAvatarClick} />
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            <Button color="inherit" component={Link} to="/">
              <HomeRoundedIcon sx={{ color: "#ece509" }} />&nbsp;
              {config.menuItem1}
            </Button>

            <Button
              color="inherit"
              onClick={handleMenuOpen('product', setProductMenuOpen)}
              id="product-menu"
              aria-controls={productMenuOpen ? 'product-basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={productMenuOpen ? 'true' : undefined}
              endIcon={<KeyboardArrowDownIcon />}
            >
              <FontAwesomeIcon icon={faStar} size="sm" style={{ color: "#ece509" }} />&nbsp;
              {config.menuItem2}
            </Button>
            <Menu
              id="product-basic-menu"
              anchorEl={productMenuOpen}
              open={Boolean(productMenuOpen)}
              onClose={() => handleMenuClose(setProductMenuOpen)}
              MenuListProps={{ 'aria-labelledby': 'product-menu' }}
            >
              <MenuItem onClick={() => handleMenuClose(setProductMenuOpen)}>
                <Button color="inherit" component={Link} to={config.uri_products_dixnary}>
                  Dixnary
                </Button>
              </MenuItem>
            </Menu>

            <Button
              color="inherit"
              onClick={handleMenuOpen('hybris', setHybrisMenuOpen)}
              id="hybris-menu"
              aria-controls={hybrisMenuOpen ? 'hybris-basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={hybrisMenuOpen ? 'true' : undefined}
              endIcon={<KeyboardArrowDownIcon />}
            >
              <AutoStoriesRoundedIcon sx={{ color: "#ece509" }} />&nbsp;
              {config.menuItem3}
            </Button>
            <Menu
              id="hybris-basic-menu"
              anchorEl={hybrisMenuOpen}
              open={Boolean(hybrisMenuOpen)}
              onClose={() => handleMenuClose(setHybrisMenuOpen)}
              MenuListProps={{ 'aria-labelledby': 'hybris-menu' }}
            >
              <MenuItem onClick={() => handleMenuClose(setHybrisMenuOpen)}>
                <Button color="inherit" component={Link} to={config.uri_hybrisInterview}>
                  Hybris
                </Button>
              </MenuItem>
              <MenuItem onClick={() => handleMenuClose(setHybrisMenuOpen)}>
                <Button color="inherit" component={Link} to={config.uri_javaInterview}>
                  Java
                </Button>
              </MenuItem>
            </Menu>

            <Button
              color="inherit"
              onClick={handleMenuOpen('quiz', setQuizMenuOpen)}
              id="quiz-menu"
              aria-controls={quizMenuOpen ? 'quiz-basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={quizMenuOpen ? 'true' : undefined}
              endIcon={<KeyboardArrowDownIcon />}
            >
              <EmojiEventsRoundedIcon sx={{ color: "#ece509" }} />&nbsp;
              {config.menuItem5}
            </Button>
            <Menu
              id="quiz-basic-menu"
              anchorEl={quizMenuOpen}
              open={Boolean(quizMenuOpen)}
              onClose={() => handleMenuClose(setQuizMenuOpen)}
              MenuListProps={{ 'aria-labelledby': 'quiz-menu' }}
            >
              <MenuItem onClick={() => handleMenuClose(setQuizMenuOpen)}>
                <Button color="inherit" component={Link} to={config.uri_hybrisquiz}>
                  Hybris
                </Button>
              </MenuItem>
              <MenuItem onClick={() => handleMenuClose(setQuizMenuOpen)}>
                <Button color="inherit" component={Link} to={config.uri_freerecharge}>
                  Free Recharge
                </Button>
              </MenuItem>
            </Menu>

            <Button color="inherit" component={Link} to="/videos">
              <OndemandVideoRoundedIcon sx={{ color: "#ece509" }} />&nbsp;
              {config.menuItem4}
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default AppNavBar;
