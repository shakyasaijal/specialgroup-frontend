export const getQueryParams = (queryParams) => {
  let s = queryParams;

  if (s.charAt(0) === '?') {
    s = s.substring(1);
  }

  let obj = {};
  const arr = s.split('&');

  if (arr.length < 1) {
    return obj;
  }

  arr.forEach((a) => {
    const v = a.split('=');

    obj = { [v[0]]: v[1] };
  });

  return obj;
};
