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

export default function CoverReturning() {
     
  const classes = useStyles()

  return (<>
    <div className={classes.root} key="rootcover" style={{marginTop:"28ch"}}>
      <div key="wrappercover" className={classes.wrapper}>
        
        <CircularProgress key="progress"  size={34} className={classes.buttonProgress} />
      </div>
    </div>
    <div key="maincover" className={classes.cover}></div>
    </>
  );
}
