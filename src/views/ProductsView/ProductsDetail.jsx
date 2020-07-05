import React from 'react';
import Paper from '@material-ui/core/Paper';
// import ReactImageMagnify from 'react-image-magnify';
// import Slider from 'react-slick';
import { productDetails } from 'constants/constants';
import SlickMagnifier from 'components/Products/SlickMagnifier';
// import { getPercentage } from 'constants/constants';
import SecurityOutlinedIcon from '@material-ui/icons/SecurityOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import ContactMailOutlinedIcon from '@material-ui/icons/ContactMailOutlined';
import ContactlessOutlinedIcon from '@material-ui/icons/ContactlessOutlined';
import { Link } from 'react-router-dom';

const ProductsDetails = () => {
  const product = productDetails();

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
                <h4 className="brand-name">gucci</h4>
                <p className="product-name">Cotton jersey shorts</p>
                <div className="total-comments">
                  <small>0 comments | 0 reviews</small>
                </div>
              </div>
              <div className="price">
                <span className="currentPrice">Rs. 5000</span>
                {/* <span className="oldPrice line-through">Rs. 5500</span> {getPercentage(5500, 5000)}% */}
                {/* getPercentage(oldPrice, currentPrice) */}
                {/* {5500 < 5000 ? <span className="up">&uarr;</span> : <span className="down">&darr;</span>} */}
              </div>
              <div className="sizes">
                <div className="size">
                  <b>Sizes:</b> SM, L, M, XL
                </div>
              </div>
              <div className="bio">
                <ul>
                  <li>Color: Red, Green, Blue</li>
                  <li>Material Type: 100% Cotton</li>
                  <li>Machine Washable</li>
                  <li>Stainless</li>
                </ul>
              </div>
              <div className="add-to-cart">
                <form action="POST">
                  <div className="flex">
                    <div className="count">
                      <label>Quantity</label>
                      <input type="number" name="count" min="1" placeholder="1" required className="quantity" />
                      <button type="submit" className="button">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="right">
              <div className="right-for">
                <div className="icon text-center">
                  <SecurityOutlinedIcon />
                  <small>Warranty</small>
                </div>
                <div className="w-value">5 years warranty</div>
              </div>
              <div className="seperator mt30">Default Delivery Address</div>
              <div className="right-for">
                <div className="icon text-center">
                  <ContactMailOutlinedIcon />
                  <small>Address</small>
                </div>
                <div className="w-value">Civil Homes, Dhapakhel, Lalitpur, Nepal</div>
              </div>
              <div className="right-for mt30">
                <div className="icon text-center">
                  <LocationOnOutlinedIcon />
                  <small>Location</small>
                </div>
                <div className="w-value">Kathmandu, Province - 3</div>
              </div>
              <div className="right-for mt30">
                <div className="icon text-center">
                  <ContactlessOutlinedIcon />
                  <small>Contact</small>
                </div>
                <div className="w-value">9843935344</div>
              </div>
              <div className="seperator mt30">
                <p className="vendor">Sold By: Gravit Technology</p>
              </div>
              <Link to="/" className="related">
                View Related Products
              </Link>
            </div>
          </div>
          <div className="p-details">
            <div className="title">Product Details</div>
            <div className="details">
              <p>
                Lorem ipsum doler sit amet. Lorem ipsum doler sit amet. Lorem ipsum doler sit amet. Lorem ipsum doler
                sit amet. Lorem ipsum doler sit amet.
              </p>
              <p>
                Lorem ipsum doler sit amet. Lorem ipsum doler sit amet. Lorem ipsum doler sit amet. Lorem ipsum doler
                sit amet. Lorem ipsum doler sit amet. Lorem ipsum doler sit amet.
              </p>
              <p>
                Lorem ipsum doler sit amet. Lorem ipsum doler sit amet. Lorem ipsum doler sit amet. Lorem ipsum doler
                sit amet. Lorem ipsum doler sit amet.
              </p>
              <p>
                Lorem ipsum doler sit amet. Lorem ipsum doler sit amet. Lorem ipsum doler sit amet. Lorem ipsum doler
                sit amet.
              </p>
              <p>
                Lorem ipsum doler sit amet. Lorem ipsum doler sit amet. Lorem ipsum doler sit amet. Lorem ipsum doler
                sit amet. Lorem ipsum doler sit amet.
              </p>
              <p>
                Lorem ipsum doler sit amet. Lorem ipsum doler sit amet. Lorem ipsum doler sit amet. Lorem ipsum doler
                sit amet.
              </p>
            </div>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default ProductsDetails;
