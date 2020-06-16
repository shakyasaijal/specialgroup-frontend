import { getAccessToken } from 'selectors/auth';

import { getEndPoint } from 'config/Config';

import { getState } from 'services/ReduxService';

import { httpService } from './HttpServices';

const getMethod = 'get';
const postMethod = 'post';
const putMethod = 'put';
const deleteMethod = 'delete';

class SpecialGroupHttpService {
  async getAuthenticatedHeaders() {
    const state = getState();

    const accessToken = await getAccessToken(state);
    const authToken = `Bearer ${accessToken}`;

    return {
      Authorization: authToken,
    };
  }

  async get(path, query = null) {
    path = getEndPoint() + path;
    const headers = await this.getAuthenticatedHeaders();

    return httpService.request(getMethod, headers, path, query);
  }

  async post(path, data) {
    path = getEndPoint() + path;

    const headers = await this.getAuthenticatedHeaders();

    return httpService.request(postMethod, headers, path, null, data);
  }

  async put(path, data) {
    path = getEndPoint() + path;
    const headers = await this.getAuthenticatedHeaders();

    return httpService.request(putMethod, headers, path, null, data);
  }

  async delete(path) {
    path = getEndPoint() + path;
    const headers = await this.getAuthenticatedHeaders();

    return httpService.request(deleteMethod, headers, path);
  }
}

const specialGroupHttpService = new SpecialGroupHttpService();

export default specialGroupHttpService;
