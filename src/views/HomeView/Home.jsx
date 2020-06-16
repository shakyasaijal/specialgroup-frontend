import React from 'react';

import Box from '@material-ui/core/Box';

import FullWidthAd from 'components/Advertisement/FullWidthAd';
import HalfWidthAd from 'components/Advertisement/HalfWidthAd';
import ProductsSlider from 'components/Products/ProductsSlider';
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
      <ProductsSlider />
    </Box>
  );
};

export default Home;
