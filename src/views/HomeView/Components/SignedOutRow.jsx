import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { isLoggedIn } from 'selectors/auth';
import { getShopByCategory, getRecentArrivals } from 'selectors/product';

import Paper from '@material-ui/core/Paper';

import { shopByCategoryRequest, recentArrivalsRequest } from 'actions/product';

import { getImageBasePath } from 'config/Config';

const SignedOutRow = (props) => {
  const [shopByCategoryLoaded, setShopByCategoryLoaded] = useState(false);
  const [recentArrivalsLoaded, setRecentArrivalsLoaded] = useState(false);

  useEffect(() => {
    props.shopByCategoryRequest(shopByCategorySuccess);
    props.recentArrivalsRequest(recentArrivalsSuccess);
  }, []);

  const shopByCategorySuccess = () => {
    setShopByCategoryLoaded(true);
  };

  const recentArrivalsSuccess = () => {
    setRecentArrivalsLoaded(true);
  };

  const shopByCategoryPaper = () => {
    if (!shopByCategoryLoaded) {
      return <></>;
    } else {
      return (
        <Paper elevation={3}>
          <div className="grid-item">
            <h4 className="medium-dark">Shop by Category</h4>
            <div className="head grid2">
              {props.shopByCategory.map((category, index) => (
                <div className="head-item" key={index}>
                  <div className="image-contain">
                    <img src={getImageBasePath(category.image)} alt={category.name} />
                  </div>
                  <Link to="/">
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
      );
    }
  };

  const recentArrivalsPaper = () => {
    if (!recentArrivalsLoaded) {
      return <></>;
    } else {
      return (
        <Paper elevation={3}>
          <div className="grid-item">
            <h4 className="medium-dark">New Arrivals</h4>
            <div className="head grid2 mt10">
              {props.recentArrivals.map((category, index) => (
                <div className="head-item" key={index}>
                  <div className="image-contain">
                    <img src={getImageBasePath(category.image)} alt={category.name} />
                  </div>
                  <div className="category-name text-center">{category.name}</div>
                </div>
              ))}
            </div>
            <div className="see-more center mt30">
              <Link to="/">Shop Now</Link>
            </div>
          </div>
        </Paper>
      );
    }
  };

  const signUpPaper = () => {
    return (
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
    );
  };

  return (
    <div className="grid shop-by-category">
      {shopByCategoryPaper()}
      {recentArrivalsPaper()}
      {signUpPaper()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    shopByCategory: getShopByCategory(state),
    recentArrivals: getRecentArrivals(state),
    isLoggedIn: isLoggedIn(state),
  };
};

const dispatchProps = { shopByCategoryRequest, recentArrivalsRequest };

export default connect(mapStateToProps, dispatchProps)(SignedOutRow);
