import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    marginLeft:"50%",
    
    backgroundColor:"#151e29"
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'absolute',

  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
  cover:{
  width:"100%",
  height:"62ch",
  backgroundColor:"#151e29"
  }
}));

export default function CoverReturningProfile({cover}) {
     
   
  const classes = useStyles()

  return (<>
  
    <div className={classes.root} style={{marginTop:"28ch"}}>

      <div className={classes.wrapper}>
      {cover && <CircularProgress   size={34} className={classes.buttonProgress} /> } 
      </div>
    </div>
    <div className={classes.cover}></div>
    </>
  );
}
