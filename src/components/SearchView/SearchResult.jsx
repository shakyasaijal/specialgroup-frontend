import React, { useState, useEffect } from 'react';
import GridOnIcon from '@material-ui/icons/GridOn';
import GridOffIcon from '@material-ui/icons/GridOff';
import { Link } from 'react-router-dom';
import { productsList } from 'constants/constants';
import PATHS from 'routes';
import Pagination from './Components/Pagination';
import Filters from './Components/Filters';

const SearchResult = () => {
  const [state, setState] = useState({
    grid: true,
    seller: [],
    brand: [],
    isLoggedIn: false,
    addToCartLink: '',
    filter: false,
  });
  const [pagination, setPagination] = useState({ currentPage: 1, productPerPage: 5 });
  const seller = [];
  const brand = [];
  const uniqueSeller = [];
  const uniqueBrand = [];

  const products = productsList();

  for (let i = 0; i < products.length; i++) {
    if (!uniqueSeller.includes(products[i].seller.name)) {
      seller.push(products[i].seller);

      uniqueSeller.push(products[i].seller.name);

      brand.push(products[i].brand);
      uniqueBrand.push(products[i].brand);
    }
  }

  // Get Products
  const indexOfLastProduct = pagination.currentPage * pagination.productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - pagination.productPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const toggleView = () => {
    setState({ ...state, grid: !state.grid });
  };

  useEffect(() => {
    if (state.isLoggedIn) {
      setState({ ...state, addToCartLink: PATHS.ADD_TO_CART });
    } else {
      setState({ ...state, addToCartLink: PATHS.SIGNIN });
    }
  }, [state.isLoggedIn, state]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pagination.currentPage]);

  const paginate = (pageNumber) => {
    setPagination({ ...pagination, currentPage: pageNumber });
  };

  const nextInitial = 20;
  const prev = (totalPage) => {
    if (pagination.currentPage !== 1) {
      setPagination({ ...pagination, currentPage: pagination.currentPage - 1 });
      if (pagination.currentPage > 5) {
        if (pagination.currentPage % 3 === 0) {
          document.getElementsByClassName('pp')[0].style.marginLeft = totalPage / pagination.currentPage + 'px';
        }
      }
    }
  };

  const next = (totalPage) => {
    if (pagination.currentPage !== totalPage) {
      setPagination({ ...pagination, currentPage: pagination.currentPage + 1 });
      if (pagination.currentPage % 6 === 0) {
        document.getElementsByClassName('pp')[0].style.marginLeft = '-' + nextInitial * pagination.currentPage + 'px';
      }
    }
  };

  return (
    <div className="row engine">
      <div className="search-container">
        <div className="grid-view">
          <div className="grid-item">
            <Filters seller={seller} brand={brand} filter={state.filter} />
          </div>
          <div className="grid-item white-back search-results">
            <div className="sortable">
              <div className="flex">
                <div className="sort-result">{/* "O result found" */}</div>
                <div className="sort-engine">
                  <select name="sort" className="select">
                    <option selected disabled value="0">
                      Sort By
                    </option>
                    <option value="1">Popularity</option>
                    <option value="2">Price low to high</option>
                    <option value="3">Price high to low</option>
                  </select>
                  <div className="verticle-center listing">
                    {state.grid ? <GridOnIcon onClick={toggleView} /> : <GridOffIcon onClick={toggleView} />}
                  </div>
                </div>
              </div>
            </div>
            <div className="results mt10">
              {currentProducts.map((product, index) => (
                <Link className={`search-card ${state.grid ? '' : 'search-card-list'} `} to="/" key={index}>
                  <div className={`search-content ${state.grid ? '' : 'search-content-list'}`}>
                    <div className="image-container center">
                      <img src={product.img} alt="Big Apple" />
                    </div>
                    <div className="product-name">
                      <p>{product.name}</p>
                    </div>
                    <div className="price-and-cart">
                      <div className="currentPrice">Price: {product.price}</div>
                      <span className="line-through">5500</span>
                      <div className="add-to-cart">
                        <Link to={state.addToCartLink}>
                          <button className="btn">Add to cart</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <Pagination
              productsPerPage={pagination.productPerPage}
              totalProducts={products.length}
              paginate={paginate}
              currentPage={pagination.currentPage}
              prev={prev}
              next={next}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
