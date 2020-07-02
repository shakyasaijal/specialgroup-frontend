import React from 'react';

import FeaturedCategory from './FeaturedCategory';
import SignedOutRow from './SignedOutRow';

const TopRow = (props) => {
  const { isLoggedIn } = props;

  return <div className="row mt30">{isLoggedIn ? <FeaturedCategory /> : <SignedOutRow />}</div>;
};

export default TopRow;
