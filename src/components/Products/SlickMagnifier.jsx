import React from 'react';
import { getImageBasePath } from 'config/Config';

const SlickMagnifier = (props) => {
  return (
    <div className="img-container">
      <img src={getImageBasePath(props.productDetails.mainImage)} alt={props.productDetails.name} />
    </div>
  );
};

export default SlickMagnifier;
