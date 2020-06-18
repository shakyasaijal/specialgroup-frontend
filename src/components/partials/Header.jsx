import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Navigation from './Navigation';
import Fade from '@material-ui/core/Fade';

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

const Header = () => {
  const verified = false;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (!verified) {
      handleOpen()
    }
  }, [verified])

  const handleClick = () => {
    console.log("Clicked");
    handleClose();
  }

  return (
    <>
      <Navigation />
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
          <Fade in={open}>
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
                  <span onClick={handleClose} className="maybe-later">Maybe Later</span>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </Modal>
    </>
  );
};

export default Header;
