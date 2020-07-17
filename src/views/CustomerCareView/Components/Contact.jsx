import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import Form from 'components/Form/Form';

import { recaptchaToken } from 'config/Config';

const Contact = (props) => {
  const [state, setState] = useState({ service: '', fullName: '', contact: '', note: '', error: true });
  const [captcha, setCaptcha] = useState({ captcha_: false, key: '' });
  const { allServices } = props;
  //   const gr = window.grecaptcha;

  const handleChange = (prop) => (event) => {
    setState({ ...state, [prop]: event.target.value });
  };

  const verifyCallback = (response) => {
    if (response) {
      setCaptcha({ captcha_: true, key: response });
    } else {
      setCaptcha({ captcha_: false, key: '' });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  /**
   *
   * Must pass captcha.key on POST request.
   *
   * In Response: if captcha has error show respective error.
   *
   * Uncomment const gr, after form submitted succesfully just call `gr.reset();` to reset recaptcha.
   */

  return (
    <Form className="form" onSubmit={onSubmit}>
      <div className="form-group">
        <TextField
          autoComplete="off"
          id="outlined-basic"
          onChange={handleChange('fullName')}
          size="small"
          label="Full Name"
          value={state.fullName}
          variant="outlined"
        />
        <div className="error">Full Name is required.</div>
      </div>
      <div className="form-group">
        <TextField
          autoComplete="off"
          id="outlined-basic"
          onChange={handleChange('contact')}
          size="small"
          label="Contact"
          value={state.contact}
          variant="outlined"
        />
        <div className="error">Contact Number is invalid.</div>
      </div>
      <div className="form-group">
        <TextField
          id="standard-select-currency"
          select
          label="Service"
          value={state.service}
          onChange={handleChange('service')}
          helperText="Please select your service"
        >
          {allServices.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <div className="error">Please choose the service.</div>
      </div>
      <div className="form-group">
        <TextField
          size="small"
          id="outlined-multiline-static"
          label="Note"
          multiline
          onChange={handleChange('note')}
          rows={4}
          value={state.note}
          variant="outlined"
        />
        <div className="error">Note is required.</div>
      </div>
      <div className="captcha-form">
        <ReCAPTCHA sitekey={recaptchaToken()} onChange={verifyCallback} theme="" />
        <div className="error">Error will receive after form submission only.</div>
      </div>
      <div className="form-group">
        {captcha.captcha_ && !state.error.length ? (
          <button className="submit">Contact Now</button>
        ) : (
          <button className="submit dark" disabled>
            Contact Now
          </button>
        )}
      </div>
    </Form>
  );
};

export default Contact;
