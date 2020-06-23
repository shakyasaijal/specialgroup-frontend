import React, { useState } from 'react';
import { connect } from 'react-redux';

import ChangeCity from './Components/ChangeCity';
import ChangeAddress from './Components/ChangeAddress';

const Address = (props) => {
  const { province, district, address } = props;
  const [state, setState] = useState({
    hasAddress: !!province && !!district,
    city: district,
    address: address,
    msg: '',
  });

  const cityChanged = (status, newCity) => {
    setState({ ...state, city: newCity, msg: status });
  };

  const addressChanged = (status, newAddress) => {
    setState({ ...state, address: newAddress, msg: status });
  };

  return (
    <div className="row">
      <div className="change-address center">
        <h3 className="page-title medium-dark">Your Address</h3>
        {state.hasAddress ? (
          <small className="small">
            Your default address has been set when you signed up. You can change delivery address during checkout as
            well.
          </small>
        ) : (
          ''
        )}

        <div className="block">{state.msg ? state.msg : ''}</div>
        <div className="address-container mt30">
          <div className="container">
            <div className="head">
              <h4>Address</h4>
              <h5 className="small-grey">{state.address}</h5>
            </div>
            <div className="tail">
              <ChangeAddress callback={addressChanged} address={state.address} />
            </div>
          </div>
          <div className="container">
            <div className="head">
              <h4>City</h4>
              <h5 className="small-grey">{state.city}</h5>
            </div>
            <div className="tail">
              <ChangeCity callback={cityChanged} city={state.city} />
            </div>
          </div>
          <div className="container">
            <div className="head">
              <h4>Country</h4>
              <h5 className="small-grey">Nepal</h5>
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
    province: account.province || '',
    district: account.district || '',
    address: account.address || '',
  };
};

export default connect(mapStateToProps, {})(Address);
