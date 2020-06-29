import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { marketingPlatformRequest } from 'actions/publicAction';

import PATHS from 'routes';

const useStyles = makeStyles((theme) => ({
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const Marketing = (props) => {
  const classes = useStyles();
  const { handleBack, handleNext } = props;
  const [state, setState] = useState({ marketing: props.account.marketing });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setState({ ...state, [name]: value });
  };

  const handleToggle = () => {
    setState({ ...state, others: !state.others, placeholder: state.others ? 'Mention Here' : '' });
  };

  const handleInput = (event) => {
    setState({ ...state, othersValue: event.target.value });
  };

  useEffect(() => {
    props.marketingPlatformRequest();
    // eslint-disable-next-line
  }, []);

  const radioData = props.marketingPlatforms.map((i, k) => (
    <div className="content" key={k}>
      <input
        type="radio"
        name="marketing"
        className="radio"
        onChange={handleChange}
        value={i}
        checked={i === state.marketing}
      />
      <span className="verticle-center">{i}</span>
    </div>
  ));

  return (
    <div className="center">
      <Typography className={classes.instructions}>
        <div className="personal-profile">
          <div className="profile-form center">
            <div className="form">
              <form className="center">
                <div className="title">Where did you hear us from?</div>
                <div className="form-group">
                  {radioData}
                  <div className="content">
                    <input type="radio" name="marketing" className="radio" onChange={handleToggle} value="others" />
                    <span className="verticle-center">Others</span>
                  </div>
                  <input
                    type="text"
                    className="others"
                    value={state.othersValue}
                    placeholder={state.placeholder}
                    onChange={(e) => handleInput(e)}
                    name="othersValue"
                    disabled={state.others ? 'disabled' : ''}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </Typography>
      <div className="btn center">
        <Button onClick={handleBack} size="small" className={classes.backButton}>
          Back
        </Button>
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
    marketingPlatforms: state.marketingPlatforms || [],
  };
};

const dispatchProps = { marketingPlatformRequest };

export default connect(mapStateToProps, dispatchProps)(Marketing);
