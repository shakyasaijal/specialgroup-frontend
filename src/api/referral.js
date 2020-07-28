import specialGroupHttpService from 'services/SpecialGroupHttpService';
import { httpService } from 'services/HttpServices';

class Referral {
  static get() {
    const path = '/v1/api/referral/';

    return specialGroupHttpService.get(path);
  }

  static getInfo() {
    const path = '/v1/api/referral-info/';

    return specialGroupHttpService.get(path);
  }

  static handleClick(code) {
    // set facebook as default source, need to discuss with dev team
    const payload = { code, source: 'facebook' };
    const path = '/v1/api/handle-click/';

    return httpService.request('get', path, payload);
  }
}

export default Referral;
