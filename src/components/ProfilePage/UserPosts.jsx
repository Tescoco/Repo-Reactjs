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
import CoverReturningProfile from '../Cover/CoverReturningProfile';

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
  },
  noPost:{
    marginTop:"30%"
  }
  
}));

export default function ReportsReturning() {
  const classes = useStyles();
  const [noPost, setnoPost] = useState("")
  const [Posts, setPosts] = useState([])
   const [cover, setcover] = useState(true)
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
 
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/posts/${isAuthenticated().user._id}`,{
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
         setcover(false)
        if (data.length === 0){
          setnoPost("You currently have no reports...")
        }
        
          setPosts(data)
      
        }
    })
    return () => {
     // cleanup
    }
  }, [])
  
  const moment = require ("moment")

   
 return (
   
  <>
    
   <Grid
  container
  direction="column"
 alignItems="center"
 className={classes.WholeBody}
> 
<Typography className={classes.root}>
      {noPost}
    </Typography>
 {
    Posts.map((Post,index) => {
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
  
  
 </Grid> 
 <CoverReturningProfile noPost={noPost} cover={cover} /> 
 </>
  );
}