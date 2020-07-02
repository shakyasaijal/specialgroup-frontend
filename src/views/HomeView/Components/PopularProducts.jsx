import React from 'react';
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

import { productsList } from 'constants/constants';

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

const PopularProducts = () => {
  const products = productsList();
  const classes = useStyles();

  return (
    <div className="row">
      <h4 className="medium-dark mt10 main-title">Popular on your area</h4>
      <hr />
      <div className="sep mt30 popular">
        <div className="grid3 center full-width">
          {products.map((product, index) => (
            <Card className={classes.root} key={index}>
              <Link to={`/product/${product.id}`}>
                <CardActionArea>
                  <div className="image-container">
                    <CardMedia className={classes.media} image={product.img} title={product.name} />
                  </div>
                  <CardContent>
                    <div className="product-title">{product.name}</div>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {product.price}
                    </Typography>
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
  );
};

export default PopularProducts;
