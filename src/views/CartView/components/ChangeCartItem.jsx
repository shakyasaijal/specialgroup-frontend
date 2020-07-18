import React, { useState } from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';

import { changeCartRequest, cartDeleteRequest } from 'actions/cart';

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

const ChangeCartItem = (props) => {
  const classes = useStyles();
  const [cart, setCart] = useState(props.cart);

  const [open, setOpen] = useState(false);
  const [action, setAction] = useState('');

  const handleOpen = (a) => {
    setAction(a);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleQuantityChange = (e) => {
    setCart({ ...cart, quantity: e.target.value });
  };

  const cartUpdate = (e) => {
    e.preventDefault();
    props.changeCartRequest(cart.id, cart.quantity, () => props.cartUpdateSuccess(cart.id, cart.quantity));
    setOpen(false);
  };

  const cartDelete = (e) => {
    e.preventDefault();
    props.cartDeleteRequest(cart.id, props.cartRemoveSuccess(cart.id));
    setOpen(false);
  };

  const updateCart = (
    <>
      <h4 id="transition-modal-title">{cart.productName}</h4>
      <span>quantity: {cart.quantity}</span>
      <div id="transition-modal-description" className={classes.marginTop}>
        <Form>
          <div className={classes.formGroup}>
            <label className={classes.label}>New Quantity</label>
            <input
              placeholder="Enter Here"
              autoFocus
              onChange={handleQuantityChange}
              value={cart.quantity}
              className={classes.input}
              type="number"
            />
          </div>
          <div className={classes.formGroup}>
            <Button variant="contained" color="primary" size="small" onClick={cartUpdate}>
              Change
            </Button>{' '}
            <Button variant="contained" color="secondary" size="small" onClick={handleClose}>
              Cancel
            </Button>
          </div>
        </Form>
      </div>
    </>
  );

  const deleteCart = (
    <>
      <p>{cart.productName} will be permanently removed from the cart.</p>
      <div id="transition-modal-description" className={classes.marginTop}>
        <div className={classes.formGroup}>
          <Button variant="contained" color="primary" size="small" onClick={cartDelete}>
            Confirm
          </Button>{' '}
          <Button variant="contained" color="secondary" size="small" onClick={handleClose}>
            Cancel
          </Button>
        </div>
      </div>
    </>
  );

  return (
    <span className="change-cart">
      <EditIcon className="edit" onClick={() => handleOpen('edit')} />
      <DeleteForeverIcon className="delete" onClick={() => handleOpen('delete')} />
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
          <div className={classes.paper}>{action === 'delete' ? deleteCart : updateCart}</div>
        </Fade>
      </Modal>
    </span>
  );
};

const dispatchProps = { changeCartRequest, cartDeleteRequest };

export default connect(null, dispatchProps)(ChangeCartItem);
