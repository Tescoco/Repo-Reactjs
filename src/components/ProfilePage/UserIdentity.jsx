import React from 'react'
import {CardHeader,
    Card,Grid,Avatar,Typography,} 
    from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
    
        marginRight:30,
       minWidth:310,
       minHeight:70,
      maxWidth: 645,
      maxHeight:300,
      position:"fixed",
      backgroundColor:'#151e29',
      color:'rgb(206, 204, 204)',
      zIndex:90,
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
        display:"inline",
        marginLeft:"6%"
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
 
    const classes = useStyles();
    return (
        <div> 
         
      <Grid item xs={12}>
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
          <span aria-label="emoji" aria-labelledby="emoji" role="img">{isAuthenticated().user.Dp}</span>
          </Avatar>
        }
      //  color=" rgb(206, 204, 204)"
        
        title={
          
  <>
        <Typography className={classes.UserIdentity}  component="p">
  {isAuthenticated() && (
    <>
    {isAuthenticated().user.Username}
    </>
  )}   
 </Typography>
        <Typography className={classes.rank}  component="p">
        {isAuthenticated() && (
          <>
         Rank: {isAuthenticated().user.rank}
          </>
        )}   
       </Typography>
       </>
    }
     
      />
      
    </Card>
    </Grid>

{/**     <Grid item xs={12}> <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe"
           className={classes.avatar}>
                      <span aria-label="emoji" aria-labelledby="emoji" role="img">😜</span>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
          
          </IconButton>
        }
        title={
            <Typography variant="body2" className={classes.typography}
             color=" rgb(206, 204, 204)"
              component="h6">
                    Users name
           </Typography>
          
        }
        
        subheader=   {
      <>ha</>
           }
           
      />
               <CardMedia
        className={classes.media}
        image="http://www.krugerpark.co.za/images/black-maned-lion-shem-compion-590x390.jpg"
        title="Paella dish"
      />
      <CardContent > 


     
        <Typography variant="body2"
         color=" rgb(206, 204, 204)"
          component="p">
         </Typography>
    </CardContent> 
    </Card>
       </Grid>   */}
   
        </div>
    )
}

export default UserIdentity
