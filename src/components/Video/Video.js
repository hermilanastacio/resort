import React from 'react';
import styles from './Video.module.scss';

const backgroundVideo = require('../../assets/videos/background.mp4');

const Video = () => {
  return(
    <video autoPlay muted loop id={styles.bgVideo}>
      <source src={backgroundVideo} type="video/mp4"/>
      Your browser does not support HTML5 video.
    </video>
  );
}
 
export default Video;