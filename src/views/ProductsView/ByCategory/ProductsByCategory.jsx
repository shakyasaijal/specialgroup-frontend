import React, { useState } from 'react';
import { productsByCategory } from 'constants/constants';
import Skeleton from '@material-ui/lab/Skeleton';
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
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
}));

const ProductsByCategory = () => {
  const products = productsByCategory();
  const [state, setState] = useState({ productLoaded: false, data: [] });
  const classes = useStyles();

  const fetchProducts = () => {
    state.data.push({
      categoryBanner: products[0].categoryBanner,
      category: products[0].category,
      data: products[0].subCategory,
    });
  };

  React.useEffect(() => {
    if (!state.productLoaded && state.data.length < 1) {
      setInterval(() => {
        setState({ ...state, productLoaded: true });
      }, 3000);
    }
    fetchProducts();
  }, []);

  return (
    <div className="row noTop">
      <div className="marts">
        {state.productLoaded ? (
          state.data.map((contents, index) => (
            <div className="mart-container center noMargin" key={index}>
              {/** This is a category banner. */}
              <div className="category-banner">
                <div className="img-containier">
                  <img src={`/${contents.categoryBanner}`} alt={contents.category} height="100%" width="100%" />
                </div>
                <div className="category-name top verticle-center text-center">
                  <h3>{contents.category}</h3>
                </div>
                <div className="category-seeMore top"></div>
              </div>
              {/** This is a category banner end. */}

              {/** This is a sub category and product. */}
              <div className="subCategory-container center">
                <ul>
                  {contents.data &&
                    contents.data.map((subcategory, subIndex) => (
                      <div className="subcategory-product" key={subIndex}>
                        <li className="subcategory text-center">
                          <div className="name mt10">{subcategory.name}</div>
                          <div className="img-container center">
                            <img src={`/${subcategory.image}`} alt={subcategory.name} />
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
                                      image={`/${product.image}`}
                                      title={product.name}
                                    />
                                    <CardContent>
                                      <div className="productName">{product.name}</div>
                                      <Typography variant="body1" color="textSecondary" component="h4" className="mt10">
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
              {/** This is a sub category and product end. */}
            </div>
          ))
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default ProductsByCategory;
