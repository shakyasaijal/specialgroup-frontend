import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Header from './components/partials/Header';
import Home from './components/Pages/Home/Home';
import SignIn from './components/Pages/Authorization/SignIn';
import QuickNavigation from './components/partials/QuickNavigation';
import Footer from './components/partials/Footer';
import './assets/sass/common.css';

function App() {
  return (
    <Router>
      <Header />
      <QuickNavigation />
      <div className="page-wrapper">
        <Container maxWidth="lg">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signin" component={SignIn} />
          </Switch>
        </Container>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
