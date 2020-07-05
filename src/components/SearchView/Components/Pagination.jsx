import React from 'react';
import Pagination from '@material-ui/lab/Pagination';

const Paginations = ({ productsPerPage, totalProducts, currentPage, handleChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <Pagination count={pageNumbers.length} page={currentPage} onChange={handleChange} />
    </nav>
  );
};

export default Paginations;
