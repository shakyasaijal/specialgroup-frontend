import React from 'react';
import { Link } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';

import { featuredCategory } from 'constants/constants';

const FeaturedCategory = () => {
  const featured = featuredCategory();
  const types = ['Shop Now', 'See All', 'Explore Now', 'See More'];

  return (
    <div className="featured-category">
      {featured.map((category, index) => (
        <div key={index} className="feat-categories">
          <Paper>
            <div className="category-name medium-dark">{category.name}</div>
            <div className="image-container">
              <img src={category.img} alt={category.name} />
            </div>
            <div className="links">
              <Link to="/">{types[Math.floor(Math.random() * types.length)]}</Link>
            </div>
          </Paper>
        </div>
      ))}
    </div>
  );
};

export default FeaturedCategory;
