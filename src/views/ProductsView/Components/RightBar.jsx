import React from 'react';
import SecurityOutlinedIcon from '@material-ui/icons/SecurityOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import ContactMailOutlinedIcon from '@material-ui/icons/ContactMailOutlined';
import ContactlessOutlinedIcon from '@material-ui/icons/ContactlessOutlined';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { Link } from 'react-router-dom';
import PATHS from 'routes';

const RightBar = (props) => {
  const userState = { address: '', location: '', phone: '' };

  return (
    <>
      {props.warranty ? (
        <div className="right-for">
          <div className="icon text-center">
            <SecurityOutlinedIcon />
            <small>Warranty</small>
          </div>
          <div className="w-value">{props.warranty}</div>
        </div>
      ) : (
        ''
      )}
      {props.isLoggedIn ? (
        !userState.address && !userState.location && !userState.phone ? (
          <>
            <div className="right-for mt30">
              <div className="icon text-center">
                <ContactMailOutlinedIcon />
                <small className="lh08">Complete Profile</small>
              </div>
              <div className="w-value">
                Your are missing our support. <br />
                <Link to={PATHS.COMPLETE_PROFILE}>Click here to complete your profile</Link>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="seperator mt30">Default Delivery Address</div>

            <div className="right-for">
              <div className="icon text-center">
                <ContactMailOutlinedIcon />
                <small>Address</small>
              </div>
              <div className="w-value">
                {userState.address ? userState.address : <Link to={PATHS.ADDRESS}>Add your address.</Link>}
              </div>
            </div>
            <div className="right-for mt30">
              <div className="icon text-center">
                <LocationOnOutlinedIcon />
                <small>Location</small>
              </div>
              <div className="w-value">
                {userState.location ? userState.location : <Link to={PATHS.ADDRESS}>Add your location.</Link>}
              </div>
            </div>
            <div className="right-for mt30">
              <div className="icon text-center">
                <ContactlessOutlinedIcon />
                <small>Contact</small>
              </div>
              <div className="w-value">
                {userState.phone ? userState.phone : <Link to={PATHS.LOGIN_SECURITY}>Add Phone Number.</Link>}
              </div>
            </div>
          </>
        )
      ) : (
        <>
          <div className="right-for mt30">
            <div className="icon text-center">
              <LockOpenIcon />
              <small>Sign In</small>
            </div>
            <div className="w-value">
              Please login to checkout. <Link to={PATHS.SIGNIN}>Click Here To Sign In</Link>
            </div>
          </div>
          <div className="right-for mt30">
            <div className="icon text-center">
              <LockOpenIcon />
              <small>Sign Up</small>
            </div>
            <div className="w-value">
              Have not created an account yet? <Link to={PATHS.SIGNUP}>Click Here To Sign Up</Link>
            </div>
          </div>
        </>
      )}

      <div className="seperator mt30">
        <p className="vendor">Sold By: {props.vendor}</p>
      </div>
      <Link to="/" className="related">
        View Related Products
      </Link>
    </>
  );
};

export default RightBar;
