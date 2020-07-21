import React from 'react';
// import FeaturedCategory from './FeaturedCategory';
import RandomSubCat from './RandomSubCat';
import SignedOutRow from './SignedOutRow';
import BannerSlider from './BannerSlider';
import { settingsForOne } from 'constants/constants';

const TopRow = (props) => {
  const { isLoggedIn } = props;

  return (
    <>
      <BannerSlider settings={settingsForOne} />
      {isLoggedIn ? (
        // <FeaturedCategory />
        <RandomSubCat />
      ) : (
        <div className="row">
          <SignedOutRow isLoggedIn={isLoggedIn} />
        </div>
      )}
    </>
  );
};

export default TopRow;
