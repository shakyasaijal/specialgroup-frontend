import React from 'react';

import Pagination from '@material-ui/lab/Pagination';

const SpecialGroupPagination = (props) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(props.totalResponse / props.responsePerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination
      shape="rounded"
      color="primary"
      count={pageNumbers.length}
      page={props.currentPage}
      onChange={props.handlePaginationChange}
    />
  );
};

export default SpecialGroupPagination;
