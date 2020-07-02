import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { isLoggedIn } from 'selectors/auth';

import PATHS from 'routes';

const NonAuthContainer = (props) => {
  const { isLoggedIn, children } = props;

  if (isLoggedIn) {
    return <Redirect push to={PATHS.HOME} />;
  }

  return <div>{children}</div>;
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: isLoggedIn(state),
  };
};

export default connect(mapStateToProps, {})(NonAuthContainer);
