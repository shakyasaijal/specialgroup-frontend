import React from 'react';
import { Link } from 'react-router-dom';

import { accountSettings } from 'constants/constants';

const AccountSettings = () => {
  const settings = accountSettings();

  return (
    <div className="row">
      <div className="settings-container center">
        <div className="greetings">Hello Saijal</div>
        <div className="account-wrapper">
          {settings.map((setting, index) => (
            <div className="container" key={index}>
              <Link to={setting.link}>
                <div className="settings">
                  <div className="img-container">
                    <img src={setting.icon} alt={setting.title} />
                  </div>
                  <div className="details">
                    <div className="title verticle-center medium-dark">
                      <p>{setting.title}</p>
                    </div>
                    <div className="subtitle verticle-center">
                      <p>{setting.subtitle}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
