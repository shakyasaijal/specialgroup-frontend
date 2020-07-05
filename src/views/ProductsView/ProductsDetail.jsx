import React, { useRef } from 'react';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import { productDetails } from 'constants/constants';
import SlickMagnifier from 'components/Products/SlickMagnifier';
import { getPercentage } from 'constants/constants';
import { isLoggedIn } from 'selectors/auth';
import { Link } from 'react-router-dom';
import RightBar from './Components/RightBar';
import QuestionAnswers from './Components/QuestionAnswers';
import RecommendedSlider from 'components/Products/RecommendedSlider';
import { settingsForOne } from 'constants/constants';

const ProductsDetails = (props) => {
  const product = productDetails();
  const { isLoggedIn } = props;
  const comments = useRef(null);
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
  const executeScroll = () => scrollToRef(comments);

  return (
    <div className="row">
      <div className="product-details-container">
        <Paper>
          <div className="grid-wrapper">
            <div className="left">
              <div className="container">
                <SlickMagnifier product={product} />
              </div>
            </div>
            <div className="content">
              <div className="product-info">
                <h4 className="brand-name">{product.brand}</h4>
                <p className="product-name">{product.name}</p>
                <div className="total-comments">
                  <small>
                    <span className="go-to-comments" onClick={executeScroll}>
                      0 comments
                    </span>{' '}
                    | 0 reviews
                  </small>
                </div>
              </div>
              <div className="price">
                <span className="currentPrice">Rs. {product.currentPrice}</span>
                {product.oldPrice ? (
                  <>
                    <span className="oldPrice line-through">Rs. {product.oldPrice}</span>&emsp;
                    {getPercentage(product.oldPrice, product.currentPrice)}%
                  </>
                ) : (
                  ''
                )}
                {product.oldPrice < product.currentPrice ? (
                  <span className="up">&uarr;</span>
                ) : (
                  <span className="down">&darr;</span>
                )}
              </div>
              <div className="sizes">
                <div className="size">
                  <b>Sizes:</b>{' '}
                  {product.sizes.map((size, index) => (
                    <span className="size-value" key={index}>
                      {size}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bio">
                <div dangerouslySetInnerHTML={{ __html: product.bio }} />
              </div>
              <div className="add-to-cart">
                <form action="POST">
                  <div className="flex">
                    <div className="count">
                      <label>Quantity</label>
                      <input type="number" name="count" min="1" placeholder="1" required className="quantity" />
                      <Link to="/">
                        <button type="submit" className="button">
                          Add to cart
                        </button>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="right">
              <RightBar warranty={product.warranty} vendor={product.vendor} isLoggedIn={isLoggedIn} />
            </div>
          </div>
          {product.description ? (
            <div className="p-details">
              <div className="title">Product Details</div>
              <div className="details">
                <div dangerouslySetInnerHTML={{ __html: product.description }} />
              </div>
            </div>
          ) : (
            ''
          )}
        </Paper>
      </div>
      <div className="questions-and-recommendations">
        <div className="q-a" ref={comments}>
          <QuestionAnswers comments={product.comments} currentUserComments={product.currentUserComments} />
        </div>
        <div className="recommendation">
          <RecommendedSlider settings={settingsForOne} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: isLoggedIn(state),
  };
};

export default connect(mapStateToProps)(ProductsDetails);
