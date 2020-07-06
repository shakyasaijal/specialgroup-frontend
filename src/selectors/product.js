export const getProducts = (state) => state.products;

export const getShopByCategory = (state) => {
  const products = getProducts(state);

  if (!products && !products.shopByCategory) {
    return null;
  }

  return products.shopByCategory;
};

export const getPopularProduct = (state) => {
  const products = getProducts(state);

  if (!products && !products.popularProduct) {
    return null;
  }

  return products.popularProduct;
};

export const getRecommendedProduct = (state) => {
  const products = getProducts(state);

  if (!products && !products.recommendedProduct) {
    return null;
  }

  return products.recommendedProduct;
};

export const getRecentArrivals = (state) => {
  const products = getProducts(state);

  if (!products && !products.recentArrivals) {
    return null;
  }

  return products.recentArrivals;
};

export const getJustForYouProduct = (state) => {
  const products = getProducts(state);

  if (!products && !products.forYouProduct) {
    return null;
  }

  return products.forYouProduct;
};
