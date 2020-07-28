import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import SwipeableViews from 'react-swipeable-views';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import Paper from '@material-ui/core/Paper';
import Skeleton from '@material-ui/lab/Skeleton';

import { orderHelpRequest, faqRequest } from 'actions/publicAction';

import OrderHelp from './Components/OrderHelp';
import Faq from './Components/Faq';
import Contact from './Components/Contact';

import { contactInfo } from 'constants/constants';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
    className: 'text',
  };
}

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    background: '#f9f9f9',
  },
  maxHeight: {
    maxHeight: '72px',
  },
}));

const CustomerCare = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [state, setState] = useState({ allServices: [], companyInfo: '' });
  const [orderHelpRequestLoaded, setOrderHelpRequestLoaded] = useState(false);
  const [faqRequestLoaded, setFaqRequestLoaded] = useState(false);
  const info = contactInfo();

  const skeletons = [];

  for (let i = 0; i < 5; i++) {
    skeletons.push(
      <div className="order-skl">
        <Skeleton variant="rect" height={35} />
      </div>
    );
  }

  useEffect(() => {
    setState({ ...state, allServices: info[0].services, companyInfo: info[0].info });
    props.orderHelpRequest(orderHelpRequestSuccess);
    props.faqRequest(faqRequestSuccess);
    // eslint-disable-next-line
  }, []);

  const orderHelpRequestSuccess = () => {
    setOrderHelpRequestLoaded(true);
  };

  const faqRequestSuccess = () => {
    setFaqRequestLoaded(true);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className="row customer-care center">
      <div className="page-title">Hi, Let us help you.</div>
      <Paper className={classes.root}>
        <AppBar position="static" color="default" className={classes.maxHeight}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            className={classes.maxHeight}
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab icon={<PhoneIcon />} label="Contact" {...a11yProps(0)} />
            <Tab icon={<FavoriteIcon />} label="Order Help" {...a11yProps(1)} />
            <Tab icon={<PersonPinIcon />} label="FAQ" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className="contact-container">
              <div className="info">
                <div className="lh" dangerouslySetInnerHTML={{ __html: state.companyInfo }} />
              </div>
              <div className="form-container">
                <Contact allServices={state.allServices} />
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            {orderHelpRequestLoaded && <OrderHelp data={props.orderHelpData} />}
            {!orderHelpRequestLoaded && skeletons}
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            {faqRequestLoaded && <Faq data={props.faqData} />}
            {!faqRequestLoaded && skeletons}
          </TabPanel>
        </SwipeableViews>
      </Paper>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    orderHelpData: state.orderHelp || {},
    faqData: state.faq || {},
  };
};

const dispatchProps = { orderHelpRequest, faqRequest };

export default connect(mapStateToProps, dispatchProps)(CustomerCare);
