import { accessToken } from 'services/authService';
import { httpService } from 'services/HttpServices';

const getMethod = 'get';
const postMethod = 'post';
const putMethod = 'put';
const deleteMethod = 'delete';

class SpecialGroupHttpService {
  async getAuthenticatedHeaders() {
    const token = await accessToken();
    const authToken = `Bearer ${token}`;

    return {
      Authorization: authToken,
    };
  }

  async get(path, query = null) {
    const headers = await this.getAuthenticatedHeaders();

    return httpService.request(getMethod, path, null, headers, query);
  }

  async post(path, payload) {
    const headers = await this.getAuthenticatedHeaders();

    return httpService.request(postMethod, path, payload, headers);
  }

  async put(path, payload) {
    const headers = await this.getAuthenticatedHeaders();

    return httpService.request(putMethod, path, payload, headers);
  }

  async delete(path) {
    const headers = await this.getAuthenticatedHeaders();

    return httpService.request(deleteMethod, path, null, headers);
  }
}

const specialGroupHttpService = new SpecialGroupHttpService();

export default specialGroupHttpService;
