import specialGroupHttpService from 'services/SpecialGroupHttpService';
import { httpService } from 'services/HttpServices';
import { getEndPoint } from 'config/Config';

class Referral {
  static get() {
    const path = '/v1/api/referral/';

    return specialGroupHttpService.get(path);
  }

  static handleClick(code) {
    // set facebook as default source, need to discuss with dev team
    const params = { code, source: 'facebook' };
    const path = `${getEndPoint()}/v1/api/handle-click/`;

    return httpService.request('get', null, path, params);
  }
}

export default Referral;
