import React from 'react';
import { Link } from 'react-router-dom';

import MaterialTable from 'material-table';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import ProductsSlider from 'components/Products/ProductsSlider';

const useStyles = makeStyles((theme) => ({
  button: {
    padding: '2px',
  },
}));

const OrderHistory = () => {
  const classes = useStyles();

  const getLink = (action) => {
    return (
      <Link to={`/${action}`}>
        <Button className={classes.button} variant="contained" color="primary" size="small">
          View
        </Button>
      </Link>
    );
  };
  const [state, setState] = React.useState({
    columns: [
      { title: 'Coupon', field: 'coupon' },
      { title: 'Date', field: 'date' },
      { title: 'Total Items', field: 'total', type: 'numeric' },
      { title: 'Action', field: 'action' },
    ],
    data: [
      { coupon: '1as5ef', date: '10/02/2020', total: 4, action: getLink(1) },
      { coupon: '1wef5', date: '10/02/2020', total: 2, action: getLink(2) },
      { coupon: '9d9iwe', date: '10/02/2020', total: 4, action: getLink(3) },
      { coupon: '55d5we', date: '10/02/2020', total: 1, action: getLink(4) },
      { coupon: '1as5ef', date: '10/02/2020', total: 4, action: getLink(1) },
      { coupon: '1wef5', date: '10/02/2020', total: 2, action: getLink(2) },
      { coupon: '9d9iwe', date: '10/02/2020', total: 4, action: getLink(3) },
      { coupon: '55d5we', date: '10/02/2020', total: 1, action: getLink(4) },
    ],
  });

  return (
    <>
      <div className="row">
        <div className="order-history center">
          <div className="orders">
            <MaterialTable title="Your Orders" columns={state.columns} data={state.data} />
          </div>
        </div>
      </div>
      <ProductsSlider />
    </>
  );
};

export default OrderHistory;
