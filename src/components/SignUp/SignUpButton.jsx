import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonfail: {
    backgroundColor:"primary",
    '&:hover': {
      backgroundColor:"primary",
    },
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor:green[500],
    },
  },
  fabProgress: {
    color: green[500],
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1,
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

export default function CircularIntegration({Dp,setSuccessmssg,setError,email,password,state,Username,error}) {
  const SubmitSignUp = e =>{
    const user = {
      Username,
       email,
       password,
       state,
       Dp
      
      
    }
    signUp(user)
    .then(data =>{
       if(data.error){ setLoading(false);setError(data.error);setvalidated(false);setSuccessmssg('')}
      else {setLoading(false);setSuccessmssg(data.message);setError("");setvalidated(true)}
    })
  //  console.log(user);
  // e.preventDefault()

  }
  const signUp = user =>{
   return fetch(`${process.env.REACT_APP_API_URL}/signup`,{
      method:"POST",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
      },
      body: JSON.stringify(user)
})
.then(response =>{
//  console.log(response);
     return response.json()
})
.catch()
  }



  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
 const [fail] = React.useState(true);
  const [validated, setvalidated] = React.useState(false);
  const timer = React.useRef();

  const buttonClassname = clsx({
    [classes.buttonfail]: fail,
  });
  const buttonClassname2 = clsx({
    [classes.buttonSuccess]: fail,
  });


  React.useEffect(() => {
    const timers = timer.current
    return () => {
      clearTimeout(timers);
    };
  }, []);

  const handleButtonClick = () => {
    if(!loading){
      setLoading(true)
      
    }
  
  };

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
      { !validated ? <Button
          variant="contained"
          color="primary"
          className={buttonClassname}
          disabled={loading}
          onClick={()=>{
            handleButtonClick();
            SubmitSignUp();
          }}
        
        >
         Sign Up
        </Button> : 
         <Button
          variant="contained"
          color="primary"
          className={buttonClassname2}
          disabled={loading}
          onClick={()=>{
            handleButtonClick();
            SubmitSignUp();
          }}
        
        >
         Sign Up
        </Button> }

       
       {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
      </div>
    </div>
  );
}
