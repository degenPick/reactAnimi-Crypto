import { LoadingButton } from '@mui/lab';
import { Box, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Iconify from 'src/components/iconify';

function ScrollButton() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Function to handle scrolling to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling animation
    });
  };

  useEffect(() => {
    // Function to handle scrolling event
    const handleScroll = () => {
      // Check if scroll position is beyond the height of the screen
      if (window.pageYOffset > window.innerHeight * 0.2) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    // Add event listener to window scroll event
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <>
      {showScrollButton && (
        <Box
          onClick={scrollToTop}
          sx={{
            background: 'linear-gradient(to right, #EA485C, #ED8A4C)',
            color: 'common.white',
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 999999999999,
          }}
        >
          <Iconify icon="mingcute:up-fill" sx={{ mt: '-4px' }} width={24} />
        </Box>
      )}
    </>
  );
}

export default ScrollButton;
