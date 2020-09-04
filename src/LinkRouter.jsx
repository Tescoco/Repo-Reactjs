import React from "react"
import { Route,Switch,BrowserRouter} from "react-router-dom"
import UserProfile from "./components/VistorProfilePage/UserProfile"
import IndexReturningUser from "./components/IndexReturning/IndexReturningUser";
import CoverReturning from "./components/Cover/CoverReturning";

const LinkRouter = () =>{
    return(
    <div  style={{backgroundColor:"#151e29"}}>
        <BrowserRouter>
        <IndexReturningUser />
       <Switch>
       {/* <Route exact path="/home" component={CoverReturning} /> 
       <Route exact path="/" component={CoverReturning} />
       */}
           <Route exact path="/&user=:userId" component={UserProfile} /> 
           <Route exact path="/&user=:userId" component={CoverReturning} />  
           </Switch> </BrowserRouter>
    </div>)
}

export default LinkRouter