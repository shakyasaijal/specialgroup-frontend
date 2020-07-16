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

import { cartRequest } from 'actions/cart';

import { getCart } from 'selectors/cart';
import { isAccountVerified } from 'selectors/auth';

import { getImageBasePath } from 'config/Config';

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const Cart = (props) => {
  const classes = useStyles();
  const [cartLoaded, setcartLoaded] = useState(false);

  useEffect(() => {
    props.cartRequest(callbackSuccess);
  }, []);

  const callbackSuccess = () => {
    setcartLoaded(true);
  };

  return cartLoaded ? (
    <>
      <div className="row carts">
        <div className="page-title">My Cart</div>
        <div className="cart-container">
          {props.cart.product && props.cart.product.length > 0 ? (
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
                  {props.cart.product.map((c, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <div className="cart-img-container">
                          <img src={getImageBasePath(c.image)} alt={c.productName} />
                        </div>
                      </TableCell>
                      <TableCell>
                        {c.productName}
                        <Link to="/" title="Remove from cart">
                          <div className="delete">
                            <DeleteForeverIcon />
                          </div>
                        </Link>
                      </TableCell>
                      <TableCell>
                        {c.status && <span className="inStock">In Stock</span>}
                        {!c.status && <span className="outOfStock">Out of Stock</span>}
                      </TableCell>
                      <TableCell align="right">Rs. {c.price}</TableCell>
                      <TableCell align="right">
                        <input className="quantity" value={c.quantity || ''} />
                      </TableCell>
                      <TableCell align="right">{c.total}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell colSpan={4} rowSpan={3}>
                      {props.isVerified ? (
                        <Link className="checkout" to="/">
                          Check Out
                        </Link>
                      ) : (
                        'We are unable to proceed checkout unless you verify your email.'
                      )}
                    </TableCell>
                    <TableCell>
                      <b>Total</b>
                    </TableCell>
                    <TableCell align="right">
                      <b>{props.cart.grandTotal}</b>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <div className="no-cart">
              <div>You have no items in your shopping cart.</div>
              <div>
                <Link to="/" className="click-here">
                  Continue shopping.
                </Link>
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

const dispatchProps = { cartRequest };

export default connect(mapStateToProps, dispatchProps)(Cart);
