import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { locationMapRequest } from 'actions/publicAction';

import PATHS from 'routes';

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
  const { phone, district, address } = props.account;
  const [state, setState] = useState({ phone, district, address });
  const { handleNext } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setState({ ...state, [name]: value });
  };

  useEffect(() => {
    props.locationMapRequest();
    // eslint-disable-next-line
  }, []);

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
                <input type="text" name="phone" value={state.phone} onChange={handleChange} autoComplete="off" />
              </div>
              <div className="form-group">
                <label>Location *</label>
                <FormControl className={classes.formControl}>
                  <Select native defaultValue={state.district} onChange={handleChange} id="grouped-native-select">
                    {locationDropdownData}
                  </Select>
                </FormControl>
              </div>
              <div className="form-group">
                <label>Address *</label>
                <input type="text" name="phone" value={state.address} onChange={handleChange} autoComplete="off" />
              </div>
            </form>
          </div>
        </div>
      </Typography>
      <div className="btn center">
        <Button variant="contained" color="primary" size="small" onClick={() => handleNext(state)}>
          Next
        </Button>
        <Link to={PATHS.HOME} className="float-right complete-later">
          Complete Later
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    locations: state.locationMap || [],
  };
};

const dispatchProps = { locationMapRequest };

export default connect(mapStateToProps, dispatchProps)(PersonalProfile);
