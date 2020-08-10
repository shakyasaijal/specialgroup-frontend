import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import SecurityOutlinedIcon from '@material-ui/icons/SecurityOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import ContactMailOutlinedIcon from '@material-ui/icons/ContactMailOutlined';
import ContactlessOutlinedIcon from '@material-ui/icons/ContactlessOutlined';
import Button from '@material-ui/core/Button';
import LockOpenIcon from '@material-ui/icons/LockOpen';

import { getAccount } from 'selectors/account';

import PATHS from 'routes';
import { isLoggedIn } from 'selectors/auth';

const useStyles = makeStyles(() => ({
  button: {
    padding: '2px',
  },
}));

const RightBar = (props) => {
  const classes = useStyles();
  const { address, district, phone } = props.account;

  const completeProfileDialog = () => {
    return (
      <div className="right-for mt30">
        <div className="icon text-center">
          <ContactMailOutlinedIcon />
        </div>
        <div className="w-value">
          <small>Your are missing our support because your profile is not complete. </small>
          <div>
            <Link to={PATHS.COMPLETE_PROFILE}>
              <Button className={classes.button} size="small" color="primary" variant="outlined">
                Complete now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  };

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
      {props.isLoggedIn &&
        (!district && !address && !phone ? (
          completeProfileDialog()
        ) : (
          <>
            <div className="seperator mt30">Default Delivery Address</div>
            <div className="right-for">
              <div className="icon text-center">
                <ContactMailOutlinedIcon />
                <small>Address</small>
              </div>
              <div className="w-value">
                {address}
                {!address && <Link to={PATHS.ADDRESS}>Add address</Link>}
              </div>
            </div>
            <div className="right-for mt30">
              <div className="icon text-center">
                <LocationOnOutlinedIcon />
                <small>Location</small>
              </div>
              <div className="w-value">
                {district}
                {!district && <Link to={PATHS.ADDRESS}>Add location</Link>}
              </div>
            </div>
            <div className="right-for mt30">
              <div className="icon text-center">
                <ContactlessOutlinedIcon />
                <small>Contact</small>
              </div>
              <div className="w-value">
                {phone}
                {!phone && <Link to={PATHS.LOGIN_SECURITY}>Add contact number</Link>}
              </div>
            </div>
          </>
        ))}
      {!isLoggedIn && (
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

const mapStateToProps = (state) => {
  return {
    account: getAccount(state),
  };
};

export default connect(mapStateToProps, {})(withRouter(RightBar));
