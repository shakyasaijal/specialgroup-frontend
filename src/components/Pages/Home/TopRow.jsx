import React from 'react';
import FeaturedCategory from '../Category/FeaturedCategory';
import SignedOutRow from './SignedOutRow';

const TopRow = () => {
  const login = true;

  return (
    <>
      <div className="row mt30">{login ? <FeaturedCategory /> : <SignedOutRow login={login} />}</div>
    </>
  );
};

export default TopRow;
