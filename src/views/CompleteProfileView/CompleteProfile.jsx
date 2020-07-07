import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import PersonalProfile from './Components/PersonalProfile';
import Marketing from './Components/Marketing';
import Interest from './Components/Interest';

import { completeProfileRequest } from 'actions/account';
import { notificationTSRequest } from 'actions/notificationTimeStamp';

import PATHS from 'routes';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
}));

const getSteps = () => {
  return ['Personal Profile', 'Marketing', 'Your interests'];
};

const CompleteProfile = (props) => {
  const [payload, setPayload] = useState({});
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = (data) => {
    setPayload({ ...payload, ...data });
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleFinish = (interests) => {
    const { phone, address, district, marketing } = payload;

    props.completeProfileRequest(phone, address, district, marketing, interests, callbackSuccess);
  };

  const callbackSuccess = () => {
    props.history.push(PATHS.HOME);
  };

  const handleCompleteLater = () => {
    props.notificationTSRequest('completeLaterClickedAt', () => props.history.push(PATHS.HOME));
  };

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return <PersonalProfile handleNext={handleNext} account={props.account} />;
      case 1:
        return <Marketing handleBack={handleBack} handleNext={handleNext} account={props.account} />;
      case 2:
        return <Interest handleBack={handleBack} handleFinish={handleFinish} account={props.account} />;
      default:
        return 'Unknown stepIndex';
    }
  };

  return (
    <div className="row">
      <div className="complete-profile-container">
        <div className="black-out"></div>
        <div className="complete-profile center bo">
          <div className={classes.root}>
            <div className="page-title">
              <div className="page-title text-center">Complete your profile</div>
            </div>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <div>{getStepContent(activeStep)}</div>
            <div className="btn center">
              <span className="float-right complete-later" onClick={handleCompleteLater}>
                Complete Later
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { account } = state;

  return {
    account,
  };
};

const dispatchProps = { completeProfileRequest, notificationTSRequest };

export default connect(mapStateToProps, dispatchProps)(withRouter(CompleteProfile));
