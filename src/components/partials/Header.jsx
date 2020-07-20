import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import NotVerifiedModal from './NotVerifiedModal';
import Badge from '@material-ui/core/Badge';
import CircularProgress from '@material-ui/core/CircularProgress';

import MobileNavigation from './MobileNavigation';

import { authLogoutRequest } from 'actions/auth';
import { cartRequest } from 'actions/cart';

import { isLoggedIn, isAccountVerified, getAccountInfo } from 'selectors/auth';
import { getCartLength } from 'selectors/cart';

import PATHS from 'routes';

const Header = (props) => {
  const { isLoggedIn, isAccountVerified, account } = props;
  const [cartLoaded, setCartLoaded] = useState(false);
  const cartPage = props.location.pathname === '/cart';

  const logout = () => {
    const { authLogoutRequest } = props;

    authLogoutRequest(logoutSuccess);
  };

  const logoutSuccess = () => {
    props.history.push(PATHS.HOME);
  };

  // const isCartPage = () => {
  //   console.log(props.location)
  //   return props.location.pathname === '/cart';
  // }

  useEffect(() => {
    if (!cartPage) {
      props.cartRequest(cartLoadedSuccess);
    }
  }, [cartPage]);

  const cartLoadedSuccess = () => {
    setCartLoaded(true);
  };

  const userName = () => {
    const { email } = props.account;

    return email.split('@')[0];
  };

  return (
    <>
      <div className="mobile-cover">
        <div className="cover-img-container verticle-center center text-center">
          <img src="https://www.chaudharygroup.com/templates/cg/images/logo.png" alt="Special Group" />
          <div className="welcome">
            <CircularProgress />
          </div>
        </div>
      </div>
      <header className="page-header">
        <div className="top-panel-wrapper border-bottom">
          <div className="top-panel">
            <div className="grid-template grid-top-panel">
              <div className="social-media flex">
                <small>Connect with us</small>
                <div className="social-media-icons paddingLeft-5">
                  <Link to="/">
                    <FacebookIcon fontSize="small" />
                  </Link>
                  <Link to="/">
                    <InstagramIcon fontSize="small" />
                  </Link>
                  <Link to="/">
                    <TwitterIcon fontSize="small" />
                  </Link>
                </div>
              </div>
              <div className=""></div>
              <div className="short-navbar">
                <Link to={PATHS.WISHLIST} className="float-right">
                  Wishlist
                </Link>
                <Link to="/" className="float-right">
                  Opportunity
                </Link>
                <Link to={PATHS.ABOUT_US} className="float-right">
                  About Us
                </Link>
                <Link to={PATHS.CUSTOMER_CARE} className="float-right">
                  Customer Care
                </Link>
                <Link to="/" className="float-right">
                  Home
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-panel grid-template grid-bottom-panel">
          <div className="logo">
            <div className="img-container">
              <img
                src="https://www.chaudharygroup.com/templates/cg/images/logo.png"
                className="verticle-center"
                alt="Special Group"
              />
            </div>
          </div>
          <div className="verticle-center">
            <div className="search-engine">
              <form className="search-form" method="POST">
                <input type="text" placeholder="Search.." name="search" autoComplete="off" />
                <button type="submit">
                  <SearchIcon fontSize="small" />
                </button>
              </form>
            </div>
          </div>
          <div className="auth flex">
            <div className="auth-provider">
              <div className="login-signup flex">
                <div className="icon-container">
                  <AccountCircleIcon fontSize="large" />
                </div>
                <div className="info grid-template grid-row-account float-right paddingLeft-5">
                  {account.firstName && <small className="anchor">Welcome, {account.firstName}</small>}
                  {isLoggedIn && !account.firstName && <small className="anchor">Welcome, {userName()}</small>}
                  {!isLoggedIn && <small className="anchor">Welcome</small>}
                  {!isLoggedIn && <Link to={PATHS.SIGNIN}>LogIn</Link>}
                  <span className="my-account anchor">
                    {isLoggedIn && (
                      <div className="dropdown">
                        Account
                        <div className="dropdown-content">
                          <Link to={PATHS.ACCOUNT_SETTINGS}>My Account</Link>
                          <Link to={PATHS.REFER_DASHBOARD}>Refer Dashboard</Link>
                          <span onClick={logout}>Logout</span>
                        </div>
                      </div>
                    )}
                  </span>
                </div>
              </div>
            </div>
            {!cartPage && (
              <div className="cart">
                {!cartLoaded && (
                  <Badge badgeContent={0} color="primary">
                    <AddShoppingCartIcon fontSize="large" />
                  </Badge>
                )}
                {cartLoaded && (
                  <Badge badgeContent={props.cartLength} color="primary">
                    <AddShoppingCartIcon fontSize="large" />
                  </Badge>
                )}
                <Link to={PATHS.CART} className="cart-name">
                  Cart
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>
      <MobileNavigation />
      {isLoggedIn && !isAccountVerified && <NotVerifiedModal />}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: isLoggedIn(state),
    isAccountVerified: isAccountVerified(state),
    cartLength: getCartLength(state),
    account: getAccountInfo(state),
  };
};

const dispatchProps = { authLogoutRequest, cartRequest };

export default connect(mapStateToProps, dispatchProps)(withRouter(Header));
