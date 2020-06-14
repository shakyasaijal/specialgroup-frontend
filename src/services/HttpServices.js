import { dispatchFromStore } from 'services/ReduxService';
import { authLogoutRequest } from 'actions/auth';
import { getCSRFToken } from 'config/Config';

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
    if (response.status === 200 || response.status === 201) {
      return response;
    }

    if (response.status === 400) {
      throw new Error('Bad Request');
    }

    if (response.status === 401) {
      window.stop();
      dispatchFromStore(authLogoutRequest());

      throw new Error('Request Unauthorized');
    }

    if (response.status === 403) {
      throw new Error('Forbidden');
    }

    throw new Error(`Response Not OK, HTTP Code: ${response.status}`);
  }

  async request(method = 'get', headers, url, query = null, data = null) {
    let options = {};
    console.log(url);

    headers = { ...BASE_HEADERS, ...headers };
    if (method === 'post') {
      headers = { ...headers, 'X-CSRFToken': getCSRFToken() };
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

      if (data) {
        const jsonData = JSON.stringify(data);

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
      .then((res) => res.JSON())
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
