import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { faqHelp } from 'constants/constants';
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

const Faq = () => {
  const classes = useStyles();
  const faqData = faqHelp();

  return (
    <div className="order-help">
      <div className={classes.root}>
        <Accordions data={faqData} />
      </div>
    </div>
  );
};

export default Faq;
