import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import { resendVerificationEmailRequest } from 'actions/auth';

import { isAccountVerified } from 'selectors/auth';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  gridPaper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const NotVerifiedModal = (props) => {
  const isVerified = props.isVerified;
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [response, setResponse] = useState('Sorry, Email has not been sent. Please check your email and try again');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (!isVerified) {
      handleOpen();
    }
  }, [isVerified]);

  const handleClick = () => {
    const { email, resendVerificationEmailRequest } = props;
    resendVerificationEmailRequest(email, callbackSuccess);
  };

  const callbackSuccess = () => {
    setEmailSent(true);
    setResponse(`We have sent you an email at ${props.email} Please check your email inbox.`);
  };

  const resendMailContent = (
    <div className={classes.paper}>
      <div className="container center text-center">
        <div className="description">
          <div className="reason center">
            You have <b>not verified</b> your account yet. If you have missed it, please press the button below.
          </div>
          <div className="btn">
            <button onClick={handleClick}>Resend Verification Link</button>
          </div>
        </div>
      </div>
      <div className="later">
        <div className="float-right">
          <span onClick={handleClose} className="maybe-later">
            Maybe Later
          </span>
        </div>
      </div>
    </div>
  );

  const mailSentContent = (
    <div className={classes.paper}>
      <div className="container center text-center">
        <div className="description">
          <div className="reason center">{response}</div>
        </div>
      </div>
      <div className="later">
        <div className="float-right">
          <span onClick={handleClose} className="maybe-later">
            Close
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <div className="not-verified">
        <Fade in={open}>{!emailSent ? resendMailContent : mailSentContent}</Fade>
      </div>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {
    email: state.account.email || '',
    isVerified: isAccountVerified(state),
  };
};

const dispatchProps = { resendVerificationEmailRequest };
export default connect(mapStateToProps, dispatchProps)(NotVerifiedModal);
