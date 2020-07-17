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
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import Marts from 'components/partials/Marts';

import { getImageBasePath } from 'config/Config';

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

  const cartDeleteConfirmDialog = (e, c) => {
    e.preventDefault();
    
    // for now js confirm is used for prompt, need to make modal for this purpose
    if (window.confirm(`Remove ${c.productName} from the cart?`)) {
      props.cartDeleteRequest(c.id, () => cartRemoveSuccess(c.id));
    }
  };

  const cartRemoveSuccess = (id) => {
    const ps = [...cart.product];
    const filteredProduct = ps.filter((p) => p.id !== id);
    const grandTotal = filteredProduct.reduce((a, b) => +a + +b.total, 0);

    setCart({ product: filteredProduct, grandTotal });
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
                    <TableCell>Product Image</TableCell>
                    <TableCell>Product Description</TableCell>
                    <TableCell>Stock</TableCell>
                    <TableCell align="right">Price.</TableCell>
                    <TableCell align="right">Qty.</TableCell>
                    <TableCell align="right">Sum</TableCell>
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
                      <TableCell>
                        {c.productName}
                        <div className="delete" title="Remove from cart" onClick={(e) => cartDeleteConfirmDialog(e, c)}>
                          <DeleteForeverIcon />
                        </div>
                      </TableCell>
                      <TableCell>
                        {c.status && <span className="inStock">In Stock</span>}
                        {!c.status && <span className="outOfStock">Out of Stock</span>}
                      </TableCell>
                      <TableCell align="right">Rs. {c.price}</TableCell>
                      <TableCell align="right">
                        <input type="number" min="1" value={c.quantity || ''} className="quantity" />
                      </TableCell>
                      <TableCell align="right">{c.total}</TableCell>
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
                      <b>Total</b>
                    </TableCell>
                    <TableCell align="right">
                      <b>{cart.grandTotal}</b>
                    </TableCell>
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
