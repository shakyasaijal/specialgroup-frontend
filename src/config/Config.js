export const getEnv = () => {
  return process.env.REACT_APP_ENV || 'local';
};

export const isProduction = () => {
  const env = getEnv().toLowerCase();

  return env === 'prod' || env === 'production';
};

export const getEndPoint = () => {
  return process.env.REACT_APP_API_URL;
};

export const googleToken = () => {
  return process.env.REACT_APP_GOOGLE_TOKEN;
};

export const facebookToken = () => {
  return process.env.REACT_APP_FACEBOOK_TOKEN;
};

export const recaptchaToken = () => {
  return process.env.REACT_APP_CAPTCHA_KEY;
};

export const getImageBasePath = (fileName) => {
  return getEndPoint() + fileName;
};
