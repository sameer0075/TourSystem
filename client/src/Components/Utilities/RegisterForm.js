import React from "react"
import {Link} from "react-router-dom"
import userService from "../../services/UserService"
import {toast} from 'react-toastify';
import {Button} from "@material-ui/core"
import { useHistory } from "react-router-dom";



const RegisterForm = ()=>{
  let history = useHistory();
   const [name,setName] = React.useState("")
   const [email,setEmail] = React.useState("")
   const [phone,setPhone] = React.useState("")
   const [city,setCity] = React.useState("")
   const [password,setPassword] = React.useState("")
   
  //  function onSubmit(){
  //   axios.post("/register",{
  //     name:name,
  //     email:email,
  //     phone:phone,
  //     password:password
  //   }).then(res=>{
  //     console.log(res.data);
  //   }).catch(err=>{
  //     console.log(err);
  //   })
  //  }
  

    return(
        <div className="contact">
        <h3>Register</h3>
      
        <form> 
           <p>
            <label>Name</label>
            <input className="card1" type="text"value={name} onChange={(e)=>{setName(e.target.value)}} name="name"autoComplete="off" required />
            </p>
            <p>
            <label>Email Address</label>
            <input className="card1" type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} name="email"autoComplete="off" required/>
            </p>
           <p>
            <label>Phone Number</label>
            <input className="card1" type="text" value={phone} onChange={(e)=>{setPhone(e.target.value)}} name="phone"autoComplete="off" required/>
            </p>

            <p>
            <label>City</label>
            <input className="card1" type="text" value={city} onChange={(e)=>{setCity(e.target.value)}} name="city"autoComplete="off" required/>
            </p>

          <p>
            <label>Password</label>
            <input className="card1" type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}} name="password"autoComplete="off" required/>
            </p>
          
            <Button className="full btn"onClick={(e)=>{
              userService.register(name,email,phone,city,password).then(data=>{
                console.log(data)
                toast.success("Registered Successfully", {
                  position: toast.POSITION.TOP_LEFT
                });
                 history.push("/")

              }).catch(err=>{
                console.log(err)
               
                toast.error(err.response.data, {
                  position: toast.POSITION.TOP_LEFT
                });
                  
              })
            }}>Submit</Button>
          
             <Link to="/" className="a">Already Have an Account ?</Link>
          </form>
      </div>
    )
}

export default RegisterForm;