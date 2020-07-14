import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Paper from '@material-ui/core/Paper';

import { getRecommendedProduct } from 'selectors/product';

import { recommendedProductRequest } from 'actions/product';

import { getImageBasePath } from 'config/Config';

const RecommendedSlider = (props) => {
  const [recommendedProductLoaded, setRecommendedProductLoaded] = useState(false);

  useEffect(() => {
    props.recommendedProductRequest(recommendedProductSuccess);
    // eslint-disable-next-line
  }, []);

  const recommendedProductSuccess = () => {
    setRecommendedProductLoaded(true);
  };

  return recommendedProductLoaded ? (
    <div className="product-slider-container mt30">
      <h2 className="medium-dark main-title">Recommended for you</h2>
      <hr />
      <div className="product-slider">
        <Slider {...props.settings}>
          {props.recommendedProduct.map((product, index) => (
            <div className="product-container" key={index}>
              <Paper className="padding">
                <Link to={`/product/${product.id}`}>
                  <div key={index} className="column-flex">
                    <div className="image-container">
                      <img src={getImageBasePath(product.mainImage)} alt={product.name} />
                    </div>
                    <h3 className="text-center product-title">{product.name}</h3>
                    <small className="text-center product-price">
                      {product.price && <span>Rs. {product.price} </span>}
                      {product.oldPrice && <span className="oldPrice line-through">{product.oldPrice}</span>}
                    </small>
                  </div>
                </Link>
              </Paper>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  ) : (
    <></>
  );
};

const mapStateToProps = (state) => {
  return {
    recommendedProduct: getRecommendedProduct(state),
  };
};

const dispatchProps = { recommendedProductRequest };

export default connect(mapStateToProps, dispatchProps)(RecommendedSlider);
