import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import Marts from 'components/partials/Marts';

import { cartDataRequest } from 'actions/cart';

import { getCart } from 'selectors/cart';
import { isAccountVerified } from 'selectors/auth';

import { cartItems } from 'constants/constants';

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const Cart = (props) => {
  const carts = cartItems();
  const classes = useStyles();
  const isVerified = props.isVerified;
  const [cartDataLoaded, setCartDataLoaded] = useState(false);

  useEffect(() => {
    props.cartDataRequest(callbackSuccess);
  }, []);

  const callbackSuccess = () => {
    setCartDataLoaded(true);
  };

  return cartDataLoaded ? (
    <>
      <div className="row carts">
        <div className="page-title">My Cart</div>
        <div className="cart-container">
          {carts.data.length > 0 ? (
            <TableContainer component={Paper} className="mt10">
              <Table className={classes.table} aria-label="spanning table">
                <TableHead>
                  <TableRow>
                    <TableCell>Product Image</TableCell>
                    <TableCell>Product Description</TableCell>
                    <TableCell>Stock</TableCell>
                    <TableCell align="right">Price.</TableCell>
                    <TableCell align="right">Qty.</TableCell>
                    <TableCell align="right">Sum</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {carts.data.map((cart, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <div className="cart-img-container">
                          <img src={cart.image} alt={cart.productName} />
                        </div>
                      </TableCell>
                      <TableCell>
                        {cart.productName}
                        <Link to="/">
                          <div className="delete">
                            <DeleteForeverIcon />
                          </div>
                        </Link>
                      </TableCell>
                      <TableCell>
                        {cart.status ? (
                          <span className="inStock">In Stock</span>
                        ) : (
                          <span className="outOfStock">Out of Stock</span>
                        )}
                      </TableCell>
                      <TableCell align="right">{cart.price}</TableCell>
                      <TableCell align="right">
                        <input className="quantity" value={cart.quantity || ''} disabled={true} />
                      </TableCell>
                      <TableCell align="right">{cart.total}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell colSpan={4} rowSpan={3}>
                      {isVerified ? (
                        <Link className="checkout" to="/">
                          Check Out
                        </Link>
                      ) : (
                        'We are unable to proceed checkout unless you verify your email. verify here'
                      )}
                    </TableCell>
                    <TableCell>
                      <b>Total</b>
                    </TableCell>
                    <TableCell align="right">
                      <b>{carts.grandTotal}</b>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <div className="no-cart">
              <div>You have no items in your shopping cart.</div>
              <div>
                Click{' '}
                <Link to="/" className="click-here">
                  here
                </Link>{' '}
                to continue shopping.
              </div>
            </div>
          )}
        </div>
      </div>
      <Marts />
    </>
  ) : (
    // should add skeleton design
    <></>
  );
};

const mapStateToProps = (state) => {
  return {
    isVerified: isAccountVerified(state),
    cart: getCart(state),
  };
};

const dispatchProps = { cartDataRequest };

export default connect(mapStateToProps, dispatchProps)(Cart);
