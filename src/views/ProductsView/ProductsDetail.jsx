import React from 'react';
import Paper from '@material-ui/core/Paper';
// import ReactImageMagnify from 'react-image-magnify';
// import Slider from 'react-slick';
import { productDetails } from 'constants/constants';
import SlickMagnifier from 'components/Products/SlickMagnifier';

const ProductsDetails = () => {
  const product = productDetails();

  return (
    <div className="row">
      <div className="product-details-container">
        <Paper>
          <div className="grid-">
            <div className="grid-item">
              <div className="container">
                <SlickMagnifier product={product} />
              </div>
            </div>
            <div className="grid-item">
              <div className="fluid__instructions" style={{ position: '' }}>
                <div id="portal" className="portal" />
                <div style={{ height: '1000px' }} />
              </div>
            </div>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default ProductsDetails;
