import React, { useState, useEffect } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fab from '@mui/material/Fab';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/system';

const ScrollTopButton = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(2),
  right: theme.spacing(2),
  display: 'none',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}));

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrolled = document.documentElement.scrollTop;
    setIsVisible(scrolled > 300); // Adjust the scroll height threshold as needed
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Tooltip title="Scroll to Top" arrow>
      <ScrollTopButton
        color="primary"
        aria-label="scroll to top"
        onClick={scrollToTop}
        style={{ display: isVisible ? 'flex' : 'none' }}
      >
        <KeyboardArrowUpIcon />
      </ScrollTopButton>
    </Tooltip>
  );
};

export default ScrollToTopButton;
