import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PersonalProfile from './Components/PersonalProfile';
import Marketing from './Components/Marketing';
import Interest from './Components/Interest';
import PATHS from 'routes';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Personal Profile', 'Marketing', 'Your interests'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <PersonalProfile />;
    case 1:
      return <Marketing />;
    case 2:
      return <Interest />;
    default:
      return 'Unknown stepIndex';
  }
}

const ProfileData = (props) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  useEffect(() => {
    if (activeStep === steps.length) {
      const { history } = props;

      history.push('/');
    }
  }, [activeStep, steps.length, props]);

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
            <div>
              {activeStep === steps.length ? (
                <div></div>
              ) : (
                <div className="center">
                  <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                  <div className="btn center">
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      size="small"
                      className={classes.backButton}
                    >
                      Back
                    </Button>
                    <Button variant="contained" color="primary" size="small" onClick={handleNext}>
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                    <Link to={PATHS.ACCOUNT_SETTINGS} className="float-right complete-later">
                      Complete Later
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileData;
