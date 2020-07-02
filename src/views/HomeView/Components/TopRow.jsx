import React from 'react';

import FeaturedCategory from './FeaturedCategory';
import SignedOutRow from './SignedOutRow';

const TopRow = (props) => {
  const { isLoggedIn } = props;

  return (
    <div className="row mt30">
      {isLoggedIn ? <FeaturedCategory /> : <SignedOutRow isLoggedIn={isLoggedIn} products={props.products} />}
    </div>
  );
};

export default TopRow;
