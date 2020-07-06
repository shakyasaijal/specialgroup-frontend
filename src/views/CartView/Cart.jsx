import React from 'react';
import { cartItems } from 'constants/constants';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { Link } from 'react-router-dom';
import Marts from 'components/partials/Marts';

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const Cart = () => {
  const carts = cartItems();
  const classes = useStyles();
  const isVerified = true;

  return (
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
                        <input className="quantity" type="number" value={cart.quantity} />
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
                        'Please verify your account to checkout.'
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
  );
};

export default Cart;
