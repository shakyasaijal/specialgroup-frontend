import React from 'react';

import FeaturedCategory from './FeaturedCategory';
import SignedOutRow from './SignedOutRow';

const TopRow = (props) => {
  const { isLoggedIn } = props;

  return <div className="row">{isLoggedIn ? <FeaturedCategory /> : <SignedOutRow isLoggedIn={isLoggedIn} />}</div>;
};

export default TopRow;
