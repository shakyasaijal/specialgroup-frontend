import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Marts from 'components/partials/Marts';

import { getImageBasePath } from 'config/Config';
import ChangeCartItem from './ChangeCartItem';

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const NoItem = () => {
  return (
    <div className="no-cart">
      <div>You have no items in your shopping cart.</div>
      <div>
        <Link to="/" className="click-here">
          Continue shopping.
        </Link>
      </div>
    </div>
  );
};

const CartTable = (props) => {
  const classes = useStyles();
  const [cart, setCart] = useState({ product: [...props.cart.product], grandTotal: props.cart.grandTotal });

  const cartRemoveSuccess = (id) => {
    const ps = [...cart.product];
    const filteredProduct = ps.filter((p) => p.id !== id);
    const grandTotal = filteredProduct.reduce((a, b) => +a + +b.total, 0);

    setCart({ product: filteredProduct, grandTotal });
  };

  const cartUpdateSuccess = (id, quantity) => {
    const ps = [...cart.product];

    ps.forEach((p) => {
      if (p.id === id) {
        p.quantity = quantity;
        p.total = quantity * p.price;
      }
    });
    const grandTotal = ps.reduce((a, b) => +a + +b.total, 0);

    setCart({ product: ps, grandTotal });
  };

  return (
    <>
      <div className="row carts">
        <div className="page-title">My Cart</div>
        <div className="cart-container">
          {cart.product && cart.product.length > 0 ? (
            <TableContainer component={Paper} className="mt10">
              <Table className={classes.table} aria-label="spanning table">
                <TableHead>
                  <TableRow>
                    <TableCell>Image</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell align="right">Rate</TableCell>
                    <TableCell align="right">Quantity</TableCell>
                    <TableCell align="right">Total</TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cart.product.map((c, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <div className="cart-img-container">
                          <img src={getImageBasePath(c.image)} alt={c.productName} />
                        </div>
                      </TableCell>
                      <TableCell>{c.productName}</TableCell>
                      <TableCell>
                        {c.status && <span className="inStock">In Stock</span>}
                        {!c.status && <span className="outOfStock">Out of Stock</span>}
                      </TableCell>
                      <TableCell align="right">Rs. {c.price}</TableCell>
                      <TableCell align="right">{c.quantity}</TableCell>
                      <TableCell align="right">{c.total}</TableCell>
                      <TableCell align="right">
                        <ChangeCartItem
                          cart={c}
                          cartRemoveSuccess={cartRemoveSuccess}
                          cartUpdateSuccess={cartUpdateSuccess}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell colSpan={4} rowSpan={3}>
                      {props.isVerified && (
                        <Link className="checkout" to="/">
                          Check Out
                        </Link>
                      )}
                      {!props.isVerified && <p>We are unable to proceed checkout unless you verify your email.</p>}
                    </TableCell>
                    <TableCell>
                      <b>Total Cost</b>
                    </TableCell>
                    <TableCell align="right">
                      <b>{cart.grandTotal}</b>
                    </TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <NoItem />
          )}
        </div>
      </div>
      <Marts />
    </>
  );
};

export default CartTable;
