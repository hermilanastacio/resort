import React, { useLayoutEffect, useState, useMemo } from 'react';

const TopNav = () => {
  const [scaleTopNav, setScaleTopNav] = useState(false);

  function scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
      setScaleTopNav(false);
    } else {
      setScaleTopNav(true);
    }
  }

  useLayoutEffect(() => {
    window.onscroll = function() {scrollFunction()};
  },[]);
  
  return (
    <header style={{backgroundColor: scaleTopNav ?  "blue" : "#fff", position:"fixed", width:"100%", zIndex:2000}}>
      Test

    </header>
  );
}
 
export default TopNav;