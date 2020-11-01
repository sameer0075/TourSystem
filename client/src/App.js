import React from 'react';
import { BrowserRouter, Route,Switch, Redirect } from "react-router-dom"
import Navbar from "./Components/Utilities/Navbar"
import About from "./Components/Utilities/About"
import History from "./Components/Utilities/History"
import Login from "./Components/Login/Login"
import Register from "./Components/Register/Register"
import Home from "./Components/Home/Home";
import ForgetPassword from "./Components/Utilities/ForgetPassword";
import AddPost from "./Components/AddPost/AddPost"
import UpdatePost from "./Components/AddPost/UpdatePost"
import GetUsers from "./Components/Details/GetUsers"
import Details from "./Components/Details/Details"
import notFound from "./Components/Utilities/notFound"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NewPassword from "./Components/Utilities/NewPassword"
import userService from "./services/UserService"
import { useHistory } from "react-router-dom";
import MyPosts from "./Components/MyPosts/MyPosts"
import Footer from "./Components/Utilities/Footer"

function App() {
  let history = useHistory();
  return (
    <div className="App">
      <BrowserRouter>
      <ToastContainer />
      <Navbar />
      <Switch>

      <Route  path="/about">
         <About />
       </Route>

       <Route  path="/history">
         <History />
       </Route>

       <Route exact path="/">
         <Login />
       </Route>
     
       <Route  path="/register">
         <Register /> 
       </Route> 

       <Route  path="/home">
         <Home />
       </Route>
     
       <Route  path="/forgetpassword">
         <ForgetPassword />
       </Route>

       <Route path="/resetpassword/:token" component={NewPassword} />
      
       

       <Route path="/myposts/:id">
           <MyPosts />
       </Route>
      
       {userService.isAdmin() ?
       <Route  path="/addpost">
         <AddPost />
       </Route>  : <Route path="/not-found" component={notFound} /> }
       
       {userService.isAdmin() ? 
       <Route  path="/getusers">
         <GetUsers />
       </Route> : <Route path="/not-found" component={notFound} /> }
        
       {userService.isAdmin() ? <Route path="/update/:id" component={UpdatePost} /> : <Route path="/not-found" component={notFound} /> }

       <Route path="/detail/:id" component={Details} />

       <Route path="/not-found" component={notFound} />
     
       <Redirect to="/not-found" />

      </Switch>
      <Footer />

     

       



       

      </BrowserRouter>
    </div>
  );
}

export default App;
