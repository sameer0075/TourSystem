import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import userService from "../../services/UserService";
import Table from "../Utilities/Table"


// import {Link} from "react-router-dom" 



const GetUsers = (props) =>{
  let history = useHistory();

  const getUsers = () => {
    userService.getAllUsers().then((data)=>{
        setDetails(data)
    })
    .catch(err=>{
        console.log(err)
    })
}
 
  const [details,setDetails] = React.useState([])
  React.useEffect(getUsers,[]);
  console.log("Getting all Users");
 

 
 


return(
    <div>
        {details.length === 0 ? <h2>There are no Users</h2> :<div>
            { details.map((user,index) => <Table key={index} user={user} />)}
        </div>}

        <button className="card1 flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"onClick={(e)=>{
 history.push("/home")
}}>Back</button>
  </div>
)

}

export default GetUsers









