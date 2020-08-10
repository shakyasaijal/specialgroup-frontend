import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Container from '@material-ui/core/Container';

import { runMiddlewares, getStore, getState } from 'services/ReduxService';

import { isLoggedIn } from 'selectors/auth';

import PATHS from 'routes';

import Header from './components/partials/Header';
import QuickNavigation from './components/partials/QuickNavigation';
import Footer from './components/partials/Footer';
import SearchResult from 'components/SearchView/SearchResult';

import Home from './views/HomeView/ReduxHome';
import ReduxSignIn from './views/SignInView/ReduxSignIn';
import ReduxSignUp from './views/SignUpView/ReduxSignUp';
import ForgetPassword from 'views/ForgetPasswordView/ReduxForgetPassword';
import AccountSettings from './views/AccountSettingsView/AccountSettings';
import Address from './views/AddressView/Address';
import OrderHistory from './views/OrderHistoryView/OrderHistory';
import LoginAndSecurity from './views/LoginAndSecurityView/LoginAndSecurity';
import Wishlist from 'views/WislistView/Wishlist';
import CompleteProfile from 'views/CompleteProfileView/CompleteProfile';
import ProductDetails from 'views/ProductsView/ReduxProductDetails';
import ResetPassword from 'views/ForgetPasswordView/ResetView';
import Cart from 'views/CartView/Cart';
import ProductsByCategory from 'views/ProductsView/Components/ProductsByCategory';
import Wow from 'components/Wow/Wow';
import CustomerCare from 'views/CustomerCareView/CustomerCare';
import About from 'views/AboutView/About';
import Categories from 'views/CategoryView/Categories';
import SubCategories from 'views/SubCategoriesView/SubCategories';
import AboutRefer from 'views/ReferView/Refer';
import ReferDashboard from 'views/ReferView/ReferDashboard';

import './assets/sass/common.css';

const DEFAULT_TITLE = 'Special Group | e-commerce';

const PublicRoute = (props) => {
  const { title, path, component } = props;

  document.title = title ? 'Special Group | ' + title : DEFAULT_TITLE;
  window.scroll(0, 0);

  return <Route path={path} component={component} />;
};

const PrivateRoute = (props) => {
  const { title, path, component } = props;
  const state = getState();
  const loggedIn = isLoggedIn(state);

  if (loggedIn) {
    return <PublicRoute title={title} path={path} component={component} />;
  }

  return <Redirect to={{ pathname: PATHS.SIGNIN, state: { from: path } }} />;
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    runMiddlewares(() => {
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <div className="App">Loading...</div>;

  const reduxStore = getStore();

  return (
    <Provider store={reduxStore}>
      <Router>
        <Header />
        <QuickNavigation />
        <div className="page-wrapper">
          <Container maxWidth="lg">
            <Switch>
              <PublicRoute exact path={PATHS.HOME} component={Home} />
              <PublicRoute exact path={PATHS.WISHLIST} component={Wishlist} title="Wishlist" />
              <PublicRoute exact path={PATHS.ABOUT_US} component={About} title="About Us" />
              <PublicRoute exact path={PATHS.ABOUT_REFER} component={AboutRefer} title="FAQ - Referral" />
              <PublicRoute exact path={PATHS.SUB_CATEGORIES} component={SubCategories} title="Sub Categories" />
              <PublicRoute exact path={PATHS.CATEGORIES} component={Categories} title="Categories" />
              <PublicRoute exact path={PATHS.CUSTOMER_CARE} component={CustomerCare} title="Customer Care" />
              <PublicRoute exact path={PATHS.PRODUCT_DETAILS} component={ProductDetails} title="Product Details" />
              <PublicRoute exact path={PATHS.CATEGORY_BANNER} component={ProductsByCategory} />
              <PublicRoute exact path={PATHS.WOW_BANNER} component={Wow} />
              <PublicRoute exact path={PATHS.FORGET_PASSWORD} component={ForgetPassword} title="Forget Password" />
              <PublicRoute exact path={PATHS.SEARCH_RESULT} component={SearchResult} title="Search Product" />
              <PublicRoute exact path={PATHS.SIGNIN} component={ReduxSignIn} title="Login" />
              <PublicRoute exact path={PATHS.SIGNUP} component={ReduxSignUp} title="Sign Up" />
              <PublicRoute exact path={PATHS.RESET_PASSWORD} component={ResetPassword} title="Reset Password" />

              {/* Pages that Non Authorized user can't access follows PrivateRoute */}
              <PrivateRoute exact path={PATHS.REFER_DASHBOARD} component={ReferDashboard} title="Referral" />
              <PrivateRoute exact path={PATHS.COMPLETE_PROFILE} component={CompleteProfile} title="Complete profile" />
              <PrivateRoute exact path={PATHS.CART} component={Cart} title="My Cart" />
              <PrivateRoute exact path={PATHS.ADDRESS} component={Address} title="Address" />
              <PrivateRoute exact path={PATHS.LOGIN_SECURITY} component={LoginAndSecurity} title="Login & Security" />
              <PrivateRoute exact path={PATHS.ACCOUNT_SETTINGS} component={AccountSettings} title="Account Settings" />
              <PrivateRoute exact path={PATHS.ORDER_HISTORY} component={OrderHistory} title="Order History" />
              <PublicRoute path={PATHS.NOT_FOUND} component={Home} />
            </Switch>
          </Container>
        </div>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
