import React from "react"
import {Link} from "react-router-dom"
import userService from "../../services/UserService";
import {Button} from "@material-ui/core"
import {toast} from 'react-toastify';
import { useHistory } from "react-router-dom";
const LoginForm = (props)=>{

  let history = useHistory();
  const [email,setEmail] = React.useState("");
  const [password,setPassword] = React.useState("")

    return(
        <div className="contact1">
        <h3>Login</h3> 
      
        <form> 
          <p className="p">
            <label>Email Address</label>
            <input className="card1" type="email"  value={email} onChange={(e)=>{setEmail(e.target.value)}} name="email" autoComplete="off" />
          </p>
          <p>
            <label>Password</label>
           
            <input className="card1" type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}} name="password"autoComplete="off"></input>
          </p>
          <p>
            <Button className="loginBtn"onClick={e=>{
              userService.login(email,password).then(data=>{
                console.log(data)
                window.location.href="/home"
              }).catch(err=>{
                console.log(err)
                toast.error(err.response.data, {
                  position: toast.POSITION.TOP_LEFT
                });
              })
            }}>Submit</Button>
          </p>
          </form>
          <Link to="/register" className="a">Dont Have an Account ?</Link>
          <Link style={{display:"block"}} to="/forgetpassword" className="a">ForgetPassword ?</Link>
      </div>
    )
}

export default LoginForm;