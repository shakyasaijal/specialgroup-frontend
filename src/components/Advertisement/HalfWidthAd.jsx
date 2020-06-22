import React from 'react';

const FullWidthAd = (props) => {
  const { small } = props
  let hasAd = false;

  if (small.length >= 1) {
    hasAd = true;
  }
  return (
    <div className="row">
      <div className="small-ads ads">
        <div className="grid2">
          {
            !hasAd && <>
              <div className="panel ad">
                <div className="container verticle-center text-center">
                  <h4 className="medium-dark"> Ad Space Available Here * </h4>
                  <span className="subtitle">Contact Us: +977 - 98xxxxxxx</span>
                </div>
              </div>
            </>
          }
          {
            small.map((ad, index) => <div className="ad-container" key={index}>
              <img src={ad} alt="ad" />
            </div>
            )
          }
          {
            small.length < 2 && <div className="panel ad">
              <div className="container verticle-center text-center">
                <h4 className="medium-dark"> Ad Space Available Here * </h4>
                <span className="subtitle">Contact Us: +977 - 98xxxxxxx</span>
              </div>
            </div>
          }

        </div>
      </div>
    </div>
  );
};

export default FullWidthAd;
