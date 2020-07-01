import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

const Filters = (props) => {
  const { seller, brand, filter } = props;
  const classes = useStyles();

  return (
    <>
      {filter ? (
        <>
          <div className="block">
            <div className="title underline">Brand</div>
            <div className="block-content">
              <div className="checkbox">
                {brand.map((br, index) => (
                  <div className="checkbox-item" key={index}>
                    <input type="checkbox" name="branding" value="7" /> {br}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="block ups">
            <div className="title underline">Price Range</div>
            <div className="block-content flex">
              <div className="from">
                <input type="number" className="min" min="0" placeholder="Min" />
              </div>
              <div className="to">
                <input type="number" className="max" min="1" placeholder="Max" />
              </div>
              <div className="go">
                <input type="button" className="btn" min="1" value="Go" />
              </div>
            </div>
          </div>
          <div className="block ups">
            <div className="title underline">Seller</div>
            <div className="block-content">
              <div className="checkbox">
                {seller.map((sell, index) => (
                  <div className="checkbox-item" key={index}>
                    <input type="checkbox" name="branding" value="6" /> {sell.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className={classes.root}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <Typography className={classes.heading}>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      )}
    </>
  );
};

export default Filters;
