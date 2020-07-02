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
          <div className="grid-wrapper">
            <div className="left">
              <div className="container">
                <SlickMagnifier product={product} />
              </div>
            </div>
            <div className="content">
              <div className="product-info">
                <h4 className="brand-name">gucci</h4>
                <p className="product-name">Cotton jersey shorts</p>
              </div>
            </div>
            <div className="right"></div>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default ProductsDetails;
