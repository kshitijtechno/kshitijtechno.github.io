import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import profilePic from './images/1.jpg';
import { Link, useNavigate } from 'react-router-dom';
import config from './config';

const AppNavBar = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

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
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              <List>
                <ListItem button component={Link} to="/">
                  <ListItemText primary={config.menuItem1} />
                </ListItem>
                <ListItem button component={Link} to="/dashboard">
                  <ListItemText primary={config.menuItem2} />
                </ListItem>
                <ListItem button component={Link} to="/placeorder">
                  <ListItemText primary={config.menuItem3} />
                </ListItem>
                <ListItem button component={Link} to="/placeorder">
                  <ListItemText primary={config.menuItem4} />
                </ListItem>
              </List>
            </Drawer>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton sx={{ p: 1 }} onClick={handleAvatarClick}>
              <Avatar alt="K" src={profilePic} />
            </IconButton>
          </Box>
          <Typography variant="h6" sx={{ flexGrow: 1, color: 'black' }}>
            {config.siteName}
          </Typography>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            <Button color="inherit" component={Link} to="/">
            {config.menuItem1}
            </Button>
            <Button color="inherit" component={Link} to="/dashboard">
            {config.menuItem2}
            </Button>
            <Button color="inherit" component={Link} to="/placeorder">
            {config.menuItem3}
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default AppNavBar;
