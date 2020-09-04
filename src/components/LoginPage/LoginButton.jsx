import React,{useContext} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import {UserContext} from '../../App'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
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

export default function CircularIntegration({password ,Username,setSuccessmssg,setError}) {
  const setNewuser =  useContext(UserContext)
  
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [success] = React.useState(false);
  const timer = React.useRef();
  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });

  React.useEffect(() => {
    const timers = timer.current
    return () => {
      clearTimeout(timers);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
   //   setSuccess(false);
      setLoading(true);
     }
  };
 const authenticate = (jwt,next) => {
   if(typeof window !== "undefined"){
     localStorage.setItem("jwt" ,JSON.stringify(jwt))
     next()
   }
 }
  const SubmitLogin = e =>{
    const user = {
        Username,
       password,  }
       Login(user)
       .then(data =>{
        if(data.error !== "undefined"){
        if(data.error){ setLoading(false);setError(data.error);setSuccessmssg('')}
       else {  setLoading(false);setSuccessmssg("Welcome");setError("")
        authenticate(data,()=>{
           setNewuser(false)
           //attension
         })
         } 
       }
     })}

  const Login = user =>{
    return fetch(`${process.env.REACT_APP_API_URL}/signin`,{
       method:"POST",
       headers:{
         Accept:"application/json",
         "Content-Type":"application/json"
       },
       body: JSON.stringify(user)
 })
 .then(response =>{
      return response.json()
 })
 .catch(err => console.log(err))
   }
 

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Button
          variant="contained"
          color="primary"
          className={buttonClassname}
          disabled={loading}
          onClick={()=>{handleButtonClick();SubmitLogin()}}
        >
          Log in
        </Button>
        {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
      </div>
    </div>
  );
}
