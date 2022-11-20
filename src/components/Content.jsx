import React from 'react';
import { Box } from '@mui/material';
import Header from './Header/Header';
import ContentTitle from './Main/ContentTitle/ContentTitle';
import ContentSearch from './Main/ContentSearch/ContentSearch';
import ContentGrade from './Main/ContentGrade/ContentGrade';
import ContentFooter from './Main/ContentFooter/ContentFooter';
import Footer from './Footer/Footer';

const Content = () => {
  return (
    <>
      <Box
        sx={{
          width: '100vw',
          bgcolor: '#bababa',
          maxHeight: '879px',
          position: 'relative',
          zIndex: 0,
        }}
      >
        <Box
          sx={{
            maxWidth: '1172px',
            maxHeight: '3249px',
            m: '0 auto',
            pl: 0,
            pt: 0,
            position: 'relative',
          }}
        >
          <Header />
          <ContentTitle />
          <ContentSearch />
          <ContentGrade />
          <ContentFooter />
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default Content;