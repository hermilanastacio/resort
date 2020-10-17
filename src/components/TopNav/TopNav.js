import React, { useLayoutEffect, useState } from 'react';
import { AppBar, Toolbar, makeStyles } from '@material-ui/core';
import Scrollspy from 'react-scrollspy'
import styles from './TopNav.module.scss';

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
  },
  active: {
    backgroundColor:"red"
  }
}));

const TopNav = () => {
  const classes = useStyles();

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

  const pages = [
    'dashboard',
    'about',
    'gallery',
    'room',
    'contact'
  ];

  return( 
    <AppBar position="fixed" className={scaleTopNav ? classes.scale : classes.shrink}>
      <Toolbar className={classes.toolbarWrapper}>
        <img src={logoImg} alt="logo" style={{width: scaleTopNav ? 120 : 170, transition:"0.5s"}}/>

        <div className={styles.scrollSpyWrapper}>
          <Scrollspy items={pages} currentClassName={classes.active}>
            <li><a href="#dashboard">DASHBOARD</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#gallery">GALLERY</a></li>
            <li><a href="#room">ROOM</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </Scrollspy>
        </div>

      </Toolbar>
    </AppBar>
  );
} 
 
export default TopNav;