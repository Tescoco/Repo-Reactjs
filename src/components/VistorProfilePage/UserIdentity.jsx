import React,{useEffect,useState} from 'react'
import {CardHeader,
    Card,Grid,Avatar,Typography,} 
    from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
    //
      
       minWidth:310,
       minHeight:70,
      maxWidth: 645,
      maxHeight:300,
      position:"fixed",
      backgroundColor:'#151e29',
      color:'rgb(206, 204, 204)',
      zIndex:90,
      
      },
    Wholebody:{
      //  marginRight:80,
        paddingLeft:26,
    },
    avatar: {
      backgroundColor: red[500],
    
    },
    media: {
        height: 0,
      paddingTop: '15%', // 16:9 paddingtop has efect on image
        color:'rgb(206, 204, 204)',
    //   marginTop:"-9%",
         maxHeight:"10%",
         maxWidth:"10%",

        // margin:"relative"
        

      },
      UserIdentity:{
        
        display:"inline"
      },
      rank:{
        marginLeft:"5%",
        display:"inline"
          },
      buttonProgress: {
        color: green[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
      },
    typography: {
        whiteSpace:"nowrap",
        fontFamily: [
            'Raleway',
            'sans-serif',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            '-apple-system',
            '"Helvetica Neue"',
            'Arial',
            'Roboto',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),},
          fontWeight: 800,
     
    
  }));

function UserIdentity() {
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
  const [loadinghandler, setloadinghandler] = useState(true)
   const [user, setuser] = useState([])
  useEffect(() => {
    var getQueryString = function ( field, url ) { 
        var href = url ? url : 
        window.location.href;
         var reg =
         new RegExp( '[?&]' + field +
     '=([^&#]*)', 'i' ); 
    var string = reg.exec(href); 
    return string ? string[1] : null; };

  const userId =  getQueryString('user')
//     const userId = window.location.href
 //   console.log(userId);
    fetch(`${process.env.REACT_APP_API_URL}/user/${userId}`,{
      method:"GET",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
        Authorization:`Bearer ${isAuthenticated().token}`
      }
    })
    .then(response =>{
    return response.json()
    })
    .then(data =>{
      if(data.error){
        console.log("ERROR");
      }
      else{
        setloadinghandler(false)
       setuser(data)
        }
    })
    return () => {
     // cleanup
    }
  },[])

    const classes = useStyles();
    return (
        <div>
         
      <Grid  className={classes.Wholebody}item xs={12}>
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
          <span aria-label="emoji" aria-labelledby="emoji" role="img">{user.Dp}</span>
          </Avatar>
        }
        color=" rgb(206, 204, 204)"
        
        title={
            <>
   {loadinghandler && <CircularProgress  className={classes.buttonProgress} size={24}  />}
        <Typography className={classes.UserIdentity} component="p">
 
    <>
    {user.Username}    
    </>
 
 </Typography>

 <Typography className={classes.rank} component="p">
 
 <>
 Rank:{user.rank}
 </>

</Typography>
        </>
    }
     
      />
      
    </Card>
    </Grid>
        </div>
    )
}

export default UserIdentity
