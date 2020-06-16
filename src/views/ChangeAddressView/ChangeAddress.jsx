import React from 'react';
import ChangeCity from './Components/ChangeCity';
import AddressChange from './Components/AddressChange';

const ChangeAddress = () => {
  const [state, setState] = React.useState({
    hasAddress: true,
    city: 'Lalitpur',
    address: 'Civil Homes - VI, dhapakhel',
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
              <AddressChange callback={addressChanged} currentAddress={state.address} />
            </div>
          </div>
          <div className="container">
            <div className="head">
              <h4>City</h4>
              <h5 className="small-grey">{state.city}</h5>
            </div>
            <div className="tail">
              <ChangeCity callback={cityChanged} currentCity={state.city} />
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

export default ChangeAddress;
