export const ValidateEmail = (email) => {
  const emailRegExp = /^\S+@\w+([.-]?\w+)*(\.\w{2,15})+$/;

  if (!email) {
    return false;
  }
  email = email.trim();

  return emailRegExp.test(email);
};
