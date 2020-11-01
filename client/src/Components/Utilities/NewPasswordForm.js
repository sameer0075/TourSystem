import React from "react"
import { useHistory } from "react-router-dom";
import userService from "../../services/UserService";
import {toast} from 'react-toastify';

const NewPasswordForm = (props)=>{
    let history = useHistory();
    // const [email,setEmail] = React.useState("")
    const [password,setPassword] = React.useState("")
    let t = props.token
    return(
        <div className="contact1">
        <h3>Change Password</h3> 
      
        <form> 
          <p className="p">
          {/* <label>Enter Email</label>
            <input className="card1" type="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} autoComplete="off" /> */}
            <label>Enter New Password</label>
            <input className="card1" type="text" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} autoComplete="off" />
          </p>
          <p>
            <button className="loginBtn"onClick={e=>{
              e.preventDefault()
                window.location.href ="/"
              userService.resetPassword(password,t).then(data=>{
                console.log(data)
                toast.success("Password Reset", {
                  position: toast.POSITION.TOP_LEFT
                }); 
               
              }).catch(err=>{
                console.log(err)
              })
            }}>Change Password</button>
          </p>
          </form>
          
      </div>
    ) 
}

export default NewPasswordForm