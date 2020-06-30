import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { popularCategoryRequest } from 'actions/publicAction';

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

const Interest = (props) => {
  const defaultErrorState = { interests: '' };
  const classes = useStyles();
  const { handleBack } = props;
  const [state, setState] = useState({ interests: props.account.interest });
  const [errors, setErrors] = useState(defaultErrorState);

  const handleClick = (e) => {
    e.preventDefault();

    const { value } = e.target;
    let tempArr = [...state.interests];
    const index = tempArr.indexOf(value);

    if (index !== -1) {
      tempArr.splice(index, 1);
    } else {
      tempArr = [...tempArr, value];
    }

    setState({ interests: tempArr });
  };

  useEffect(() => {
    props.popularCategoryRequest();
    // eslint-disable-next-line
  }, []);

  const handleFinish = () => {
    if (!state.interests.length) {
      setErrors({ interests: 'Please select at least one interest.' });

      return;
    }

    props.handleFinish(state.interests);
  };

  const isAlreadyOnList = (item) => {
    return state.interests.length && state.interests.includes(item);
  };

  const interestList = props.popularCategories.map((i, k) => {
    return (
      <li key={k}>
        <button value={i} onClick={handleClick} className={isAlreadyOnList(i) ? 'tag selected' : 'tag'}>
          {i}
        </button>
      </li>
    );
  });

  return (
    <div className="center">
      <Typography className={classes.instructions}>
        <div className="personal-profile">
          <div className="profile-form center">
            <div className="form">
              <form className="center">
                <div className="title">What are you interested in?</div>
                <div className="form-group tags">{interestList}</div>
              </form>
            </div>
          </div>
          {errors.interests && <small className="error">{errors.interests}</small>}
        </div>
      </Typography>
      <div className="btn center">
        <Button onClick={handleBack} size="small" className={classes.backButton}>
          Back
        </Button>
        <Button variant="contained" color="primary" size="small" onClick={handleFinish}>
          Finish
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
    popularCategories: state.popularCategories || [],
  };
};

const dispatchProps = { popularCategoryRequest };

export default connect(mapStateToProps, dispatchProps)(Interest);
