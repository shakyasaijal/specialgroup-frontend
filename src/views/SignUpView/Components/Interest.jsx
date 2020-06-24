import React from 'react';
import { categoriesForChips } from 'constants/constants';

const Interest = () => {
  const categories = categoriesForChips();
  const state = [];

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target.classList.contains('selected')) {
      state.pop(e.target.value);
      e.target.classList.remove('selected');
    } else {
      state.push(e.target.value);
      e.target.classList.add('selected');
    }
  };

  return (
    <div className="personal-profile">
      <div className="profile-form center">
        <div className="form">
          <form className="center">
            <div className="title">What are you interested in?</div>
            <div className="form-group tags">
              {categories.map((category, index) => (
                <li key={`interest${index}`}>
                  <button value={category.id} onClick={(e) => handleClick(e)} className="tag">
                    {category.name}
                  </button>
                </li>
              ))}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Interest;
