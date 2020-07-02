import React, { useEffect } from 'react';

import Box from '@material-ui/core/Box';

import FullWidthAd from 'components/Advertisement/FullWidthAd';
import HalfWidthAd from 'components/Advertisement/HalfWidthAd';
import RecommendedSlider from 'components/Products/RecommendedSlider';
import Chips from 'components/Chips/Chips';

import TopRow from './Components/TopRow';
import PopularProducts from './Components/PopularProducts';
import { getImageUrl } from 'constants/constants';

const Home = (props) => {
  const smallAds = [getImageUrl('images/faker/ads/marutiMobile.gif'), getImageUrl('images/faker/ads/marutiMobile.gif')];

  useEffect(() => {
    props.productListRequest();
  }, [props.isLoggedIn]);

  return (
    <Box>
      <TopRow isLoggedIn={props.isLoggedIn} products={props.products} />
      <FullWidthAd
        large={getImageUrl('images/faker/ads/nepatop.gif')}
        small={getImageUrl('images/faker/ads/nepatopMobile.jpg')}
      />
      <Chips />
      <PopularProducts />
      <HalfWidthAd small={smallAds} />
      <RecommendedSlider />
    </Box>
  );
};

export default Home;
