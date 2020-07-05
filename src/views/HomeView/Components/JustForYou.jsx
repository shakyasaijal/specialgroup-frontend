import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import CardActionArea from '@material-ui/core/CardActionArea';

import { productListRequest } from 'actions/product';

import { getImage } from 'config/Config';
import { isLoggedIn } from 'selectors/auth';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
    backgroundSize: 'contain',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const JustForYou = (props) => {
  const classes = useStyles();

  const [productsLoaded, setProductsLoaded] = useState(false);

  useEffect(() => {
    if (props.isLoggedIn) {
      props.productListRequest(callbackSuccess);
    }
    // eslint-disable-next-line
  }, []);

  const callbackSuccess = () => {
    setProductsLoaded(true);
  };

  return !props.isLoggedIn ? (
    <></>
  ) : productsLoaded ? (
    <div className="row">
      <h4 className="medium-dark mt10 main-title">Just for you</h4>
      <hr />
      <div className="sep mt30 popular">
        <div className="grid3 center full-width">
          {props.products.forYouProducts.map((product, index) => (
            <Card className={classes.root} key={index}>
              <Link to={`/product/${product.id}`}>
                <CardActionArea>
                  <div className="image-container">
                    <CardMedia className={classes.media} image={getImage(product.image)} title={product.name} />
                  </div>
                  <CardContent>
                    <div className="product-title">{product.name}</div>
                    {(product.price || product.oldPrice) && (
                      <Typography variant="body2" color="textSecondary" component="p">
                        {product.price && <span className="currentPrice">Rs. {product.price} </span>}
                        {product.oldPrice && <span className="oldPrice line-through">{product.oldPrice}</span>}
                      </Typography>
                    )}
                  </CardContent>
                </CardActionArea>
              </Link>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  {product.wishlist ? (
                    <Link to="/">
                      <FavoriteIcon color="secondary" />
                    </Link>
                  ) : (
                    <Link to="/">
                      <FavoriteIcon />
                    </Link>
                  )}
                </IconButton>
                <IconButton aria-label="share">
                  <AddShoppingCartIcon />
                </IconButton>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
      <div className="clearfix"></div>
    </div>
  ) : (
    <></>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: isLoggedIn(state),
    products: state.products,
  };
};

const dispatchProps = { productListRequest };

export default connect(mapStateToProps, dispatchProps)(JustForYou);
