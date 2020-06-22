const CONFIG_SETTINGS = {
  local: {
    endpoint: 'http://localhost:8000',
  },
  dev: {
    endpoint: 'http://admin.cosmoconcepts.com.np',
  },
};

export const getEnv = () => {
  return window.REACT_APP_ENV || process.env.REACT_APP_ENV || 'local';
};

export const getEndPoint = () => {
  const env = getEnv();

  const configSetting = CONFIG_SETTINGS[env];

  if (!configSetting || !configSetting.endpoint) return 'http://localhost:8000';

  return configSetting.endpoint;
};
