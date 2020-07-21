import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { categories } from 'constants/constants';
import Skeleton from '@material-ui/lab/Skeleton';
import Paginations from 'components/SearchView/Components/Pagination';

const Categories = () => {
  let perPage = 32;
  const allCategories = categories();
  const [state, setState] = useState({ dataLoaded: false });
  const skeletons = [];

  for (let i = 0; i < 8; i++) {
    skeletons.push(
      <div key={i} className="team-member">
        <Skeleton variant="rect" height={100} />
      </div>
    );
  }

  if (window.innerWidth <= 600) {
    perPage = 10;
  }

  const [pagination, setPagination] = useState({ currentPage: 1, categoryPerPage: perPage });

  // Get Categories
  const indexOfLastProduct = pagination.currentPage * pagination.categoryPerPage;
  const indexOfFirstProduct = indexOfLastProduct - pagination.categoryPerPage;
  const currentCategory = allCategories.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleChange = (event, value) => {
    setPagination({ ...pagination, currentPage: value });
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    setInterval(() => {
      setState({ dataLoaded: true });
    }, 3000);
  }, []);

  return (
    <div className="row categories-list">
      <div className="rsc">
        <div className="page-title title">Our Categories</div>
        <div className="category-container">
          <div className="teams">
            {state.dataLoaded ? (
              currentCategory.map((data, index) => (
                <Link to={`/categories/${data.id}`} className="team-member" key={index}>
                  <div className="img-container center">
                    <img src={data.img} alt={data.name} />
                  </div>
                  <div className="fullName text-center">{data.name}</div>
                </Link>
              ))
            ) : (
              <>{skeletons}</>
            )}
          </div>
          <div className="pagine center mt10">
            <Paginations
              productsPerPage={pagination.categoryPerPage}
              totalProducts={allCategories.length}
              currentPage={pagination.currentPage}
              handleChange={handleChange}
              color="primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
