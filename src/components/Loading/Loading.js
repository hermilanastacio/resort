import React from 'react';
import { Fade } from '@material-ui/core';

const loadingImg = require('../../assets/loading.gif');

const Loading = (props) => {
  return(
    <Fade in={props.isLoading} timeout={{ exit:12000 }}>
      <div style={{backgroundColor:"#222", height:"100%", width:"100%", position:"absolute", display:"flex", alignItems:"center", justifyContent:"center"}}>
        <img src={loadingImg} alt="loading gif" style={{height:120, width: 120}}/>
      </div>
    </Fade>
  );
}
 
export default Loading;