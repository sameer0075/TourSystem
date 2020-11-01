import React from "react"
import NewPasswordForm from "./NewPasswordForm"


const NewPassword = (props)=>{
    return(
        <div className="loginContainer">
        <h1 className="brand"><span>Make</span> Your Trip</h1>
        <div className="wrapper animated bounceInLeft">
          <div className="company-info">
            <h3>Make Your Trip</h3>
            <ul>
              <li><i className="fa fa-road"></i> 44 Something st</li>
              <li><i className="fa fa-phone"></i> (555) 555-5555</li>
              <li><i className="fa fa-envelope"></i> test@acme.test</li>
            </ul>
          </div>
           <NewPasswordForm token={props.match.params.token}/>
        </div>
      </div> 
    )
}

export default NewPassword