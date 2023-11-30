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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


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

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
                <ListItem button component={Link} to="/" onClick={toggleDrawer(false)}>
                  <FontAwesomeIcon icon={faStar} size="sm" style={{ color: "#ece509" }} />&nbsp;
                  <ListItemText primary={config.menuItem1} />
                </ListItem>
                <ListItem button component={Link} to="/dashboard" onClick={toggleDrawer(false)}>
                  <FontAwesomeIcon icon={faStar} size="sm" style={{ color: "#ece509" }} />&nbsp;
                  <ListItemText primary={config.menuItem2} />
                </ListItem>
                <ListItem button component={Link} to="/videos" onClick={toggleDrawer(false)}>
                  <FontAwesomeIcon icon={faStar} size="sm" style={{ color: "#ece509" }} />&nbsp;
                  <ListItemText primary={config.menuItem3} />
                </ListItem>
                <ListItem button component={Link} to="/contactus" onClick={toggleDrawer(false)}>
                  <FontAwesomeIcon icon={faStar} size="sm" style={{ color: "#ece509" }} />&nbsp;
                  <ListItemText primary={config.menuItem4} />
                </ListItem>
              </List>
            </Drawer>
          </Box>
          <Box sx={{ flexGrow: 1 }}>            
            <img src={profilePic} alt="Kshitij Wardhan Ahirwar" height="50" onClick={handleAvatarClick}/>
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            <Button color="inherit" component={Link} to="/">
              <FontAwesomeIcon icon={faStar} size="sm" style={{ color: "#ece509" }} />&nbsp;
              {config.menuItem1}
            </Button>
            <Button color="inherit"  onClick={handleClick} id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        endIcon={<KeyboardArrowDownIcon />}>
              <FontAwesomeIcon icon={faStar} size="sm" style={{ color: "#ece509" }} />&nbsp;
              {config.menuItem2}
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>
                <Button color="inherit" component={Link} to="/products">    
                Products
                </Button>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Button color="inherit" component={Link} to="/services">    
                Services
                </Button>
              </MenuItem>
            </Menu>
            <Button color="inherit" component={Link} to="/videos" onClick={toggleDrawer(false)}>
              <FontAwesomeIcon icon={faStar} size="sm" style={{ color: "#ece509" }} />&nbsp;
              {config.menuItem3}
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default AppNavBar;
