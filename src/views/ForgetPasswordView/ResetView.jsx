import React, { useState, useEffect } from 'react';
import { ERROR_EMPTY_PASSWORD, ERROR_CONFIRM_PASSWORD, ERROR_PASSWORD_LENGTH } from 'constants/ErrorMessages';
import { useCallback } from 'react';

const ResetView = () => {
  const initialState = {
    newPassword: '',
    confirmPassword: '',
  };
  const [state, setState] = useState(initialState);
  const [error, setError] = useState(initialState);

  const handleChange = (prop) => (e) => {
    setState({ ...state, [prop]: e.target.value });
  };

  const getFormErrors = useCallback(() => {
    const err = {};
    const { newPassword, confirmPassword } = state;

    if (newPassword.length < 8 && newPassword.length > 0) err.newPassword = ERROR_PASSWORD_LENGTH;
    if (newPassword !== confirmPassword && newPassword.length > 0 && confirmPassword.length > 0)
      err.commonError = ERROR_CONFIRM_PASSWORD;

    return err;
  }, [state]);

  useEffect(() => {
    const err = getFormErrors();

    if (err) {
      setError(err);

      return;
    }
  }, [getFormErrors]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!state.newPassword) {
      setError({ ...error, newPassword: ERROR_EMPTY_PASSWORD });
    }
    if (!state.confirmPassword) {
      setError({ ...error, confirmPassword: ERROR_EMPTY_PASSWORD });
    }
    const err = getFormErrors();

    if (err.length > 0) {
      setError(err);

      return;
    } else {
      return;
    }
  };

  return (
    <div className="row reset-view center">
      <div className="black-out"></div>
      <div className="container">
        <div className="logo-container center">
          <img src="https://www.chaudharygroup.com/templates/cg/images/logo.png" alt="Special Group" />
        </div>
        <div className="form">
          <form method="POST" onSubmit={(e) => handleSubmit(e)}>
            <div className="page-title">Reset Password</div>
            <div className="form-group">
              <label>New Password</label>
              <input
                type="password"
                autoFocus
                value={state.newPassword}
                onChange={handleChange('newPassword')}
                name="new_password"
                required
                autoComplete="off"
              />
              {error.newPassword ? (
                <span className="error">{error.newPassword}</span>
              ) : error.commonError ? (
                <span className="error">{error.commonError}</span>
              ) : (
                ''
              )}
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                value={state.confirmPassword}
                onChange={handleChange('confirmPassword')}
                name="confirm_password"
                required
                autoComplete="off"
              />
              {error.confirmPassword ? (
                <span className="error">{error.confirmPassword}</span>
              ) : error.commonError ? (
                <span className="error">{error.commonError}</span>
              ) : (
                ''
              )}
            </div>
            <div className="form-group">
              <button
                type="submit"
                className={`button ${
                  error.confirmPassword ||
                  error.newPassword ||
                  !state.newPassword ||
                  !state.confirmPassword ||
                  error.commonError
                    ? 'disabled'
                    : ''
                }`}
                disabled={
                  error.confirmPassword ||
                  error.newPassword ||
                  !state.newPassword ||
                  !state.confirmPassword ||
                  error.commonError
                    ? 'disabled'
                    : ''
                }
              >
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetView;
