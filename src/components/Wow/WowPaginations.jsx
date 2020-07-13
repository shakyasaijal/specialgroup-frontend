import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PATHS from 'routes';
import Paginations from 'components/SearchView/Components/Pagination';

const WowPaginations = (props) => {
  const { products, isLoggedIn } = props;
  const [pagination, setPagination] = useState({ currentPage: 1, productPerPage: 15 });
  // Get Products
  const indexOfLastProduct = pagination.currentPage * pagination.productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - pagination.productPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleChange = (event, value) => {
    setPagination({ ...pagination, currentPage: value });
  };

  return (
    <>
      {currentProducts.map((product, index) => (
        <Link className="search-card" to="/" key={index}>
          <div className={`search-content`}>
            <div className="image-container center">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-name">
              <p>{product.name}</p>
            </div>
            <div className="price-and-cart">
              <div className="currentPrice">Rs. {product.price}</div>
              {product.oldPrice && <span className="line-through">{product.oldPrice}</span>}
              <div className="add-to-cart">
                <Link to={isLoggedIn ? PATHS.ADD_TO_CART : PATHS.SIGNIN}>
                  <button className="btn">Add to cart</button>
                </Link>
              </div>
            </div>
          </div>
        </Link>
      ))}
      <div className="block">
        <Paginations
          productsPerPage={pagination.productPerPage}
          totalProducts={products.length}
          currentPage={pagination.currentPage}
          handleChange={handleChange}
        />
      </div>
    </>
  );
};

export default WowPaginations;
