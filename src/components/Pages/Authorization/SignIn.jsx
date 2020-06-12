import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import SocialAuth from './SocialAuth';

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

const SignIn = () => {
  const classes = useStyles();
  const [form, setForm] = useState({ email: '', password: '' });

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
              <form method="POST">
                <div className="form-group">
                  <label className="small-font">Email</label>
                  <input
                    type="email"
                    autoComplete="off"
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    name="email"
                    value={form.email}
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
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    name="password"
                    value={form.password}
                  />
                </div>
                <div className="form-group">
                  <ColorButton
                    variant="contained"
                    color="red"
                    size="small"
                    className={classes.button}
                    startIcon={<LockOpenIcon />}
                  >
                    SIGN IN
                  </ColorButton>
                </div>
              </form>
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
