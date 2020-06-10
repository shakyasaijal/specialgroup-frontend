import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
// import './style.css'

const useStyles = makeStyles({
  root: {
    width: 'auto',
  },
  opacity: {
    opacity: 1,
  },
});

const QuickNavigation = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  return (
    <div className="quick-navigation">
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction component={Link} to="/" label="Home" icon={<ShoppingCartIcon />} />
        <BottomNavigationAction component={Link} to="/" label="Cart" icon={<ShoppingCartIcon />} />
        <BottomNavigationAction component={Link} to="/" label="Wishlist" icon={<FavoriteIcon />} />
        <BottomNavigationAction component={Link} to="/" label="Categories" icon={<ViewModuleIcon />} />
      </BottomNavigation>
    </div>
  );
};

export default QuickNavigation;
