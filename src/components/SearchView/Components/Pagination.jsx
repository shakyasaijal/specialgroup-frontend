import React from 'react';
import Pagination from '@material-ui/lab/Pagination';

const Paginations = ({ productsPerPage, totalProducts, currentPage, handleChange, color = '', shape = 'rounded' }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <Pagination count={pageNumbers.length} page={currentPage} onChange={handleChange} color={color} shape={shape} />
    </nav>
  );
};

export default Paginations;
