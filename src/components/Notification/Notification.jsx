/**
 * This will contain locations which are most talked about
 * it will be included in Index returning user
 * 
 */

 import React from 'react'
 import List from '@material-ui/core/List';
 import Divider from '@material-ui/core/Divider';
 import ListItem from '@material-ui/core/ListItem';
 import ListItemIcon from '@material-ui/core/ListItemIcon';
 import ListItemText from '@material-ui/core/ListItemText';
 import { makeStyles } from '@material-ui/core/styles';
 

 const useStyles = makeStyles((theme) => ({
    drawerContainer: {
      overflow: 'auto',
      backgroundColor:'#151e29',
      color:'rgb(206, 204, 204)',
      height:"100vh"
    },
   
  }));
  
  
  
 function Notification() {
    const classes = useStyles();
    
     return (
        <div className={classes.drawerContainer}>
            <List>
              
                  <>
                <ListItem  key="empty">
                  You currently have no notifications...
                 </ListItem>
                 <Divider />
                 </>
              
            </List>
            
          </div>)
 }
 
 export default Notification
 