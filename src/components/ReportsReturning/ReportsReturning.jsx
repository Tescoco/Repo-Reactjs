import React,{useState,useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card,Grid,Popover} from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import {CardActions} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red,green } from '@material-ui/core/colors';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import {PageNavigator} from "../IndexReturning/IndexReturningUser"
import CreateIcon from '@material-ui/icons/Create';
import Postfield from '../Post/Postfield'
import CoverReturning from '../Cover/CoverReturning';

const useStyles = makeStyles((theme) => ({
  root: {
  //  maxWidth: 645,
 backgroundColor:'#151e29',
    color:'rgb(206, 204, 204)',
    minWidth:290
   
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

  content:{
    marginTop :-2,
  },
 
}));

export default function ReportsReturning() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [Blur, setBlur] = React.useState(null);

  const makeapost = (event) => {
    setAnchorEl(event.currentTarget);
    setBlur("blur(4px)")
  };

  const handleClose = () => {
    setAnchorEl(null);
    setBlur(null)
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;



  const [Posts, setPosts] = useState([])

   const [homeCover, sethomeCover] = useState(true)
   const [createIconTop, setcreateIconTop] = useState("70%")
  const [createIconLeft, setcreateIconLeft] = useState("80%")
  const [postBoxTop, setpostBoxTop] = useState("-90%")
  const [postBoxLeft, setpostBoxLeft] = useState("6%")
  
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
   const setHandleReports =  useContext(PageNavigator)
 
  const setHandleReportsfunction =()=>{
    setHandleReports(false)
  }
  const [rightPath, setrightPath] = useState(true) 
  useEffect(() => {
  if (window.location.href.match(/user/g) ){
      setrightPath(false)
      
}
if (window.location.href.match(/\/home/g) ){
  setrightPath(true)
  
}
if (window.innerWidth > 1023){
  setcreateIconLeft("55%")
  setcreateIconTop("80%")
}
if (window.innerWidth > 600){
  setpostBoxTop("-22%")
  setpostBoxLeft("10%")
 }


    fetch(`${process.env.REACT_APP_API_URL}/allposts`,{
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
        sethomeCover(false)
       setPosts(data)
        }
    })
  
    return () => {
     }
  }, [])
 
  const moment = require ("moment")
  
 return (
   <>
   {rightPath && 
  <>
      
   <Grid
  container
  direction="column"
 alignItems="center"
 style={{ filter: Blur}}
 key={"container"}
> 
 {
    Posts.map((Post,index) => {
     return  (
     <>
    
    <Grid  key={index + 13} item xs={12}>
    <Card key={index + 12} className={classes.root}>
      <Link key={index + 11} className={classes.link} onClick={setHandleReportsfunction} to={`&user=${Post.postedBy._id}`}>
      <CardHeader key={index + 10}
        avatar={
          <Avatar key={index + 9} aria-label="recipe" className={classes.avatar}>
             <span key={index + 8} aria-label="emoji" aria-labelledby="emoji" role="img">{Post.postedBy.Dp}</span>
          </Avatar>
        }
        color=" rgb(206, 204, 204)"
        
        
        title={Post.postedBy.Username}
        subheader=   {
          <Typography key={index + 6} variant="body2"  component="p">
          
           {
            /// moment()
           moment(Post.created).fromNow()
           }
           </Typography>
           }

      />
      </Link>
     

      <CardContent className={classes.content} key={index  +  5}>
        <Typography key={index  + 4} variant="body2" component="p">
          {Post.body}
         </Typography>
      </CardContent>
      <CardActions key={index  + 3} disableSpacing>
      </CardActions>
     
    </Card>
    </Grid>
    </>
    )
  }
     )
   }
    <CreateIcon onClick={makeapost} key={"Create"}  style={{ position:"fixed",left:createIconLeft,top:createIconTop,zIndex:"30",color:green[500],fontSize: 34 }}/>
    <Popover
    position="absolute"
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorPosition={{ top: 10, left: 0 }}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
        style={{
        marginTop:postBoxTop,marginLeft:postBoxLeft}}
        key={"Popover"}
      >
        <Postfield key={"Createpopover"}  handleClose={handleClose}/>
        </Popover>
  
 </Grid> 
        { homeCover && <CoverReturning key={"Cover"} />    }
</>}
</>
  );
}