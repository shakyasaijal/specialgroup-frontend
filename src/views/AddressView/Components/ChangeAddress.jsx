import React, { useState } from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';

import { updateAccountInfo } from 'actions/account';

import Form from 'components/Form/Form';

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

const ChangeAddress = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [address, setAddress] = useState(props.address);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (props.address !== address) {
      props.updateAccountInfo(
        '',
        address,
        '',
        '',
        '',
        '',
        props.callback(`Address successfully changed to ${address}.`, address)
      );
    }

    handleClose();
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
            <h2 id="transition-modal-title">Change Address</h2>
            <div id="transition-modal-description" className={classes.marginTop}>
              <Form onSubmit={handleSubmit}>
                <small>Current Address: {props.address}</small>
                <div className={classes.formGroup}>
                  <label className={classes.label}>New Address</label>
                  <input
                    placeholder="Enter Here"
                    autoFocus
                    onChange={(e) => setAddress(e.target.value)}
                    value={address}
                    className={classes.input}
                    type="text"
                  />
                </div>
                <div className={classes.formGroup}>
                  <Button variant="contained" color="primary" size="small" onClick={handleSubmit}>
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

const dispatchProps = { updateAccountInfo };

export default connect(null, dispatchProps)(ChangeAddress);
