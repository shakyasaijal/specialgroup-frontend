import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import Box from '@material-ui/core/Box';

import FullWidthAd from 'components/Advertisement/FullWidthAd';
import HalfWidthAd from 'components/Advertisement/HalfWidthAd';
import RecommendedSlider from 'views/HomeView/Components/RecommendedSlider';
import Chips from 'components/Chips/Chips';

import TopRow from './Components/TopRow';
import PopularProducts from './Components/PopularProducts';
import { getImageUrl, settingsForSix } from 'constants/constants';
import JustForYou from './Components/JustForYou';

import PATHS from 'routes';

import { getQueryParams } from 'util/QueryParser';

const Home = (props) => {
  const smallAds = [getImageUrl('images/faker/ads/marutiMobile.gif'), getImageUrl('images/faker/ads/marutiMobile.gif')];

  useEffect(() => {
    if (props.isLoggedIn && !props.isProfileCompleted && props.completeLaterClickedBefore1Day) {
      props.history.push(PATHS.COMPLETE_PROFILE);
    }

    if (!props.isLoggedIn) {
      const params = getQueryParams(props.location.search);

      if (params.code && params.code !== props.referralCode) {
        props.referralCodeUpdate(params.code);
        props.handleClickRequest(params.code);
      }
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Box>
      <TopRow isLoggedIn={props.isLoggedIn} />
      <FullWidthAd
        large={getImageUrl('images/faker/ads/nepatop.gif')}
        small={getImageUrl('images/faker/ads/nepatopMobile.jpg')}
      />
      <Chips />
      {props.isLoggedIn && <JustForYou />}
      <PopularProducts />
      <HalfWidthAd small={smallAds} />
      <RecommendedSlider settings={settingsForSix} />
    </Box>
  );
};

export default withRouter(Home);
