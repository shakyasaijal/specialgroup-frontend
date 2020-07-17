import React, { useRef, useEffect, useState } from 'react';
import { withRouter, Link } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';

import { getPercentage, settingsForOne } from 'constants/constants';

import SlickMagnifier from 'components/Products/SlickMagnifier';
import QuestionAnswers from './Components/QuestionAnswers';
import RightBar from './Components/RightBar';
import Form from 'components/Form/Form';

import RecommendedSlider from 'views/HomeView/Components/RecommendedSlider';
import PATHS from 'routes';

// import PATHS from 'routes';

const ProductDetails = (props) => {
  const { isLoggedIn } = props;
  const [productQuantity, setProductQuantity] = useState(1);
  const [productDetailsLoaded, setProductDetailsLoaded] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const comments = useRef(null);

  useEffect(() => {
    const productId = getProductIdParam();

    props.productDetailsRequest(productId, productDetailsSuccess);
    // eslint-disable-next-line
  }, [productQuantity]);

  const productDetailsSuccess = () => {
    setProductDetailsLoaded(true);
  };

  const addToCart = (e) => {
    e.preventDefault();

    setAddedToCart(true);
    props.addToCartRequest(props.productDetails.id, productQuantity);
  };

  const handleChange = (e) => {
    e.preventDefault();

    setProductQuantity(e.target.value);
  };

  const getProductIdParam = () => {
    return props.match.params.id;
  };

  const scrollToRef = (ref) => {
    window.scrollTo(0, ref.current.offsetTop);
  };

  const executeScroll = () => {
    scrollToRef(comments);
  };

  return productDetailsLoaded ? (
    <div className="row">
      <div className="product-details-container">
        <Paper>
          <div className="grid-wrapper">
            <div className="left">
              <div className="container">
                <SlickMagnifier productDetails={props.productDetails} />
              </div>
            </div>
            <div className="content">
              <div className="product-info">
                {props.productDetails.brand && <h4 className="brand-name">{props.productDetails.brand}</h4>}
                <p className="product-name">{props.productDetails.name}</p>
                <div className="total-comments">
                  <small>
                    {props.productDetails.comments.length > 0 && (
                      <span className="go-to-comments" onClick={executeScroll}>
                        {props.productDetails.comments.length} comments
                      </span>
                    )}
                    {props.productDetails.reviews > 0 && <span>| 0 reviews</span>}
                  </small>
                </div>
              </div>
              <div className="price">
                <span className="currentPrice">Rs. {props.productDetails.price}</span>
                {props.productDetails.oldPrice && (
                  <>
                    <span className="oldPrice line-through">Rs. {props.productDetails.oldPrice}</span>&emsp;
                    {getPercentage(props.productDetails.oldPrice, props.productDetails.price)}%
                  </>
                )}
                {props.productDetails.oldPrice && props.productDetails.oldPrice < props.productDetails.price && (
                  <span className="up">&uarr;</span>
                )}
                {props.productDetails.oldPrice && props.productDetails.oldPrice > props.productDetails.price && (
                  <span className="down">&darr;</span>
                )}
              </div>
              {props.productDetails.sizes && props.productDetails.sizes.length > 0 && (
                <div className="sizes">
                  <div className="size">
                    <b>Sizes: </b>
                    {props.productDetails.sizes.map((size, index) => (
                      <span className="size-value" key={index}>
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              <div className="bio">
                <div dangerouslySetInnerHTML={{ __html: props.productDetails.description }} />
              </div>

              <div className="add-to-cart">
                <Form>
                  <div className="flex">
                    <div className="count">
                      <label>Quantity</label>
                      {addedToCart ? (
                        <>
                          <input
                            type="number"
                            name="count"
                            min="1"
                            value={productQuantity}
                            onChange={handleChange}
                            required
                            className="quantity"
                            disabled={true}
                          />
                          <div>
                            <small>
                              You can change order quantity <Link to={PATHS.CART}>here</Link>.
                            </small>
                          </div>
                        </>
                      ) : (
                        <>
                          <input
                            type="number"
                            name="count"
                            min="1"
                            value={productQuantity}
                            onChange={handleChange}
                            required
                            className="quantity"
                          />
                          <button onClick={addToCart} className="button">
                            Add to cart
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </Form>
              </div>
            </div>
            <div className="right">
              <RightBar
                warranty={props.productDetails.warranty}
                vendor={props.productDetails.vendor}
                isLoggedIn={isLoggedIn}
              />
            </div>
          </div>
          {props.productDetails.aboutThisProduct && (
            <div className="p-details">
              <div className="title">Product Details</div>
              <div className="details">
                <div dangerouslySetInnerHTML={{ __html: props.productDetails.aboutThisProduct }} />
              </div>
            </div>
          )}
        </Paper>
      </div>

      {props.productDetails.comments &&
        props.productDetails.comments.length > 0 &&
        props.productDetails.currentUserComments &&
        props.productDetails.currentUserComments.length > 0 && (
        <div className="questions-and-recommendations">
          <div className="q-a" ref={comments}>
            <QuestionAnswers
              comments={props.productDetails.comments}
              currentUserComments={props.productDetails.currentUserComments}
            />
          </div>
          <div className="recommendation">
            <RecommendedSlider settings={settingsForOne} />
          </div>
        </div>
      )}
    </div>
  ) : (
    <></>
  );
};

export default withRouter(ProductDetails);
