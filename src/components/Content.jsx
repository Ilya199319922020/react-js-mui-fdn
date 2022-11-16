import React from 'react';
import { Box, Grid } from '@mui/material';
import Header from './Header/Header';
import ContentTitle from './Main/ContentTitle/ContentTitle';
import ContentSearch from './Main/ContentSearch/ContentSearch';
import ContentGrade from './Main/ContentGrade/ContentGrade';
import ContentFooter from './Main/ContentFooter/ContentFooter';

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
      <ContentTitle/>
      <ContentSearch/>
      <ContentGrade/>
      <ContentFooter/>
    </Box>
  );
};

export default Content;