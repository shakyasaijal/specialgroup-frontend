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
import { productsList } from '../../../constants/constants';
import CardActionArea from '@material-ui/core/CardActionArea';

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
    <div className="row mt30">
      <h4 className="medium-dark mt10">Popular on your area</h4>
      <hr />
      <div className="grid3 center full-width mt30">
        {products.map((product, index) => (
          <Card className={classes.root} key={index}>
            <Link to="/">
              <CardActionArea>
                <div className="image-container">
                  <CardMedia className={classes.media} image={product.img} title={product.name} />
                </div>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {product.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                {product.wishlist ? <FavoriteIcon color="secondary" /> : <FavoriteIcon />}
              </IconButton>
              <IconButton aria-label="share">
                <AddShoppingCartIcon />
              </IconButton>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
