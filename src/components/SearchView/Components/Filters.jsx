import React from 'react';

const Filters = (props) => {
  const { seller, brand } = props;

  return (
    <>
      <div className="block">
        <div className="title underline">Brand</div>
        <div className="block-content">
          <div className="checkbox">
            {brand.map((br, index) => (
              <div className="checkbox-item" key={index}>
                <input type="checkbox" name="branding" value="7" /> {br}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="block ups">
        <div className="title underline">Price Range</div>
        <div className="block-content flex">
          <div className="from">
            <input type="number" className="min" min="0" placeholder="Min" />
          </div>
          <div className="to">
            <input type="number" className="max" min="1" placeholder="Max" />
          </div>
          <div className="go">
            <input type="button" className="btn" min="1" value="Go" />
          </div>
        </div>
      </div>
      <div className="block ups">
        <div className="title underline">Seller</div>
        <div className="block-content">
          <div className="checkbox">
            {seller.map((sell, index) => (
              <div className="checkbox-item" key={index}>
                <input type="checkbox" name="branding" value="6" /> {sell.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Filters;
