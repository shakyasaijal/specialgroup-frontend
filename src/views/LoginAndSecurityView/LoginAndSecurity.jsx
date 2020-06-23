import React from 'react';
import { connect } from 'react-redux';

import ChangePassword from './Components/ChangePassword';
import ChangePhone from './Components/ChangePhone';

const LoginAndSecurity = (props) => {
  const [state, setState] = React.useState({ passwordStatus: '', phoneChange: '', currentPhone: props.phone });
  const passwordChanged = (status) => {
    if (status) {
      setState({ ...state, passwordStatus: status });
    }
  };
  const phoneChanged = (status, newPhone) => {
    if (status) {
      setState({ ...state, phoneChange: status, currentPhone: newPhone });
    }
  };

  return (
    <div className="row">
      <div className="login-and-security center">
        <div className="page-title">
          <h3 className="medium-dark">Login and Security</h3>
          {state.passwordStatus ? state.passwordStatus : ''}
          {state.phoneChange ? state.phoneChange : ''}
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
              <h5 className="small-grey">{state.currentPhone}</h5>
            </div>
            <div className="tail">
              <ChangePhone phone={state.currentPhone} callback={phoneChanged} />
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

const mapStateToProps = (state) => {
  const { account } = state;

  
  return {
    phone: account.phone || '',
  };
};

export default connect(mapStateToProps, {})(LoginAndSecurity);
