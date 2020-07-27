import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import { getImageBasePath } from 'config/Config';

import { productsByCategoryRequest } from 'actions/product';

import { getProductsByCategory } from 'selectors/product';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
}));

const ProductsByCategory = (props) => {
  const classes = useStyles();
  const [productsByCategoryLoaded, setProductsByCategoryLoaded] = useState(false);

  useEffect(() => {
    props.productsByCategoryRequest(getCategoryIdParam(), callbackSuccess);
    // eslint-disable-next-line
  }, []);

  const callbackSuccess = () => {
    setProductsByCategoryLoaded(true);
  };

  const getCategoryIdParam = () => {
    return props.match.params.id;
  };

  const skeletons = () => {
    return (
      <>
        <div className="mart-container center noMargin">
          <div className="category-banner sk-banner">
            <Skeleton variant="rect" height={207} />
          </div>
          <div className="sk-grid">
            <Skeleton variant="rect" height={207} />
            <Skeleton variant="rect" height={207} />
            <Skeleton variant="rect" height={207} />
            <Skeleton variant="rect" height={207} />
            <Skeleton variant="rect" height={207} />
            <Skeleton variant="rect" height={207} />
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="row noTop">
      <div className="marts">
        {productsByCategoryLoaded ? (
          <div className="mart-container center noMargin">
            {/** This is a category banner. */}
            <div className="category-banner">
              <div className="img-containier">
                <img
                  src={getImageBasePath(props.products[getCategoryIdParam()].categoryBanner)}
                  alt={props.products[getCategoryIdParam()].category}
                  height="100%"
                  width="100%"
                />
              </div>
              <div className="category-name top vertical-center text-center">
                <h3>{props.products[getCategoryIdParam()].category}</h3>
              </div>
              <div className="category-seeMore top"></div>
            </div>
            {/** This is a category banner end. */}

            {/** This is a sub category and product. */}
            <div className="subCategory-container center">
              <ul>
                {props.products[getCategoryIdParam()].contents &&
                  props.products[getCategoryIdParam()].contents.map((subcategory, subIndex) => (
                    <div className="subcategory-product" key={subIndex}>
                      <li className="subcategory text-center">
                        <div className="name mt10">{subcategory.name}</div>
                        <div className="img-container center">
                          <img src={getImageBasePath(subcategory.image)} alt={subcategory.name} />
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
                              <Link to={`/product/${product.id}`}>
                                <CardActionArea>
                                  <CardMedia
                                    className={classes.media}
                                    image={getImageBasePath(product.image)}
                                    title={product.name}
                                  />
                                  <CardContent>
                                    <div className="productName">{product.name}</div>
                                    <Typography variant="body1" color="textSecondary" component="h4" className="mt10">
                                      <span className="productPrice">Rs. {product.price} </span>
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
            {/** This is a sub category and product end. */}
          </div>
        ) : (
          skeletons()
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: getProductsByCategory(state),
  };
};

const dispatchProps = { productsByCategoryRequest };

export default connect(mapStateToProps, dispatchProps)(ProductsByCategory);
