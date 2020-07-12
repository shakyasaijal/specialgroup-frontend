import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const Accordions = (props) => {
  const propsData = props.data;
  const classes = useStyles();
  const [state, setState] = React.useState({ dataLoaded: false });

  const skeletons = [];

  for (let i = 0; i < 5; i++) {
    skeletons.push(
      <div className="order-skl">
        <Skeleton variant="rect" height={35} />
      </div>
    );
  }

  React.useEffect(() => {
    setInterval(() => {
      setState({ dataLoaded: true });
    }, 3000);
  }, []);

  return (
    <>
      {state.dataLoaded ? (
        propsData.map((data_, index) => (
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
        ))
      ) : (
        <>{skeletons}</>
      )}
    </>
  );
};

export default Accordions;
