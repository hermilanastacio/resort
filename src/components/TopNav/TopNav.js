import React, { useLayoutEffect, useState } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { AppBar, Toolbar } from '@material-ui/core';
import Scrollspy from 'react-scrollspy'
import styles from './TopNav.module.scss';
import { Link } from 'react-scroll'
import { Menu as MenuIcon } from '@material-ui/icons';

const logoImg = require('../../assets/images/logo.png');

const TopNav = (props) => {
  const [scaleTopNav, setScaleTopNav] = useState(false);
  const matches = useMediaQuery('(min-width:992px)');

  function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
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
    <div className={styles.root}>
      <AppBar position="fixed" className={scaleTopNav ? styles.scale : styles.shrink}>
        <Toolbar style={{minHeight: 0}}>
          <img src={logoImg} alt="logo" className={styles.logoImg}/>

          <div className={styles.scrollSpyWrapper}>
            {matches
              ? <Scrollspy items={pages} currentClassName={styles.active}>
                  <li><Link to="dashboard" smooth={true} duration={1000}>DASHBOARD</Link></li>
                  <li><Link to="about" smooth={true} duration={1000}>ABOUT</Link></li>
                  <li><Link to="gallery" smooth={true} duration={1000}>GALLERY</Link></li>
                  <li><Link to="rooms" smooth={true} duration={1000}>ROOMS</Link></li>
                  <li><Link to="contact" smooth={true} duration={1000}>CONTACT</Link></li>
                </Scrollspy>
              : <MenuIcon 
                  className={styles.hamburgerButton} 
                  onClick={() => props.onShow(true)}
                />
            }
          </div>

        </Toolbar>
      </AppBar>
    </div>
  );
} 
 
export default TopNav;