import React, { useLayoutEffect, useState } from 'react';
import { AppBar, Toolbar, makeStyles } from '@material-ui/core';
import Scrollspy from 'react-scrollspy'
import styles from './TopNav.module.scss';
import { Link } from 'react-scroll'

const logoImg = require('../../assets/images/logo.png');

const useStyles = makeStyles(() => ({
  scale: {
    padding: "10px 10% 10px 10%",
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
    'rooms',
    'contact'
  ];

  return( 
    <AppBar position="fixed" className={scaleTopNav ? classes.scale : classes.shrink}>
      <Toolbar className={classes.toolbarWrapper}>
        <img src={logoImg} alt="logo" style={{width: scaleTopNav ? 100 : 170, transition:"0.5s"}}/>

        <div className={styles.scrollSpyWrapper}>
          <Scrollspy items={pages} currentClassName={styles.active}>
            <li><Link to="dashboard" smooth={true} duration={1000}>DASHBOARD</Link></li>
            <li><Link to="about" smooth={true} duration={1000}>ABOUT</Link></li>
            <li><Link to="gallery" smooth={true} duration={1000}>GALLERY</Link></li>
            <li><Link to="rooms" smooth={true} duration={1000}>ROOMS</Link></li>
            <li><Link to="contact" smooth={true} duration={1000}>CONTACT</Link></li>
          </Scrollspy>
        </div>

      </Toolbar>
    </AppBar>
  );
} 
 
export default TopNav;