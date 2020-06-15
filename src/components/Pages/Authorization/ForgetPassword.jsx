import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { getImageUrl } from '../../../constants/constants';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

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

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const classes = useStyles();

  const handleClick = (e) => {
    e.preventDefault();
    document.getElementById('right').style.display = 'none';
    document.getElementById('emailSend').style.display = 'block';
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
          <div className="right" id="right">
            <form method="POST" className="verticle-center">
              <span className="medium-dark">Forget Password?</span>
              <span className="registered-email">Enter your registered email to reset.</span>
              <input
                type="email"
                name="email"
                autoComplete="off"
                className="mt30"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={(e) => handleClick(e)}
                className={classes.button}
              >
                Send
              </Button>
            </form>
          </div>
          <div className="emailSend text-center center full-width" id="emailSend">
            <p className="verticle-center">
              If this email is registered in our application, then you must have received reset email.
              <Link to="/sign-in">
                <Button variant="contained" color="primary" size="small" className={classes.return}>
                  Return
                </Button>
              </Link>
            </p>
          </div>
        </div>
      </Paper>
    </div>
  );
};
export default ForgetPassword;
