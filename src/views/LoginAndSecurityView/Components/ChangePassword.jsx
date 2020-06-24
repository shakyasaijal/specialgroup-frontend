import React, { useState } from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';

import { changePasswordRequest } from 'actions/account';

import Form from 'components/Form/Form';

import { ERROR_PASSWORD_LENGTH, ERROR_CONFIRM_PASSWORD, ERROR_EMPTY_PASSWORD } from 'constants/ErrorMessages';

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
  marginTop: {
    marginTop: '20px',
  },
  formGroup: {
    marginTop: '15px',
  },
  input: {
    padding: '8px',
    fontSize: '15px',
  },
  label: {
    fontSize: '14px',
    color: '#4a68b4',
  },
}));

const ChangePassword = (props) => {
  const initialState = { oldPassword: '', newPassword: '', confirmPassword: '' };
  const classes = useStyles();
  const [state, setState] = useState(initialState);
  const [errors, setErrors] = useState(initialState);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    clearFormErrors();
    const err = getFormErrors();

    if (err.newPassword || err.confirmPassword) {
      setErrors(err);

      return;
    }

    const { changePasswordRequest, callbackSuccess, callbackError } = props;
    const { oldPassword, newPassword, confirmPassword } = state;

    changePasswordRequest(oldPassword, newPassword, confirmPassword, callbackSuccess, callbackError);
    handleClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setState({ ...state, [name]: value });
  };

  const getFormErrors = () => {
    const err = {};
    const { oldPassword, newPassword, confirmPassword } = state;

    if (!oldPassword) err.oldPassword = ERROR_EMPTY_PASSWORD;
    if (newPassword.length < 8) err.newPassword = ERROR_PASSWORD_LENGTH;
    if (!newPassword) err.newPassword = ERROR_EMPTY_PASSWORD;
    if (newPassword !== confirmPassword) err.confirmPassword = ERROR_CONFIRM_PASSWORD;

    return err;
  };

  const clearFormErrors = () => {
    setErrors(initialState);
  };

  return (
    <div className="change-password">
      <Button onClick={handleOpen} variant="contained" color="primary" size="small">
        Change
      </Button>
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
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Change Password</h2>
            <div id="transition-modal-description" className={classes.marginTop}>
              <Form onSubmit={handleSubmit}>
                <div className={classes.formGroup}>
                  <label className={classes.label}>Old Password</label>
                  <input
                    className={!errors.oldPassword ? classes.input : classes.input + ' error-input'}
                    type="password"
                    name="oldPassword"
                    onChange={handleChange}
                  />
                </div>
                {errors.oldPassword && <small className="error">{errors.oldPassword}</small>}
                <div className={classes.formGroup}>
                  <label className={classes.label}>New Password</label>
                  <input
                    className={
                      errors.oldPassword
                        ? classes.input + ' error-input'
                        : errors.confirmPassword
                          ? classes.input + ' error-input'
                          : classes.input
                    }
                    type="password"
                    name="newPassword"
                    onChange={handleChange}
                  />
                </div>
                {errors.newPassword && <small className="error">{errors.newPassword}</small>}
                <div className={classes.formGroup}>
                  <label className={classes.label}>Confirm Password</label>
                  <input
                    className={!errors.confirmPassword ? classes.input : classes.input + ' error-input'}
                    type="password"
                    name="confirmPassword"
                    onChange={handleChange}
                  />
                </div>
                {errors.confirmPassword && <small className="error">{errors.confirmPassword}</small>}
                <div className={classes.formGroup}>
                  <Button onClick={handleSubmit} variant="contained" color="primary" size="small">
                    Change
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

const dispatchProps = { changePasswordRequest };

export default connect(null, dispatchProps)(ChangePassword);
