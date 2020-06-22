import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { productsWithBanner } from 'constants/constants';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
}));

const Marts = () => {
    const bannerProducts = productsWithBanner();
    const classes = useStyles();
    return (
        <div className="row">
            <div className="marts">
                {bannerProducts &&
                    bannerProducts.map((contents, index) => (
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
                                    <Link to="/">
                                        <button className="see-more">See More</button>
                                    </Link>
                                </div>
                            </div>
                            {/** This is a category banner end */}

                            {/** This is a sub category and product */}
                            <div className="subCategory-container center">
                                <ul>
                                    {contents.subCategory &&
                                        contents.subCategory.map((subcategory, subIndex) => (
                                            <div className="subcategory-product" key={subIndex}>
                                                <li className="subcategory text-center">
                                                    <div className="name mt10">{subcategory.name}</div>
                                                    <div className="img-container center">
                                                        <img src={subcategory.image} alt={subcategory.name} />
                                                    </div>
                                                    <div className="see-more">
                                                        <Link to="/">
                                                            <button>See More</button>
                                                        </Link>
                                                    </div>
                                                </li>
                                                {subcategory.products &&
                                                    subcategory.products.map((product, subIndex2) => (
                                                        <li key={subIndex2} className="product">
                                                            <Card className={classes.root} title={product.name}>
                                                                <Link to="/">
                                                                    <CardActionArea>
                                                                        <CardMedia
                                                                            className={classes.media}
                                                                            image={product.image}
                                                                            title={product.name}
                                                                        />
                                                                        <CardContent>
                                                                            <div className="productName">{product.name}</div>
                                                                            <Typography
                                                                                variant="body1"
                                                                                color="textSecondary"
                                                                                component="h4"
                                                                                className="mt10"
                                                                            >
                                                                                <span className="productPrice">Rs. {product.price}</span>{' '}
                                                                                {product.oldPrice && <span className="oldPrice">{product.oldPrice}</span>}
                                                                            </Typography>
                                                                        </CardContent>
                                                                    </CardActionArea>
                                                                </Link>
                                                                <CardActions disableSpacing>
                                                                    <IconButton aria-label="add to favorites">
                                                                        {product.wishlist ? <FavoriteIcon color="secondary" /> : <FavoriteIcon />}
                                                                    </IconButton>
                                                                    <IconButton aria-label="share">
                                                                        <Link to="/">
                                                                            <AddShoppingCartIcon />
                                                                        </Link>
                                                                    </IconButton>
                                                                </CardActions>
                                                            </Card>
                                                        </li>
                                                    ))}
                                            </div>
                                        ))}
                                </ul>
                            </div>
                            {/** This is a sub category and product end*/}
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default Marts;
