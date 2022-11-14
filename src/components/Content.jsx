import React from 'react';
import { Box, Grid } from '@mui/material';
import Header from './Header/Header';

const Content = () => {
  return (
    <Box
      sx={{
        maxWidth: '1920px',
        maxHeight: '3249px',
        m: 0,
        pl: 0,
        pt: 0
      }}
    >
      <Header />
    </Box>
  );
};

export default Content;