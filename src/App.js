import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Container from '@material-ui/core/Container';

import PATHS from 'routes';

import Header from './components/partials/Header';
import Home from './components/Pages/Home/Home';
import SignIn from './components/Pages/Authorization/SignIn';
import ForgetPassword from './components/Pages/Authorization/ForgetPassword';
import SignUp from './components/Pages/Authorization/SignUp';
import QuickNavigation from './components/partials/QuickNavigation';
import Footer from './components/partials/Footer';

import './assets/sass/common.css';

const DEFAULT_TITLE = 'Special Group | e-commerce';

const SpecialGroupRoute = (props) => {
  const { title, path, component } = props;

  document.title = title ? title : DEFAULT_TITLE;
  window.scroll(0, 0);

  return <Route path={path} component={component} />;
};

function App() {
  return (
    <Router>
      <Header />
      <QuickNavigation />
      <div className="page-wrapper">
        <Container maxWidth="lg">
          <Switch>
            <SpecialGroupRoute exact path={PATHS.HOME} component={Home} />
            <SpecialGroupRoute path={PATHS.SIGNIN} component={SignIn} title="Special Group | Login" />
            <SpecialGroupRoute path={PATHS.SIGNUP} component={SignUp} title="Special Group | Sign Up" />
            <SpecialGroupRoute
              path={PATHS.FORGET_PASSWORD}
              component={ForgetPassword}
              title="Special Group | FORGET PASSWORD"
            />
            <SpecialGroupRoute path={PATHS.NOT_FOUND} component={Home} />
          </Switch>
        </Container>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
