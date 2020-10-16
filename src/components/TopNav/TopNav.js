import React, { useLayoutEffect, useState } from 'react';
import styles from './TopNav.module.scss';

const logoImg = require('../../assets/images/logo.png');

const TopNav = () => {
  const [scaleTopNav, setScaleTopNav] = useState(false);

  function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      setScaleTopNav(true);
    } else {
      setScaleTopNav(false);
    }
  }

  useLayoutEffect(() => {
    window.onscroll = function() {scrollFunction()};
  },[]);
  
  return (
    <header className={scaleTopNav ? styles.scale : styles.shrink}>
      <img src={logoImg} alt="logo" className={styles.logoImg}/>
    </header>
  );
}
 
export default TopNav;