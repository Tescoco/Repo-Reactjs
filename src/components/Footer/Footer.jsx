import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {BottomNavigation,BottomNavigationAction,} from '@material-ui/core';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import AssistantIcon from '@material-ui/icons/Assistant';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';

const useStyles = makeStyles({
  root: {
    width: "100%",
    backgroundColor :'#151e29',
    color:'',
    bottom:0,
    position:"fixed",
    zIndex:"99"
  },
});

export default function LabelBottomNavigation({ProfileHandler,NotifsHandler,ReportsHandler}) {
  const classes = useStyles();
  const [value, setValue] = React.useState('Reports');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === "Reports"){
      ReportsHandler()
    }
    if (newValue === "Profile"){
      ProfileHandler()
    }
    if (newValue === "Notifs"){
      NotifsHandler()
    }
  };

  return (
   <>
  <BottomNavigation  value=  {value}   onChange={handleChange} className={classes.root}>
       <BottomNavigationAction  label="Profile"  style={{ color: "grey" }}  value="Profile" icon={<PermIdentityIcon color="secondary" />} />
     <BottomNavigationAction label="Reports" style={{ color: "grey" }} value="Reports" icon={<AssistantIcon  style={{ color: "green" }}/>} />
      <BottomNavigationAction   label="Notifs" style={{ color: "grey" }} value="Notifs" icon={<NotificationImportantIcon style={{ color: "blue" }} />} />
   </BottomNavigation>
      </>
  );
}
