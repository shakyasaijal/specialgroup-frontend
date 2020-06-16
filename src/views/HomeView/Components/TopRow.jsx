import React from 'react';

import FeaturedCategory from './FeaturedCategory';
import SignedOutRow from './SignedOutRow';

const TopRow = () => {
  const login = false;

  return (
    <>
      <div className="row mt30">{login ? <FeaturedCategory /> : <SignedOutRow login={login} />}</div>
    </>
  );
};

export default TopRow;
