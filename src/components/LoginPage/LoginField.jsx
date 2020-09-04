import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {TextField,Typography} from '@material-ui/core';
import LoginButton from "./LoginButton"
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  

  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
  margin: {
    justifyContent: 'center'
  },
  successlogin:{
    color:green[500]
  }
}));

export default function LayoutTextFields() {
 
  const classes = useStyles(); const [UserName, setUserName] = useState("")
  const[Password  , setPassword] = useState("")
  const [Successmssg, setSuccessmssg] = useState("")
  const [Error, setError] = useState("")
  return (
     <div className={classes.root}>
      <div>
       
      <Typography color="inherit" align="center" variant="h5" >
    Log in
       </Typography>
       <Typography color="error" align="center" variant="body2" >
   {Error}
       </Typography>
       <Typography className={classes.successlogin} align="center" variant="body2" >
   {Successmssg}
       </Typography>
       <form className={classes.root} noValidate >
     
        <TextField
          id="standard-full-width standard-required username"
          label="UserName"
          style={{ margin: 8 }}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          autoFocus
          name="username"
          required
           value={UserName}
          onChange={e=>setUserName(e.target.value)}
        />
         <TextField
          required
          id="standard-full-width standard-required password"
          label="Password"
          style={{ margin: 8 }}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
           type="password"
          autoComplete="current-password"
          value={Password}
          onChange={e=>setPassword(e.target.value)}
        />
      <LoginButton setSuccessmssg={setSuccessmssg} setError={setError} password={Password}  Username={UserName}  />
        </form> 
    
   </div>
    </div>
  );
}
