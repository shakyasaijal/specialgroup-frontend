import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Container from '@material-ui/core/Container';

import { runMiddlewares, getStore } from 'services/ReduxService';

import PATHS from 'routes';

import Header from './components/partials/Header';
import Home from './components/Pages/Home/Home';
import ReduxSignIn from './components/Pages/Authorization/ReduxSignIn';
import ReduxSignUp from './components/Pages/Authorization/ReduxSignUp';
import ForgetPassword from './components/Pages/Authorization/ForgetPassword';
import AccountSettings from './components/Pages/Authorization/AccountSettings';
import QuickNavigation from './components/partials/QuickNavigation';
import Footer from './components/partials/Footer';
import ChangeAddress from './components/Pages/Authorization/ChangeAddress';
import OrderHistory from './components/Pages/Order/OrderHistory';
import LoginAndSecurity from './components/Pages/Authorization/LoginAndSecurity';

import './assets/sass/common.css';

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
              <SpecialGroupRoute path={PATHS.SIGNIN} component={ReduxSignIn} title="Special Group | Login" />
              <SpecialGroupRoute path={PATHS.SIGNUP} component={ReduxSignUp} title="Special Group | Sign Up" />
              <SpecialGroupRoute path={PATHS.CHANGE_ADDRESS} component={ChangeAddress} title="Special Group | Change Address" />
              <SpecialGroupRoute
                path={PATHS.LOGIN_SECURITY}
                component={LoginAndSecurity}
                title="Special Group | Login and Security"
              />
              <SpecialGroupRoute
                path={PATHS.FORGET_PASSWORD}
                component={ForgetPassword}
                title="Special Group | FORGET PASSWORD"
              />
              <SpecialGroupRoute
                path={PATHS.ACCOUNT_SETTINGS}
                component={AccountSettings}
                title="Special Group | Account Settings"
              />
              <SpecialGroupRoute
                path={PATHS.ORDER_HISTORY}
                component={OrderHistory}
                title="Special Group | Order History"
              />
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
