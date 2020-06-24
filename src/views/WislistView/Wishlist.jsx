import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ExploreIcon from '@material-ui/icons/Explore';
import { productsList } from 'constants/constants';
import Marts from 'components/partials/Marts';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  table: {
    minWidth: 650,
  },
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
}));

const Wishlist = () => {
  const wishlistProducts = productsList();
  const classes = useStyles();

  return (
    <>
      <div className="row">
        <div className="wishlist-container">
          <div className="page-title">Wishlist</div>
          <div className="wishlist-flex">
            <div className="wishlists">
              <TableContainer component={Paper}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                  <TableHead>
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell align="right">Product</TableCell>
                      <TableCell align="right">Price</TableCell>
                      <TableCell align="right">Stock Status</TableCell>
                      <TableCell align="right">Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {wishlistProducts &&
                      wishlistProducts.map((products, index) =>
                        products.wishlist ? (
                          <TableRow key={index}>
                            <TableCell component="th" scope="row">
                              <div className="img-container">
                                <img src={products.img} alt={products.name} />
                              </div>
                            </TableCell>
                            <TableCell align="right">{products.name}</TableCell>
                            <TableCell align="right">{products.price}</TableCell>
                            <TableCell align="right">
                              {products.inStock ? (
                                <Button variant="outlined" size="small" color="primary" className={classes.margin}>
                                  In Stock
                                </Button>
                              ) : (
                                <Button variant="outlined" size="small" color="secondary" className={classes.margin}>
                                  Out of stock
                                </Button>
                              )}
                            </TableCell>
                            <TableCell align="right">
                              <div className="floatRight">
                                <Link to="/">
                                  <Button
                                    variant="contained"
                                    size="small"
                                    color="default"
                                    className={classes.button}
                                    startIcon={<AddShoppingCartIcon />}
                                  >
                                    Add to cart
                                  </Button>
                                </Link>
                                <Link to="/">
                                  <Button
                                    variant="contained"
                                    size="small"
                                    color="primary"
                                    className={classes.button}
                                    startIcon={<ExploreIcon />}
                                  >
                                    Explore Related
                                  </Button>
                                </Link>
                                <Link to="/">
                                  <Button
                                    variant="contained"
                                    size="small"
                                    color="secondary"
                                    className={classes.button}
                                    startIcon={<DeleteIcon />}
                                  >
                                    Delete
                                  </Button>
                                </Link>
                              </div>
                            </TableCell>
                          </TableRow>
                        ) : (
                          ''
                        )
                      )}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
      </div>
      <Marts />
    </>
  );
};

export default Wishlist;
