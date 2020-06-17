import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import { ValidateEmail } from 'util/Validator';

import { ERROR_EMPTY_EMAIL, ERROR_EMAIL, ERROR_EMPTY_PASSWORD } from 'constants/ErrorMessages';

import { getImageUrl } from 'constants/constants';

import './ForgetPassword.css';
import Form from 'components/Form/Form';
import PATHS from 'routes';

const useStyles = makeStyles((theme) => ({
  button: {
    padding: '5px 5px',
    margin: '10px 0',
  },
  return: {
    padding: '5px',
    margin: '15px auto',
  },
}));

const ForgetPassword = (props) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);
  const classes = useStyles();

  const handleOnChange = (event) => {
    setEmail(event.target.value);
  };

  const clearFormError = () => {
    setError('');
  };

  const getEmailError = () => {
    let err = '';

    if (!ValidateEmail(email)) err = ERROR_EMAIL;
    if (!email) err = ERROR_EMPTY_EMAIL;

    return err;
  };

  const onSubmit = (e) => {
    if (e) e.preventDefault();
    const { passwordResetRequest } = props;

    clearFormError();
    const err = getEmailError();

    if (err) {
      setError(err);
      return;
    }

    passwordResetRequest(email, callbackSuccess, callbackError);
  };

  const callbackSuccess = () => {
    setSentSuccess(true);
  };

  const callbackError = (message) => {
    setError(message);
  };

  return (
    <div className="forget-password center">
      <Paper>
        <div className="container">
          <div className="left">
            <div className="img-container">
              <img src={getImageUrl('images/forgetPassword.svg')} alt="Forget Password" />
            </div>
          </div>
          {!sentSuccess && (
            <div className="right" id="right">
              <Form onSubmit={onSubmit} className="verticle-center">
                <span className="medium-dark">Forget Password?</span>
                <span className="registered-email">Please enter your email address.</span>
                <input
                  type="email"
                  name="email"
                  autoComplete="off"
                  className="mt30"
                  placeholder="Email address"
                  onChange={handleOnChange}
                  value={email}
                />
                {error && <span className="error">{error}</span>}
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  onChange={handleOnChange}
                  onClick={onSubmit}
                  className={classes.button}
                >
                  Send
                </Button>
              </Form>
            </div>
          )}
          {sentSuccess && (
            <div className="text-center center full-width" id="emailSend">
              <p className="verticle-center">
                We have sent you an email at {email} Please check your email inbox.
                <Link to={PATHS.SIGNIN}>
                  <Button variant="contained" color="primary" size="small" className={classes.return}>
                    Return
                  </Button>
                </Link>
              </p>
            </div>
          )}
        </div>
      </Paper>
    </div>
  );
};

export default ForgetPassword;
