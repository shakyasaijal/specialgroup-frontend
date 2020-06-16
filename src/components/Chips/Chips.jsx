import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

import { categoriesForChips } from 'constants/constants';

const Chips = () => {
  const _categories = categoriesForChips();
  // Max 8 categories having text length of average 8 will be ok
  return (
    <div className="row">
      <div className="grid-chips">
        {_categories.map((category, index) => (
          <Link to="/" key={index}>
            <Chip color="secondary" clickable={true} avatar={<Avatar src={category.img} />} label={category.name} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Chips;
