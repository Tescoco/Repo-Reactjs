


import React,{useState} from 'react';
import {
  ThemeProvider,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles';
import {TextField,Button} from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import SendIcon from '@material-ui/icons/Send';
import { useEffect } from 'react';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
   backgroundColor:'#151e29',
    color:'rgb(206, 204, 204)',
  },
  margin: {
    
    margin: theme.spacing(1),
    width:"99%",
   },
  input:{
    color:'rgb(206, 204, 204)'
  },
  button: {
    margin: theme.spacing(1),
  },

}));



const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

export default function CustomizedInputs({handleClose}) {
  const [body, setbody] = useState("")
  const classes = useStyles();
  const isAuthenticated = () =>{
    if (typeof window == "undefined"){
      return false
    }
    if (localStorage.getItem("jwt")) {
      return JSON.parse(localStorage.getItem("jwt"))
    }
    else{
      return false
    }
  } 
  const Onsubmit = e =>{
    const userpost = {
     body
    }
    submitpost(userpost)

  }
  const [postFieldWidth, setpostFieldWidth] = useState("52vw")
  useEffect(() => {
    if(window.innerWidth < 600)
    setpostFieldWidth("82vw")
   
  }, [])
  const submitpost = userpost =>{
    fetch(`${process.env.REACT_APP_API_URL}/post/new/${isAuthenticated().user._id}`,{
      method:"POST",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
        Authorization:`Bearer ${isAuthenticated().token}`
      },
     body: JSON.stringify(userpost)
    })
    .then(response =>{
   //     console.log(userpost)
    return response.json()
    })
    .then(data =>{
      if(data.error){
    //    console.log("ERROR");
      }
      else{
      // console.log("post sent")
        }
    })
  }
 

  return (
    <form className={classes.root} style={{  width:postFieldWidth}}  noValidate autoComplete="off">
      
      <ThemeProvider theme={theme}>
        
        <TextField
        autoFocus
       className={classes.margin}
          label="What just happened?"
          variant="outlined"
          id="mui-theme-provider-outlined-input"
          multiline
           rows={4}
          InputProps={{
            className:classes.input
          }}  
          value={body}
          onChange={e=>setbody(e.target.value)}
        />
       </ThemeProvider>
        <Button
        disabled={body.length<1 || body.length >199}
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<SendIcon />}
        onClick={() => {Onsubmit();handleClose()}}
      >
        Send
      </Button>
    </form>
  );
}
