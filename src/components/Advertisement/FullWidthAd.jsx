import React from 'react';

const FullWidthAd = (props) => {
  let image = props.large;
  let hasAd = false;

  if (props.large || props.small) {
    hasAd = true;
  }
  if (window.innerWidth <= 492) {
    image = props.small;
  }

  return (
    <div className="row">
      <div className="advertisement">
        {hasAd ? (
          <div className="ad-container">
            <img src={image} />
          </div>
        ) : (
          <div className="panel ad">
            <div className="container verticle-center text-center">
              <h4 className="medium-dark"> Ad Space Available Here * </h4>
              <span className="subtitle">Contact Us: +977 - 98xxxxxxx</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FullWidthAd;
