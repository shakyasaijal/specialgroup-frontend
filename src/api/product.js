import { getState } from 'services/ReduxService';
import { isLoggedIn } from 'selectors/auth';
import { httpService } from 'services/HttpServices';

import specialGroupHttpService from 'services/SpecialGroupHttpService';

class Product {
  static _get(path) {
    const state = getState();
    const authUser = isLoggedIn(state);

    if (!authUser) {
      return httpService.request('get', path);
    }

    return specialGroupHttpService.get(path);
  }

  static shopByCategory() {
    const path = '/v1/api/shop-by-category/';

    return Product._get(path);
  }

  static popular() {
    const path = '/v1/api/popular-products/';

    return Product._get(path);
  }

  static recommended() {
    const path = '/v1/api/recommended-product/';

    return Product._get(path);
  }

  static recentArrivals() {
    const path = '/v1/api/recent-arrivals/';

    return Product._get(path);
  }

  static forYou() {
    const path = '/v1/api/for-you-product/';

    return Product._get(path);
  }

  static productDetails(id) {
    const path = `/v1/api/products/${id}`;

    return Product._get(path);
  }

  static bannerSlider() {
    const path = '/v1/api/banner-sliders/';

    return Product._get(path);
  }

  static productsByCategory(id) {
    const path = `/v1/api/product-by-category/${id}`;

    return Product._get(path);
  }
}

export default Product;
