import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import Form from '../../Form';
import SocialAuth from './SocialAuth';
import { ValidateEmail } from 'util/Validator';

import { ERROR_EMPTY_EMAIL, ERROR_EMAIL, ERROR_EMPTY_PASSWORD } from 'constants/ErrorMessages';

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

const SignIn = (props) => {
  const initialState = {
    email: '',
    password: '',
  };

  const classes = useStyles();
  const [state, setForm] = useState(initialState);
  const [errors, setErrors] = useState(initialState);

  const onClick = (e) => {
    if (e) e.preventDefault();
    const { authLoginRequest } = props;
    const err = getFormErrors();

    if (err.email || err.password) {
      console.log('here');
      setErrors(err);
      return;
    }

    const { email, password } = state;
    authLoginRequest(email, password, callbackSuccess);
  };

  function callbackSuccess() {
    console.log('login success');
  }

  const getFormErrors = () => {
    const err = {};
    const { email, password } = state;

    if (!email) err.email = ERROR_EMPTY_EMAIL;
    if (!ValidateEmail(email)) err.email = ERROR_EMAIL;
    if (!password) err.password = ERROR_EMPTY_PASSWORD;

    return err;
  };

  return (
    <div className="sign center mt10">
      <div className="panel radius8 ads">
        <div className="">
          <div className="sign-in">
            <div className="social-auth">
              <h4 className="title text-center">Sign In</h4>
              <SocialAuth for="sign-in" />
            </div>
            <div className="options">
              <h2 className="options-for">
                <span>OR</span>
              </h2>
            </div>
            <div className="sign-in-form">
              <Form>
                <div className="form-group">
                  <label className="small-font">Email</label>
                  <input
                    type="email"
                    autoComplete="off"
                    onChange={(e) => setForm({ ...state, email: e.target.value })}
                    name="email"
                    value={state.email}
                  />
                </div>
                <div className="form-group">
                  <label className="small-font">
                    Password{' '}
                    <Link to="/" className="float-right small">
                      Forget Password?
                    </Link>
                  </label>
                  <input
                    type="password"
                    autoComplete="off"
                    onChange={(e) => setForm({ ...state, password: e.target.value })}
                    name="password"
                    value={state.password}
                  />
                </div>
                <div className="form-group">
                  <ColorButton
                    variant="contained"
                    size="small"
                    className={classes.button}
                    startIcon={<LockOpenIcon />}
                    onClick={onClick}
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

export default SignIn;
