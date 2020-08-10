import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Accordions from 'components/Accordion/Accordions';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const OrderHelp = (props) => {
  const classes = useStyles();

  return (
    <div className="order-help">
      <div className={classes.root}>
        <Accordions data={props.data} />
      </div>
    </div>
  );
};

export default OrderHelp;
