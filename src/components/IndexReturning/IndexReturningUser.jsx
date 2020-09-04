/**
 * Index for user who have logged in
 * there would be a pen for them to write
 * there will be a search menu on top
 * trending locations will be included here
 * 
 */

  
import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import{ Drawer} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import ReportsReturning from "../ReportsReturning/ReportsReturning";
import Notification from "../Notification/Notification";
import HeaderR from "../HeaderR/HeaderR";
import Footer from "../Footer/Footer"
import UserProfile from '../ProfilePage/UserProfile';
import {useHistory} from "react-router-dom"

export const PageNavigator = React.createContext()


const drawerWidth = 440;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor:'#151e29',
    color:'rgb(206, 204, 204)',
    alignContent:"center",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
   },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
   },
  drawerPaper: {
    width: drawerWidth,
},
  drawerContainer: {
    overflow: 'auto',
    backgroundColor:'#151e29',
    color:'rgb(206, 204, 204)',
    height:"100vh"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    height:"auto 100vh",
   
  },
}));



 function IndexReturningUser() {
    const classes = useStyles();
   // const screenwidth = window.innerWidth
   let history = useHistory()
         
    const [smallscreen, setSmallscreen] = useState(true);
      const [HandleReports, setHandleReports] = useState(true)
      const [HandleProfile, setHandleProfile] = useState(false)
      const [HandleNotifs, setHandleNotifs] = useState(false)

   const size = ()=>{
     const screenwidth = window.innerWidth
    if (screenwidth < 1023) {
      setSmallscreen(true)
      }
    if (screenwidth >= 1023){
    setSmallscreen(false)
    }
    }
 useEffect(() => {
      size()
      window.addEventListener('resize',size)
         return () => {
      }
    }, [])
   const ProfileHandler=()=>{
      setHandleProfile(true)
      setHandleReports(false)
     setHandleNotifs(false)
     history.push("/home")
    }
   const NotifsHandler=()=>{
      setHandleNotifs(true)
      setHandleReports(false)
      setHandleProfile(false)
      history.push("/home")
      
    }
   const ReportsHandler=()=>{
      setHandleReports(true)
      setHandleProfile(false)
      setHandleNotifs(false)
      history.push("/home")
      }
    return (
       
        <div className={classes.root}>
          <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <HeaderR/>
            </Toolbar>
        </AppBar>
      
        <main className={classes.content}>
          <Toolbar />
           {/*exchached here*/}
            { HandleReports? 
         <PageNavigator.Provider value={setHandleReports}>
      <ReportsReturning />
        </PageNavigator.Provider>
         : null}
        
         {HandleNotifs ? <Notification />:null}
         {HandleProfile?<UserProfile />:null}
         
           </main> 

           {
             smallscreen ? 
             
             <Footer  ProfileHandler={()=>ProfileHandler()} NotifsHandler={()=>NotifsHandler()} ReportsHandler={()=>ReportsHandler()} />:
             <>
             <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="right"
        >
          <Toolbar />
         {/* <Notification /> */}
         <UserProfile  />
        </Drawer>
       
        
       
        </>
           }
        
      </div>
      
    );
  }
 
 export default IndexReturningUser
 