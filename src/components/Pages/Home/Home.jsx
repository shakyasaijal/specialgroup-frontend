import React from 'react';
import FullWidthAd from '../Advertisement/FullWidthAd';
import Box from '@material-ui/core/Box';
import TopRow from './TopRow';
import PopularProducts from './PopularProducts';

const Home = () => {
  return (
    <Box>
      <TopRow />
      <FullWidthAd />
      <PopularProducts />
    </Box>
  );
};

export default Home;
