import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';

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
  const [state, setState] = React.useState({ newNumber: '' });
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.callback('Phone successfully changed.', state.newNumber);
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
              <form method="POST" onSubmit={(e) => handleSubmit(e)}>
                <small>{props.currentPhone}</small>
                <div className={classes.formGroup}>
                  <label className={classes.label}>New Phone Number</label>
                  <input
                    placeholder="Enter Here"
                    autoFocus
                    onChange={(e) => setState({ newNumber: e.target.value })}
                    value={state.newNumber}
                    className={classes.input}
                    type="text"
                    name="phone"
                    required
                  />
                </div>
                <div className={classes.formGroup}>
                  <Button type="submit" variant="contained" color="primary" size="small">
                    Change
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default ChangePhone;
