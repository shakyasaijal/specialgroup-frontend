import React from 'react';
import FullWidthAd from '../Advertisement/FullWidthAd';
import HalfWidthAd from '../Advertisement/HalfWidthAd';
import Box from '@material-ui/core/Box';
import TopRow from './TopRow';
import Chips from '../Category/Chips';
import PopularProducts from './PopularProducts';
import ProductsSlider from '../Products/ProductsSlider';

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
