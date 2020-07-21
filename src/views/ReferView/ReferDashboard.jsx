import React from 'react';

import FullWidthAd from 'components/Advertisement/FullWidthAd';
import ReferAnalytics from './Components/ReferAnalytics';
import ReferNow from './Components/ReferNow';
import ReferHistory from './Components/ReferHistory';

import { referData } from 'constants/constants';

const ReferDashboard = () => {
  const data = referData()[0];
  const { referNow, analytics, history } = data;

  return (
    <div className="refer">
      <div className="top-ads">
        <FullWidthAd large={data.bannerAds.large} small={data.bannerAds.small} />
      </div>
      <ReferNow data={referNow} />
      <ReferAnalytics data={analytics} />
      <ReferHistory data={history} />
    </div>
  );
};

export default ReferDashboard;
