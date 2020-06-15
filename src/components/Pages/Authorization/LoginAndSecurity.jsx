import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import ChangePassword from './ChangePassword';

const LoginAndSecurity = () => {
  const [password, setPassword] = React.useState('');
  const passwordChanged = (status) => {
    if (status) {
      setPassword(status);
    }
  };
  return (
    <div className="row">
      <div className="login-and-security center">
        <div className="page-title">
          <h3 className="medium-dark">Login and Security</h3>
          {password ? password : ''}
        </div>
        <div className="container mt10">
          <div className="security">
            <div className="head">
              <h4>Full Name</h4>
              <h5 className="small-grey">Saijal Shakya</h5>
            </div>
            <div className="tail"></div>
          </div>
          <div className="security">
            <div className="head">
              <h4>Username</h4>
              <h5 className="small-grey">saijalshakya</h5>
            </div>
            <div className="tail"></div>
          </div>
          <div className="security">
            <div className="head">
              <h4>Email</h4>
              <h5 className="small-grey">saijalshakya@gmail.com</h5>
            </div>
            <div className="tail"></div>
          </div>
          <div className="security">
            <div className="head">
              <h4>Phone Number</h4>
              <h5 className="small-grey">+977 9813455199</h5>
            </div>
            <div className="tail">
              <Link to="/">
                <Button variant="contained" color="primary" size="small">
                  Change
                </Button>
              </Link>
            </div>
          </div>
          <div className="security">
            <div className="head">
              <h4>Password</h4>
              <h5 className="small-grey">********</h5>
            </div>
            <div className="tail">
              <ChangePassword callback={passwordChanged} />
            </div>
          </div>
          <div className="security">
            <div className="head">
              <h4>Registered On</h4>
              <h5 className="small-grey">2020-04-15</h5>
            </div>
            <div className="tail"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginAndSecurity;
