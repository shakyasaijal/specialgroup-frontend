import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';

import { locationMapRequest } from 'actions/publicAction';

import Form from 'components/Form/Form';

import { parseLocationData } from 'selectors/publicSelector';

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

const ChangeCity = (props) => {
  const classes = useStyles();
  const [locationMapSuccess, setLocationMapSuccess] = useState(true);
  const [open, setOpen] = useState(false);
  // const [state, setState] = useState({ new_city: '' });

  useEffect(() => {
    props.locationMapRequest(callbackSuccess);
    // eslint-disable-next-line
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // props.callback('City successfully changed.', state.new_city);
    handleClose();
  };

  const fetchingLocationContent = <span> Please wait...</span>;

  const callbackSuccess = () => {
    setLocationMapSuccess(true);
  };

  const locationDropdownData = () => {
    const d = parseLocationData(props.locations);

    return d.map((i, k) => (
      <option value={i.id} key={k}>
        {i.district}
      </option>
    ));
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
            {!locationMapSuccess ? (
              fetchingLocationContent
            ) : (
              <>
                <h2 id="transition-modal-title">Change City</h2>
                <div id="transition-modal-description" className={classes.marginTop}>
                  <Form onSubmit={handleSubmit}>
                    <small>{props.currentCity}</small>
                    <div className={classes.formGroup}>
                      <label className={classes.label}>New City</label>
                      {/* <input
                    placeholder="Enter Here"
                    autoFocus
                    onChange={(e) => setState({ newCity: e.target.value })}
                    value={state.newCity}
                    className={classes.input}
                    type="text"
                    name="city"
                    required
                    /> */}
                      <select className={classes.input}>{locationDropdownData()}</select>
                    </div>
                    <div className={classes.formGroup}>
                      <Button type="submit" variant="contained" color="primary" size="small">
                        Change
                      </Button>
                    </div>
                  </Form>
                </div>
              </>
            )}
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    locations: state.locationMap || [],
  };
};

const dispatchProps = { locationMapRequest };

export default connect(mapStateToProps, dispatchProps)(ChangeCity);
