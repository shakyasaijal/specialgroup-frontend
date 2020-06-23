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

const ChangePhone = (props) => {
  const classes = useStyles();
  const [phone, setPhone] = useState(props.phone);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.phone !== phone) {
      props.updateAccountInfo(
        phone,
        '',
        '',
        '',
        '',
        props.callback(`Phone number successfully changed to ${phone}.`, phone)
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
            <h2 id="transition-modal-title">Change Phone</h2>
            <div id="transition-modal-description" className={classes.marginTop}>
              <Form onSubmit={handleSubmit}>
                <small>{props.currentPhone}</small>
                <div className={classes.formGroup}>
                  <label className={classes.label}>New Phone Number</label>
                  <input
                    placeholder="Enter Here"
                    autoFocus
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    className={classes.input}
                    type="text"
                    required
                  />
                </div>
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

const dispatchProps = { updateAccountInfo };

export default connect(null, dispatchProps)(ChangePhone);
