import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LockOpenIcon from '@material-ui/icons/LockOpen';

import SocialAuth from 'components/SocialAuth/SocialAuth';
import Form from 'components/Form/Form';

import PATHS from 'routes';

import { ValidateEmail } from 'util/Validator';

import {
  ERROR_FIRST_NAME,
  ERROR_LAST_NAME,
  ERROR_EMPTY_EMAIL,
  ERROR_EMAIL,
  ERROR_EMPTY_PASSWORD,
  ERROR_CONFIRM_PASSWORD,
  ERROR_USER_ALREADY_EXIST,
  ERROR_PASSWORD_LENGTH,
} from 'constants/ErrorMessages';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const ColorButton = withStyles(() => ({
  root: {
    color: '#fff',
    backgroundColor: '#4a68b4',
    '&:hover': {
      backgroundColor: '#3b5390',
    },
  },
}))(Button);

const SignUp = (props) => {
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    registerError: '',
  };

  const classes = useStyles();
  const [state, setForm] = useState(initialState);
  const [errors, setErrors] = useState(initialState);

  if (props.isLoggedIn) {
    props.history.push(PATHS.HOME);
  }

  const onSubmit = (e) => {
    if (e) e.preventDefault();
    const { authRegisterRequest } = props;

    clearFormErrors();
    const err = getFormErrors();

    if (err.firstName || err.lastName || err.email || err.password) {
      setErrors(err);

      return;
    }

    const { firstName, lastName, email, password } = state;

    authRegisterRequest(firstName, lastName, email, password, callbackSuccess, callbackError);
  };

  const getFormErrors = () => {
    const err = {};
    const { firstName, lastName, email, password, confirmPassword } = state;

    if (!firstName) err.firstName = ERROR_FIRST_NAME;
    if (!lastName) err.lastName = ERROR_LAST_NAME;
    if (!ValidateEmail(email)) err.email = ERROR_EMAIL;
    if (!email) err.email = ERROR_EMPTY_EMAIL;
    if (!password) err.password = ERROR_EMPTY_PASSWORD;
    if (password.length < 8) err.password = ERROR_PASSWORD_LENGTH;
    if (password !== confirmPassword) err.password = ERROR_CONFIRM_PASSWORD;

    return err;
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;

    setForm({ ...state, [name]: value });
  };

  const callbackSuccess = () => {
    const { history } = props;

    history.push(PATHS.COMPLETE_PROFILE);
  };

  const callbackError = (error) => {
    let message = 'Can not register your account this moment. Please try again later.';

    if (error === 'Email already exists') {
      message = ERROR_USER_ALREADY_EXIST;
    }
    setErrors({ ...errors, registerError: message });
    clearForm();
  };

  const clearForm = () => {
    setForm(initialState);
  };

  const clearFormErrors = () => {
    setErrors(initialState);
  };

  return (
    <div className="sign-up-container center mt30">
      <h2 className="paddingLeft-5">Create Account</h2>
      <div className="sign-up mt10">
        <div className="grid2">
          <div className="sign-up-form">
            <Form onSubmit={onSubmit}>
              <div className="sign-up-group">
                <div className="group">
                  <label>First Name *</label>
                  <input
                    type="text"
                    className={errors.firstName ? 'error-input' : ''}
                    name="firstName"
                    autoComplete="off"
                    onChange={handleOnChange}
                    value={state.firstName}
                  />
                  {errors.firstName && <span className="error">{errors.firstName}</span>}
                </div>
                <div className="group">
                  <label>Last Name *</label>
                  <input
                    type="text"
                    className={errors.lastName ? 'error-input' : ''}
                    name="lastName"
                    autoComplete="off"
                    onChange={handleOnChange}
                    value={state.lastName}
                  />
                  {errors.lastName && <span className="error">{errors.lastName}</span>}
                </div>
              </div>
              <div className="group">
                <label>Email Address *</label>
                <input
                  type="email"
                  className={errors.lastName ? 'error-input' : ''}
                  name="email"
                  autoComplete="off"
                  onChange={handleOnChange}
                  value={state.email}
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>
              <div className="sign-up-group">
                <div className="group">
                  <label>Password *</label>
                  <input
                    type="password"
                    className={errors.password ? 'error-input' : ''}
                    name="password"
                    autoComplete="off"
                    onChange={handleOnChange}
                    value={state.password}
                  />
                </div>
                <div className="group">
                  <label>Confirm Password *</label>
                  <input
                    type="password"
                    className={errors.password ? 'error-input' : ''}
                    name="confirmPassword"
                    autoComplete="off"
                    onChange={handleOnChange}
                    value={state.confirmPassword}
                  />
                </div>
              </div>
              <div className="error-group">{errors.password && <span className="error">{errors.password}</span>}</div>
              <div className="group">
                <ColorButton
                  variant="contained"
                  size="small"
                  className={classes.button}
                  startIcon={<LockOpenIcon />}
                  onClick={onSubmit}
                >
                  SIGN Up
                </ColorButton>
                <div className="mobile-display">
                  Already have an account? <Link to="/sign-in">Sign In</Link>
                </div>
              </div>
              <div className="error-group">
                {errors.registerError && <span className="error">{errors.registerError}</span>}
              </div>
            </Form>
          </div>
          <div className="sign-up-options medium-dark">
            <div className="text-center">
              <span className="text-center mobile-hide">OR, Simply Sign Up With</span>
            </div>
            <SocialAuth
              label="sign-up"
              authGoogleRequest={props.authGoogleRequest}
              authFacebookRequest={props.authFacebookRequest}
              callbackSuccess={callbackSuccess}
              callbackError={callbackError}
            />
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
