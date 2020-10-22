import React from "react"
import { useHistory } from "react-router-dom";
import userService from "../../services/UserService";
import {toast} from 'react-toastify';

const ForgetForm = ()=>{
  let history = useHistory();
  const [email,setEmail] = React.useState("")
    return(
        <div className="contact1">
        <h3>Forget Password?</h3>
       
        <form> 
          <p className="p">
            <label>Email Address</label>
            <input className="card1" type="email" name="email" value={email} onChange={(e)=>{
              setEmail(e.target.value)
            }} autoComplete="off" />
          </p>
          <p> 
            <button className="loginBtn"onClick={e=>{
              e.preventDefault()
              window.location.href ="/"
              userService.forgetPassword(email).then(data=>{
                console.log(data)
                toast.success("Check Your Email", {
                  position: toast.POSITION.TOP_LEFT
                });
                
              }).catch(err=>{
                console.log(err)
              })
            }}>Send Email</button>
          </p>
          </form>
          
      </div>
    ) 
}

export default ForgetForm