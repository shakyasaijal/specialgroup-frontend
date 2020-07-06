import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Paper from '@material-ui/core/Paper';

import { shopByCategoryRequest } from 'actions/product';

import { getShopByCategory } from 'selectors/product';

import { getImageBasePath } from 'config/Config';

const FeaturedCategory = (props) => {
  const types = ['Shop Now', 'See All', 'Explore Now', 'See More'];
  const [productLoaded, setProductLoaded] = useState(false);

  useEffect(() => {
    props.shopByCategoryRequest(shopByCategorySuccess);
  }, []);

  const shopByCategorySuccess = () => {
    setProductLoaded(true);
  };

  return productLoaded ? (
    <div className="featured-category">
      {props.shopByCategory.map((category, index) => (
        <div key={index} className="feat-categories">
          <Paper>
            <div className="category-name medium-dark">{category.name}</div>
            <div className="image-container">
              <img src={getImageBasePath(category.image)} alt={category.name} />
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
    shopByCategory: getShopByCategory(state),
  };
};

const dispatchProps = { shopByCategoryRequest };

export default connect(mapStateToProps, dispatchProps)(FeaturedCategory);
