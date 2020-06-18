import React from 'react';
import { Link } from 'react-router-dom';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import MobileNavigation from './MobileNavigation';
import PATHS from 'routes';

const Navigation = () => {
  const loggedIn = true;
  return (
    <>
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
                <Link to="/" className="float-right">
                  Wishlist
                </Link>
                <Link to="/" className="float-right">
                  Opportunity
                </Link>
                <Link to="/" className="float-right">
                  About Us
                </Link>
                <Link to="/" className="float-right customer-care">
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
                  <small className="anchor">Welcome, Sign In</small>
                  <span className="my-account anchor">
                    <div className="dropdown">
                      Account
                      <div className="dropdown-content">
                        <Link to={loggedIn ? PATHS.ACCOUNT_SETTINGS : PATHS.SIGNIN  }>My Account</Link>
                        {loggedIn ? <Link to="/">Logout</Link> : ''}
                      </div>
                    </div>
                  </span>
                </div>
              </div>
            </div>
            <div className="cart">
              <AddShoppingCartIcon fontSize="large" />
              <span className="anchor paddingLeft-5">Cart</span>
            </div>
          </div>
        </div>
      </header>
      <MobileNavigation />
    </>
  );
};

export default Navigation;
