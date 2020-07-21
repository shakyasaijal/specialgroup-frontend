import React, { useEffect } from 'react';
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
import OrderHelp from './Components/OrderHelp';
import Faq from './Components/Faq';

import { contactInfo } from 'constants/constants';
import Contact from './Components/Contact';

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

const CustomerCare = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [state, setState] = React.useState({ allServices: [], companyInfo: '' });
  const info = contactInfo();

  useEffect(() => {
    setState({ ...state, allServices: info[0].services, companyInfo: info[0].info });
    // eslint-disable-next-line
  }, []);

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
            <Tab icon={<FavoriteIcon />} label="Order" {...a11yProps(1)} />
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
            <OrderHelp />
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <Faq />
          </TabPanel>
        </SwipeableViews>
      </Paper>
    </div>
  );
};

export default CustomerCare;
