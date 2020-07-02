import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';

import { productListRequest } from 'actions/product';

import { getImage } from 'config/Config';

const FeaturedCategory = (props) => {
  const types = ['Shop Now', 'See All', 'Explore Now', 'See More'];
  const [productsLoaded, setProductsLoaded] = useState(false);

  useEffect(() => {
    props.productListRequest(callbackSuccess);
    // eslint-disable-next-line
  }, []);

  const callbackSuccess = () => {
    setProductsLoaded(true);
  };

  return productsLoaded ? (
    <div className="featured-category">
      {props.products.shopByCategories.map((category, index) => (
        <div key={index} className="feat-categories">
          <Paper>
            <div className="category-name medium-dark">{category.name}</div>
            <div className="image-container">
              <img src={getImage(category.image)} alt={category.name} />
            </div>
            <div className="links">
              <Link to="/">{types[Math.floor(Math.random() * types.length)]}</Link>
            </div>
          </Paper>
        </div>
      ))}
    </div>
  ) : (
    <></>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const dispatchProps = { productListRequest };

export default connect(mapStateToProps, dispatchProps)(FeaturedCategory);
