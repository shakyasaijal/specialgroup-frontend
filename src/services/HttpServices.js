import { dispatchFromStore } from 'services/ReduxService';

import { authLogoutRequest } from 'actions/auth';

import { getEndPoint } from 'config/Config';

const BASE_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

class HttpService {
  formatQueryParams(query) {
    const props = [];

    for (const prop in query) {
      /* eslint-disable */
      if (query.hasOwnProperty(prop)) {
        props.push(prop);
      }
    }

    let queryParams = props
      .map((prop) => {
        let propValue = '';

        if (query[prop]) {
          propValue = query[prop].toString();
        }

        return prop + '=' + propValue;
      })
      .join('&');

    if (queryParams.length > 0) {
      queryParams = '?' + queryParams;
    }

    return queryParams;
  }

  validateResponse(response) {
    if (response.status === 401) {
      window.stop();
      dispatchFromStore(authLogoutRequest());
    }

    return response;
  }

  async request(method = 'get', path = '', payload = null, headers = null, query = null) {
    let url = getEndPoint() + path;
    let options = {};

    headers = { ...BASE_HEADERS, ...headers };
    if (method === 'post') {
      headers = { ...headers };
    }

    try {
      if (query) {
        const queryParams = this.formatQueryParams(query);
        url += queryParams;
      }

      options = {
        method,
        headers,
      };

      if (payload) {
        const jsonData = JSON.stringify(payload);

        options.body = jsonData;
      }
    } catch (e) {
      const errPayload = {
        method,
        url,
        query,
        data,
      };

      console.log(errPayload, e);

      return e;
    }

    const response = fetch(url, options)
      .then((res) => this.validateResponse(res))
      .then((res) => res.json())
      .catch((err) => {
        const errPayload = {
          method,
          url,
          headers,
        };

        console.log('Network Error', errPayload);

        return err;
      });

    return response;
  }
}

export const httpService = new HttpService();
