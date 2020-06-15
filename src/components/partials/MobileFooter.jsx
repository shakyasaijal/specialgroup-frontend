import React from 'react';
import { Link } from 'react-router-dom';

const MobileFooter = () => {
  return (
    <>
      <div className="mobile-footer">
        <div className="grid">
          <div className="grid-item">
            <h4 className="medium white-color">Our Special Group</h4>
            <div className="content mt10">
              Lorem Ipsum is simply dummy text of the  printing and typesetting industry. Lorem  Ipsum has been the
              industry's standard  dummy text ever since the 1500s, when  an unknown printer took a galley of type  and
              scrambled it to make a type specimen book.
              <br />
              <br />
              Lorem Ipsum is simply dummy text of the  printing and typesetting industry. Lorem  Ipsum has been the
              industry's standard  dummy text ever since the 1500s, when  an unknown printer took a galley of type  and
              scrambled it to make a type specimen book.
            </div>
          </div>
          <div className="grid-item mt10">
            <h4 className="medium white-color">General Information</h4>
            <div className="content mt10">
              Multi Vendor App
              <br />
              Kathmandu, Nepal
              <br />
              VAT No.: xxxx-xxxx-xxxx-xxxx
            </div>
          </div>
          <div className="grid-item mt10">
            <h4 className="medium white-color">Useful Links</h4>
            <div className="content mt10 flex footer-link">
              <Link to="/">About Us</Link>
              <Link to="/">Opportunity</Link>
              <Link to="/">Contact Us</Link>
              <Link to="/">Login and Security</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="grid verticle-center">
          <div className="grid-item">&copy; CopyRight {new Date().getFullYear()} | Special Group</div>
          <div className="grid-item"></div>
        </div>
      </div>
    </>
  );
};

export default MobileFooter;
