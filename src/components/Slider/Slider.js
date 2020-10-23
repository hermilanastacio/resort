import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const Slider = (props) => {
  return (
    <Drawer open={props.open} onClose={() => props.onShow(false)}>
      <List style={{paddingTop:50}}>
        {['DASHBOARD', 'ABOUT', 'GALLERY', 'ROOMS', 'CONTACT'].map((text, index) => (
          <React.Fragment key={index}>
            <ListItem button style={{padding:"0.9375rem 4.375rem"}}>
              <ListItemText primary={text} />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
}
 
export default Slider;