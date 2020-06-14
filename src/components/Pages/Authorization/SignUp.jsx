import React from 'react';
import { Link } from 'react-router-dom';
import SocialAuth from './SocialAuth';
import Button from '@material-ui/core/Button';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LockOpenIcon from '@material-ui/icons/LockOpen';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const ColorButton = withStyles((theme) => ({
  root: {
    color: '#fff',
    backgroundColor: '#4a68b4',
    '&:hover': {
      backgroundColor: '#3b5390',
    },
  },
}))(Button);

const SignUp = () => {
  const classes = useStyles();
  return (
    <div className="sign-up-container center mt30">
      <h2 className="paddingLeft-5">Create Account</h2>
      <div className="sign-up mt10">
        <div className="grid2">
          <div className="sign-up-form">
            <form method="POST">
              <div className="sign-up-group">
                <div className="group">
                  <label>First Name *</label>
                  <input type="text" name="first_name" required />
                  <span className="error">First Name is required.</span>
                </div>
                <div className="group">
                  <label>Last Name *</label>
                  <input type="text" name="last_name" required />
                </div>
              </div>
              <div className="group">
                <label>Email Address *</label>
                <input type="email" name="email" required />
              </div>
              <div className="sign-up-group">
                <div className="group">
                  <label>Password *</label>
                  <input type="password" name="password" required />
                  <span className="error">Password don't matched.</span>
                </div>
                <div className="group">
                  <label>Confirm Password *</label>
                  <input type="password" name="confirm_password" required />
                </div>
              </div>
              <div className="group">
                <ColorButton
                  variant="contained"
                  color="red"
                  size="small"
                  className={classes.button}
                  startIcon={<LockOpenIcon />}
                >
                  SIGN Up
                </ColorButton>
                <div className="mobile-display">
                  Already have an account? <Link to="/sign-in">Sign In</Link>
                </div>
              </div>
            </form>
          </div>
          <div className="sign-up-options medium-dark">
            <div className="text-center">
              <span className="text-center mobile-hide">OR, Simply Sign Up With</span>
            </div>
            <SocialAuth for="sign-up" />
            <div className="mobile-hide divider"></div>
            <span className="mobile-display">
              <div className="options">
                <h2 className="options-for">
                  <span className="mt10">OR</span>
                </h2>
              </div>
            </span>
            <div className="small text-center zIndex mt30 black-color">
              Already have an account? <Link to="/sign-in">Sign In</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
