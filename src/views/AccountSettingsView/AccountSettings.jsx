import React from 'react';
import { Link } from 'react-router-dom';
import PATHS from 'routes';
import { accountSettings } from 'constants/constants';

const AccountSettings = () => {
  const settings = accountSettings();
  const completeProfile = false;

  React.useEffect(() => {
    if (!completeProfile && window.innerWidth <= 575) {
      window.scroll({
        top: 100,
        left: 100,
        behavior: 'smooth',
      });
    } else {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  }, []);

  return (
    <div className="row">
      <div className="settings-container center">
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
        <div className="complete-profile center text-center">
          <Link className="complete" to={PATHS.COMPLETE_PROFILE}>
            <button>Complete Profile</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
