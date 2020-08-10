import React from 'react';

const VerticalAds = (props) => {
  const { ads } = props;

  return (
    <div className="vert-ads">
      <div className="v-grid">
        {ads.map((ad, index) => (
          <div className="ad-container vertical-center" key={index}>
            <img src={ad.small} alt="ad" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalAds;
