export const getEndPoint = () => {
  return 'http://localhost:8000';
};

export const getCookie = (name) => {
  let cookieVal = null;

  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();

      if (cookie.substring(0, name.length + 1) === name + '=') {
        cookieVal = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }

  return cookieVal;
};

export const getCSRFToken = () => {
  return getCookie('csrftoken');
};
