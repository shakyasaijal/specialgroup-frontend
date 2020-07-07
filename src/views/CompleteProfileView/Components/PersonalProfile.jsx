import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { ERROR_EMPTY_PHONE, ERROR_EMPTY_LOCATION, ERROR_EMPTY_ADDRESS } from 'constants/ErrorMessages';

import { locationMapRequest } from 'actions/publicAction';

const useStyles = makeStyles((theme) => ({
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const PersonalProfile = (props) => {
  const classes = useStyles();
  const { phone = '', district = '', address = '' } = props.account;
  const [state, setState] = useState({ phone, district, address });
  const [errors, setErrors] = useState({ phone: '', district: '', address: '' });

  useEffect(() => {
    props.locationMapRequest();
    // eslint-disable-next-line
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setState({ ...state, [name]: value });
  };

  const handleNext = () => {
    const err = getErrors();

    if (err.phone || err.district || err.address) {
      setErrors({ ...err });

      return;
    }

    props.handleNext(state);
  };

  const getErrors = () => {
    const err = {};

    if (!state.phone) err.phone = ERROR_EMPTY_PHONE;
    if (!state.district) err.district = ERROR_EMPTY_LOCATION;
    if (!state.address) err.address = ERROR_EMPTY_ADDRESS;

    return err;
  };

  const locationDropdownData = props.locations.map((i, k) => (
    <option value={i} key={k}>
      {i}
    </option>
  ));

  return (
    <div className="center">
      <Typography className={classes.instructions}>
        <div className="personal-profile">
          <div className="profile-form center">
            <form className="form center">
              <div className="form-group">
                <label>Phone Number *</label>
                <input type="text" name="phone" value={state.phone || ''} onChange={handleChange} autoComplete="off" />
                {errors.phone && <small className="error">{errors.phone}</small>}
              </div>
              <div className="form-group">
                <label>Location *</label>
                <FormControl className={classes.formControl}>
                  <Select
                    native
                    name="district"
                    value={state.district}
                    onChange={handleChange}
                    id="grouped-native-select"
                  >
                    <option disabled value="">
                      --location--
                    </option>
                    {locationDropdownData}
                  </Select>
                </FormControl>
                {errors.district && <small className="error">{errors.district}</small>}
              </div>
              <div className="form-group">
                <label>Address *</label>
                <input
                  type="text"
                  name="address"
                  value={state.address || ''}
                  onChange={handleChange}
                  autoComplete="off"
                />
                {errors.address && <small className="error">{errors.address}</small>}
              </div>
            </form>
          </div>
        </div>
      </Typography>
      <div className="btn center">
        <Button variant="contained" color="primary" size="small" onClick={handleNext}>
          Next
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    locations: state.locationMap,
  };
};

const dispatchProps = { locationMapRequest };

export default connect(mapStateToProps, dispatchProps)(PersonalProfile);
