import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/partials/Header';
import './assets/sass/common.css';

function App() {
  return (
    <Router>
      <div className="page-wrapper">
        <Switch>
          <Route path="/" />
        </Switch>
        <Header />
        <section className="body-wrapper"></section>
      </div>
    </Router>
  );
}

export default App;
