import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: '500',
  },
}));

const Accordions = (props) => {
  const propsData = props.data;
  const classes = useStyles();

  return (
    <>
      {propsData.map((data_, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            key={index}
          >
            <Typography className={classes.heading}>{data_.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{data_.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default Accordions;
