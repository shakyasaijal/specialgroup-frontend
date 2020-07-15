import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import Form from 'components/Form/Form';
import SocialAuth from 'components/SocialAuth/SocialAuth';

import { ValidateEmail } from 'util/Validator';

import PATHS from 'routes';

import { ERROR_EMPTY_EMAIL, ERROR_EMAIL, ERROR_EMPTY_PASSWORD } from 'constants/ErrorMessages';

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

const SignIn = (props) => {
  const initialState = {
    email: '',
    password: '',
    loginError: '',
  };

  const classes = useStyles();
  const [state, setForm] = useState(initialState);
  const [errors, setErrors] = useState(initialState);

  if (props.isLoggedIn) {
    props.history.push(PATHS.HOME);
  }

  const onSubmit = (e) => {
    if (e) e.preventDefault();
    const { authLoginRequest } = props;

    clearFormErrors();
    const err = getFormErrors();

    if (err.email || err.password) {
      setErrors(err);

      return;
    }

    const { email, password } = state;

    authLoginRequest(email, password, callbackSuccess, callbackError);
  };

  function callbackSuccess() {
    props.history.push(PATHS.HOME);
  }

  const getFormErrors = () => {
    const err = {};
    const { email, password } = state;

    if (!ValidateEmail(email)) err.email = ERROR_EMAIL;
    if (!email) err.email = ERROR_EMPTY_EMAIL;
    if (!password) err.password = ERROR_EMPTY_PASSWORD;

    return err;
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;

    setForm({ ...state, [name]: value });
  };

  const callbackError = (error) => {
    setErrors({ ...errors, loginError: error });
    clearForm();
  };

  const clearForm = () => {
    setForm(initialState);
  };

  const clearFormErrors = () => {
    setErrors(initialState);
  };

  return (
    <div className="sign center mt10">
      <div className="panel radius8 ads">
        <div className="">
          <div className="sign-in">
            <div className="social-auth">
              <h4 className="title text-center">Sign In</h4>
              <SocialAuth
                label="sign-in"
                authGoogleRequest={props.authGoogleRequest}
                authFacebookRequest={props.authFacebookRequest}
                callbackSuccess={callbackSuccess}
                callbackError={callbackError}
              />
            </div>
            <div className="options">
              <h2 className="options-for">
                <span>OR</span>
              </h2>
            </div>
            <div className="sign-in-form">
              <Form onSubmit={onSubmit}>
                <div className="form-group">
                  <label className="small-font">Email</label>
                  <input
                    type="email"
                    className={errors.email ? 'error-input' : ''}
                    autoComplete="off"
                    onChange={handleOnChange}
                    name="email"
                    value={state.email || ''}
                  />
                  {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div className="form-group">
                  <label className="small-font">
                    Password{' '}
                    <Link to="/forget-password" className="float-right small">
                      Forget Password?
                    </Link>
                  </label>
                  <input
                    type="password"
                    className={errors.password ? 'error-input' : ''}
                    autoComplete="off"
                    onChange={handleOnChange}
                    name="password"
                    value={state.password || ''}
                  />
                  {errors.password && <span className="error">{errors.password}</span>}
                </div>
                {errors.loginError && (
                  <div className="error-group">
                    <span className="error">{errors.loginError}</span>
                  </div>
                )}
                <div className="form-group">
                  <ColorButton
                    variant="contained"
                    size="small"
                    className={classes.button}
                    startIcon={<LockOpenIcon />}
                    onClick={onSubmit}
                  >
                    SIGN IN
                  </ColorButton>
                </div>
              </Form>
            </div>
            <div className="sign-up-info">
              <span>
                New Here? <Link to="/sign-up">Sign Up Now.</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(SignIn);
