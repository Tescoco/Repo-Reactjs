import React, { useState,useEffect } from 'react';
import Index from './components/Index/Index'
import Header from './components/Header/Header';
import Reports from './components/Reports/Reports';
import withRoot from './withRoot'
import LinkRouter from "./LinkRouter";
import { BrowserRouter } from "react-router-dom";
import Cover from './components/Cover/Cover';


export const UserContext = React.createContext()
  
function App() {
  const [Newuser, setNewuser] = useState(true)

  useEffect(() => {
    if (localStorage.getItem("jwt")) {
    if (true) {
      setNewuser(false)
    }
    
    } 
    else {
     setNewuser(true)
    }
    return () => {
  //    cleanup
    }
  }, [])
  
  return (
    <div>
       { Newuser ?
       <><UserContext.Provider value={setNewuser}>
     <Header />
       </UserContext.Provider>
       <Index /> 
     
      <Reports />
    <Cover />
      </> :
     <BrowserRouter>
      <UserContext.Provider value={setNewuser}>
      <LinkRouter />
      </UserContext.Provider>
      </BrowserRouter>
      }
      </div>
      
      
     
  );
}

export default withRoot(App);
