import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import { getImage } from 'config/Config';

import { productListRequest } from 'actions/product';

const SignedOutRow = (props) => {
  const [productsLoaded, setProductsLoaded] = useState(false);

  useEffect(() => {
    props.productListRequest(callbackSuccess);
    // eslint-disable-next-line
  }, []);

  const callbackSuccess = () => {
    setProductsLoaded(true);
  };

  return productsLoaded ? (
    <div className="grid shop-by-category">
      <Paper elevation={3}>
        <div className="grid-item">
          <h4 className="medium-dark">Shop by Category</h4>
          <div className="head grid2">
            {props.products.shopByCategories.map((category, index) => (
              <div className="head-item" key={index}>
                <Link to="/">
                  <div className="image-contain">
                    <img src={getImage(category.image)} alt={category.name} />
                  </div>
                  <div className="category-name text-center">{category.name}</div>
                </Link>
              </div>
            ))}
          </div>
          <div className="see-more center mt30">
            <Link to="/">See More</Link>
          </div>
        </div>
      </Paper>
      <Paper elevation={3}>
        <div className="grid-item">
          <h4 className="medium-dark">New Arrivals</h4>
          <div className="head grid2 mt10">
            {props.products.recentArrivals.map((category, index) => (
              <div className="head-item" key={index}>
                <Link to="/">
                  <div className="image-contain">
                    <img src={getImage(category.image)} alt={category.name} />
                  </div>
                  <div className="category-name text-center">{category.name}</div>
                </Link>
              </div>
            ))}
          </div>
          <div className="see-more center mt30">
            <Link to="/">Shop Now</Link>
          </div>
        </div>
      </Paper>
      <Paper elevation={3}>
        {!props.isLoggedIn && (
          <div className="grid-item sign-up-now">
            <div className="verticle-center text-center full-width">
              <h4 className="medium capitalize width-60 center white">sign up for better experience</h4>
              <Link to="/sign-up">
                <button className="button mt10 capitalize">sign up now</button>
              </Link>
            </div>
          </div>
        )}
      </Paper>
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

export default connect(mapStateToProps, dispatchProps)(SignedOutRow);
