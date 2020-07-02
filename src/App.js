import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Container from '@material-ui/core/Container';

import { runMiddlewares, getStore } from 'services/ReduxService';

import PATHS from 'routes';

import Header from './components/partials/Header';
import QuickNavigation from './components/partials/QuickNavigation';
import Footer from './components/partials/Footer';
import AuthContainer from 'components/AuthContainer/AuthContainer';
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
import ProductsDetail from 'views/ProductsView/ProductsDetail';

import './assets/sass/common.css';
import NonAuthContainer from 'components/AuthContainer/NonAuthContainer';

const DEFAULT_TITLE = 'Special Group | e-commerce';

const SpecialGroupRoute = (props) => {
  const { title, path, component } = props;

  document.title = title ? title : DEFAULT_TITLE;
  window.scroll(0, 0);

  return <Route path={path} component={component} />;
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
              <SpecialGroupRoute exact path={PATHS.HOME} component={Home} />
              <SpecialGroupRoute exact path={PATHS.WISHLIST} component={Wishlist} title="Special Group | Wishlist" />
              <SpecialGroupRoute
                exact
                path={PATHS.PRODUCT_DETAILS}
                component={ProductsDetail}
                title="Special Group | Details"
              />
              <SpecialGroupRoute
                exact
                path={PATHS.FORGET_PASSWORD}
                component={ForgetPassword}
                title="Special Group | FORGET PASSWORD"
              />
              <SpecialGroupRoute
                exact
                path={PATHS.SEARCH_RESULT}
                component={SearchResult}
                title="Special Group | Search"
              />

              {/* Pages that Authorized user can't access goes inside NonAuthContainer */}
              <NonAuthContainer>
                <SpecialGroupRoute exact path={PATHS.SIGNIN} component={ReduxSignIn} title="Special Group | Login" />
                <SpecialGroupRoute exact path={PATHS.SIGNUP} component={ReduxSignUp} title="Special Group | Sign Up" />
              </NonAuthContainer>

              {/* Pages that Non Authorized user can't access goes inside AuthContainer */}
              <AuthContainer>
                <SpecialGroupRoute
                  exact
                  path={PATHS.ADD_TO_CART}
                  component={ProductsDetail}
                  title="Special Group | Details"
                />
                <SpecialGroupRoute
                  exact
                  path={PATHS.COMPLETE_PROFILE}
                  component={CompleteProfile}
                  title="Special Group | Complete your profile"
                />
                <SpecialGroupRoute
                  exact
                  path={PATHS.ADDRESS}
                  component={Address}
                  title="Special Group | Change Address"
                />
                <SpecialGroupRoute
                  exact
                  path={PATHS.LOGIN_SECURITY}
                  component={LoginAndSecurity}
                  title="Special Group | Login and Security"
                />
                <SpecialGroupRoute
                  exact
                  path={PATHS.ACCOUNT_SETTINGS}
                  component={AccountSettings}
                  title="Special Group | Account Settings"
                />
                <SpecialGroupRoute
                  exact
                  path={PATHS.ORDER_HISTORY}
                  component={OrderHistory}
                  title="Special Group | Order History"
                />
              </AuthContainer>
              <SpecialGroupRoute path={PATHS.NOT_FOUND} component={Home} />
            </Switch>
          </Container>
        </div>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
