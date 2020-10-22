import React from "react";
import { Grid,Button } from "@material-ui/core";
import postService from "../../services/PostService";
import {withRouter} from "react-router";
import { useHistory } from "react-router-dom";
import userService from "../../services/UserService"

const Table = (props)=>{
const {user} = props;
console.log(props)
let history = useHistory();

return(
  <table class="table-auto"style={{margin:"20px auto"}}>
  <thead>
    <tr>
      <th class="px-4 py-2">Name</th>
      <th class="px-4 py-2">Email</th>
      <th class="px-4 py-2">Phone</th>
      <th class="px-4 py-2">City</th>
    </tr>
  </thead>
  <tbody style={{color:"white"}}>
    <tr >
      <td class="border px-4 py-2"><strong>{user.name}</strong></td>
      <td class="border px-4 py-2"><strong>{user.email}</strong></td>
      <td class="border px-4 py-2"><strong>{user.phone}</strong></td>
      <td class="border px-4 py-2"><strong>{user.city}</strong></td>
    </tr>
  </tbody>
</table>
)

}

export default Table


// <table class="table table-striped">
// <thead>
//   <tr> 
//     <th scope="col">#</th>
//     <th scope="col">Name</th>
//     <th scope="col">Email</th>
//     <th scope="col">Phone</th>
//     <th scope="col">City</th>
//   </tr>
// </thead>
// <tbody>
//   <tr>
//     <th scope="row">1</th>
//     <td><strong>{user.name}</strong></td>
//     <td><strong>{user.email}</strong></td>
//     <td><strong>{user.phone}</strong></td>
//     <td><strong>{user.city}</strong></td>
//   </tr>
// </tbody>
// </table>