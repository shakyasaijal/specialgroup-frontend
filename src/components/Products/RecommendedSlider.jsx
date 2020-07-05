import React from 'react';
import { Link } from 'react-router-dom';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Paper from '@material-ui/core/Paper';

import { productsList } from 'constants/constants';

const RecommendedSlider = (props) => {
  const products = productsList();

  return (
    <div className="product-slider-container mt30">
      <h2 className="medium-dark main-title">Recommended for you</h2>
      <hr />
      <div className="product-slider">
        <Slider {...props.settings}>
          {products.map((product, index) => (
            <div className="product-container" key={index}>
              <Paper className="padding">
                <Link to="/">
                  <div key={index} className="column-flex">
                    <div className="image-container">
                      <img src={product.img} alt={product.name} />
                    </div>
                    <h3 className="text-center product-title">{product.name}</h3>
                    <small className="text-center product-price">
                      Rs. {product.price}{' '}
                      {product.oldPrice ? <span className="oldPrice line-through">{product.oldPrice}</span> : ''}
                    </small>
                  </div>
                </Link>
              </Paper>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default RecommendedSlider;
