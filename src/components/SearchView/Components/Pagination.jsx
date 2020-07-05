import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       marginTop: theme.spacing(2),
//     },
//   },
// }));

const Paginations = ({ productsPerPage, totalProducts, paginate, currentPage, prev, next }) => {
  const pageNumbers = [];
  // const classes = useStyles();

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        <div className="page-link prev" onClick={() => prev(pageNumbers.length)} href="!">
          <li>{'<<'}</li>
        </div>
        <span className="pages">
          {pageNumbers.map((number) => (
            <a
              href=""
              key={number}
              onClick={() => paginate(number)}
              className={`page-link ${currentPage === number ? 'active' : ''} ${number === 1 ? ' pp' : ''}`}
            >
              <li className="page-item">{number}</li>
            </a>
          ))}
        </span>
        <div className="page-link next" onClick={() => next(pageNumbers.length)}>
          <li>{'>>'}</li>
        </div>
      </ul>
      <Pagination count={pageNumbers.length} color="primary" />
    </nav>
  );
};

export default Paginations;
