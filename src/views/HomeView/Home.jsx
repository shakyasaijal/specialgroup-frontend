import React from 'react';

import Box from '@material-ui/core/Box';

import FullWidthAd from 'components/Advertisement/FullWidthAd';
import HalfWidthAd from 'components/Advertisement/HalfWidthAd';
import RecommendedSlider from 'components/Products/RecommendedSlider';
import Chips from 'components/Chips/Chips';

import TopRow from './Components/TopRow';
import PopularProducts from './Components/PopularProducts';

const Home = () => {
  return (
    <Box>
      <TopRow />
      <FullWidthAd />
      <Chips />
      <PopularProducts />
      <HalfWidthAd />
      <RecommendedSlider />
    </Box>
  );
};

export default Home;
