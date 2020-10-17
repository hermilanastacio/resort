import React, { useLayoutEffect, useState } from 'react';
import { AppBar, Toolbar, makeStyles } from '@material-ui/core';

const logoImg = require('../../assets/images/logo.png');

const useStyles = makeStyles(() => ({
  scale: {
    padding: "10px 10% 15px 10%",
    transition: "0.5s"
  },
  shrink: {
    padding: "35px 10% 15px 10%",
    transition: "0.5s",
    backgroundColor:"transparent",
    boxShadow: "none"
  }
}));

const TopNav = () => {
  const styles = useStyles();

  const [scaleTopNav, setScaleTopNav] = useState(false);

  function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      setScaleTopNav(true);
    } else {
      setScaleTopNav(false);
    }
  }

  useLayoutEffect(() => {
    window.onscroll = function() {scrollFunction()};
  },[]);

  return( 
    <AppBar position="fixed" className={scaleTopNav ? styles.scale : styles.shrink}>
      <Toolbar className={styles.toolbarWrapper}>
        <img src={logoImg} alt="logo" style={{width: scaleTopNav ? 120 : 170, transition:"0.5s"}}/>
        <div style={{flexGrow:1, display:"flex", justifyContent:"flex-end"}}>
          <p>Test</p>
        </div>
      </Toolbar>
    </AppBar>
  );
} 
 
export default TopNav;