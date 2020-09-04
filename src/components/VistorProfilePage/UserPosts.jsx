import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card,Grid} from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import {CardActions} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red,green } from '@material-ui/core/colors';
import { useEffect } from 'react';
import CoverVistorPage from '../Cover/CoverVistorpage';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 645,
 backgroundColor:'#151e29',
    color:'rgb(206, 204, 204)',
    
   
  },
  WholeBody:{
    paddingTop:"30%"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    color:'rgb(206, 204, 204)',
  },
  
  avatar: {
    backgroundColor: red[500],
  },
  link:{
    textDecoration:"none",
   color: green[300],
  }
  
}));

export default function ReportsReturning() {
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
  const [loadingHandler, setloadingHandler] = useState(true)
const [User, setUser] = useState([])
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
    fetch(`${process.env.REACT_APP_API_URL}/posts/${userId}`,{
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
        setloadingHandler(false)
       setUser(data)
        }
    })
    return () => {
     // cleanup
    }
  },[])
  const moment = require ("moment")

   
 return (
   
  
           
   <Grid
  container
  direction="column"
 alignItems="center"
 className={classes.WholeBody}
> 
 {
    User.map((Post,index) => {
     return  (
     <>
    
    <Grid key={index} item xs={12}>
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
          <span aria-label="emoji" aria-labelledby="emoji" role="img">{Post.postedBy.Dp}</span>
          </Avatar>
        }
        color=" rgb(206, 204, 204)"
        
        
        title={Post.postedBy.Username}
        subheader=   {
          <Typography variant="body2"  component="p">
          
           {
            moment(Post.created).fromNow()
           }
           </Typography>
           }
      />
    {/** <CardMedia
        className={classes.media}
        image="http://www.krugerpark.co.za/images/black-maned-lion-shem-compion-590x390.jpg"
        title="Paella dish"
      />*/}
      <CardContent>
        <Typography variant="body2" component="p">
          {Post.body}
         </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
       
        </IconButton>
        <IconButton aria-label="share">
         
        </IconButton>
      </CardActions>
     
    </Card>
    </Grid>
    </>
    )
  }
     )
   }
<CoverVistorPage loadingHandler={loadingHandler}/>
 </Grid> 

  );
}