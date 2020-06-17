import React from 'react';
import { Link } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';

import { categories } from 'constants/constants';

const SignedOutRow = (props) => {
  const four_categories = categories();
  return (
    <div className="grid">
      <Paper elevation={3}>
        <div className="grid-item">
          <h4 className="medium-dark">Shop by Category</h4>
          <div className="head grid2 mt10">
            {four_categories.map((category, index) => (
              <div className="head-item" key={index}>
                <div className="image-contain">
                  <img src={category.img} alt={category.name} />
                </div>
                <div className="category-name text-center">{category.name}</div>
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
            {four_categories.map((category, index) => (
              <div className="head-item" key={index}>
                <div className="image-contain">
                  <img src={category.img} alt={category.name} />
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
      <Paper elevation={3}>
        {!props.login ? (
          <div className="grid-item">
            <div className="verticle-center text-center full-width">
              <h4 className="medium capitalize width-60 center">sign up for better experience</h4>
              <Link to="/sign-up">
                <button className="button mt10 capitalize">sign up now</button>
              </Link>
            </div>
          </div>
        ) : (
          ''
        )}
      </Paper>
    </div>
  );
};

export default SignedOutRow;
