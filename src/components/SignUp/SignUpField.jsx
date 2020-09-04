import React,{useState,useRef,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {TextField, Typography} from '@material-ui/core';
import SignUpButton from "./SignUpButton";
import {green} from "@material-ui/core/colors"

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
  successmssg:{
    color:green[500]
  }
}));

export default function LayoutTextFields() {
  const classes = useStyles();

  const inputRef = useRef(null)

  useEffect(() => {
  inputRef.current.focus()
    }, [])
  const emojis = [ "😎","😊","😷","😜","😇","😏","😯","👽","👀","😥","😃","🎃","😌","👻"]
  const [UserName, setUserName] = useState("")
  const[Password , setPassword] = useState("")
  const[Dp , setDp] = useState(emojis[Math.floor(Math.random() * 14)])
  const[ Email, setEmail] = useState("")
  const[ State, setState] = useState("")
  const[ Error, setError] = useState("")
  const[ Success, setSuccessmssg] = useState("")

 
  return (
     <div className={classes.root}>
      <div>
       
      <Typography color="inherit" align="center" variant="h5" >
      Sign Up
       </Typography>
       <Typography  color="error" align="center" variant="body2" >
     {Error}
       </Typography>
       <Typography className={classes.successmssg} align="center" variant="body2" >
     {Success}
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
          ref={inputRef}
          value={UserName}
          onChange={e=>setUserName(e.target.value)}
        />
         <TextField
          required
          id="standard-full-width standard-required email"
          label="Email"
          style={{ margin: 8 }}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          type="email"
         value={Email}
          onChange={e=>setEmail(e.target.value)}
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
         <TextField
          required
          id="standard-full-width standard-required state"
          label="State you are located in"
          style={{ margin: 8 }}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
            helperText="This won't be public" 
            value={State}
            onChange={e=>setState(e.target.value)}
        />
        <SignUpButton Dp={Dp} setSuccessmssg={setSuccessmssg} setError={setError} error={Error} email={Email} password={Password} state={State} Username={UserName}/>
        </form> 
      
      </div>
    </div>
  );
}
