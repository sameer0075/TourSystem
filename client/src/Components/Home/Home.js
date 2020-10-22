import React from "react";
import Card from "../Utilities/Card"
import {Grid,Button} from "@material-ui/core"
import {Link} from "react-router-dom" 
import postService from "../../services/PostService";
import userService from "../../services/UserService";
import { useHistory } from "react-router-dom";


  


function Home(){ 

    let history = useHistory();
    
 
const getPost = () => { 
    postService.getPosts().then((data)=>{
        setPosts(data)
    })
    .catch(err=>{
        console.log(err)
    })
}






    const [posts,setPosts] = React.useState([])

   React.useEffect(getPost,[]);
    console.log("Getting all Posts");



    return(
        <div>
        {userService.isUser() &&
<button className="card1 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={(e)=>{
  let id = userService.getLoggedInUser()._id
  console.log("navigate to update")
  history.push("/myposts/"+id)
}}>My Tours</button>}

{userService.isAdmin() &&  <Link to="/addpost">
           <button  className="card1 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Add Post</button>
        </Link> }

        {userService.isAdmin() && <Link  to="/getusers">
        <button className="card1 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Registered Users</button>
        </Link> }


       
      
        {posts.length === 0 ? <h2>There are no Posts</h2> :<Grid container spacing={3}>
            { posts.map((post,index) => <Card key={index} post={post} onDelete={getPost} 
             />) }
            {/* { users.map((user,index2)=><Card key={index2} user={user} /> )} */}
            
        </Grid>}
        
        </div>
    )
}

export default Home 