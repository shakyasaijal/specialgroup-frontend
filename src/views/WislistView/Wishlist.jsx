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
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';

import { productsList, productsWithBanner } from 'constants/constants';


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
    const bannerProducts = productsWithBanner();
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
                                        {
                                            wishlistProducts && wishlistProducts.map((products, index) =>
                                                products.wishlist ? <TableRow key={index}>
                                                    <TableCell component="th" scope="row">
                                                        <div className="img-container">
                                                            <img src={products.img} alt={products.name} />
                                                        </div>
                                                    </TableCell>
                                                    <TableCell align="right">{products.name}</TableCell>
                                                    <TableCell align="right">{products.price}</TableCell>
                                                    <TableCell align="right">{products.inStock ? <Button variant="outlined" size="small" color="primary" className={classes.margin}>
                                                        In Stock
                                                    </Button> : <Button variant="outlined" size="small" color="secondary" className={classes.margin}>
                                                            Out of stock
                                                            </Button>}
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        <div className="floatRight">
                                                            <Link to='/'>
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
                                                            <Link to='/'>
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
                                                            <Link to='/'>
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
                                                </TableRow> : ''
                                            )
                                        }
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="marts">
                    {
                        bannerProducts && bannerProducts.map((contents, index) =>
                            <div className="mart-container center" key={index}>
                                {/** This is a category banner */}
                                <div className="category-banner">
                                    <div className="img-containier">
                                        <img src={contents.categoryBanner} alt={contents.category} height="100%" width="100%" />
                                    </div>
                                    <div className="category-name top verticle-center text-center">
                                        <h3>{contents.category}</h3>
                                    </div>
                                    <div className="category-seeMore top">
                                        <Link to='/'>
                                            <button className="see-more">See More</button>
                                        </Link>
                                    </div>
                                </div>
                                {/** This is a category banner end */}

                                {/** This is a sub category and product */}
                                <div className="subCategory-container center">
                                    <ul>
                                        {
                                            contents.subCategory && contents.subCategory.map((subcategory, subIndex) =>
                                                <>
                                                    <div className="subcategory-product" key={subIndex}>
                                                        <li className="subcategory text-center">
                                                            <div className="name mt10">
                                                                {subcategory.name}
                                                            </div>
                                                            <div className="img-container center">
                                                                <img src={subcategory.image} alt={subcategory.name} />
                                                            </div>
                                                            <div className="see-more">
                                                                <Link to='/'>
                                                                    <button>See More</button>
                                                                </Link>
                                                            </div>
                                                        </li>
                                                        {
                                                            subcategory.products && subcategory.products.map((product, subIndex2) =>
                                                                <li key={subIndex2} className="product">
                                                                    <Card className={classes.root}>
                                                                        <Link to='/'>
                                                                            <CardActionArea>
                                                                                <CardMedia
                                                                                    className={classes.media}
                                                                                    image={product.image}
                                                                                    title={product.name}
                                                                                />
                                                                                <CardContent>
                                                                                    <div className="productName">{product.name}</div>
                                                                                    <Typography variant="body1" color="textSecondary" component="h4" className="mt10">
                                                                                        <span className="productPrice">Rs. {product.price}</span> {product.oldPrice && <span className='oldPrice'>{product.oldPrice}</span>}
                                                                                    </Typography>
                                                                                </CardContent>
                                                                            </CardActionArea>
                                                                        </Link>
                                                                        <CardActions disableSpacing>
                                                                            <IconButton aria-label="add to favorites">
                                                                                {product.wishlist ? <FavoriteIcon color="secondary" /> : <FavoriteIcon />}
                                                                            </IconButton>
                                                                            <IconButton aria-label="share">
                                                                                <Link to='/'><AddShoppingCartIcon /></Link>
                                                                            </IconButton>
                                                                        </CardActions>
                                                                    </Card>
                                                                </li>
                                                            )
                                                        }
                                                    </div>
                                                </>
                                            )}
                                    </ul>

                                </div>
                                {/** This is a sub category and product end*/}
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default Wishlist;
