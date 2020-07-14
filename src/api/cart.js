import specialGroupHttpService from 'services/SpecialGroupHttpService';

class Cart {
  static get() {
    const path = '/v1/api/add-to-cart/';

    return specialGroupHttpService.get(path);
  }
  static post(productId, quantity) {
    const path = '/v1/api/add-to-cart/';
    const payload = { productId, quantity };

    return specialGroupHttpService.post(path, payload);
  }
}

export default Cart;
