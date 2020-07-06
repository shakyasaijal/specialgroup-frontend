import React, { useEffect } from 'react';

import Box from '@material-ui/core/Box';

import FullWidthAd from 'components/Advertisement/FullWidthAd';
import HalfWidthAd from 'components/Advertisement/HalfWidthAd';
import RecommendedSlider from 'components/Products/RecommendedSlider';
import Chips from 'components/Chips/Chips';

import TopRow from './Components/TopRow';
import PopularProducts from './Components/PopularProducts';
import JustForYou from './Components/JustForYou';

import { getImageUrl, settingsForSix } from 'constants/constants';

import PATHS from 'routes';

const Home = (props) => {
  const smallAds = [getImageUrl('images/faker/ads/marutiMobile.gif'), getImageUrl('images/faker/ads/marutiMobile.gif')];

  useEffect(() => {
    if (!props.isProfileCompleted && props.completeLaterClickedBefore1Day) {
      props.history.push(PATHS.COMPLETE_PROFILE);
    }
  });

  return (
    <Box>
      <TopRow isLoggedIn={props.isLoggedIn} />
      <FullWidthAd
        large={getImageUrl('images/faker/ads/nepatop.gif')}
        small={getImageUrl('images/faker/ads/nepatopMobile.jpg')}
      />
      <Chips />
      <JustForYou />
      <PopularProducts />
      <HalfWidthAd small={smallAds} />
      <RecommendedSlider settings={settingsForSix} />
    </Box>
  );
};

export default Home;
