import React from "react";
import { Grid,Button } from "@material-ui/core";
import postService from "../../services/PostService";
import {withRouter} from "react-router";
import { useHistory } from "react-router-dom";
import userService from "../../services/UserService"
import {toast} from 'react-toastify';
import {Link} from "react-router-dom" 


const Card = (props) =>{
  const [singlePost,setSinglePost] = React.useState([])
  const {post,onDelete} = props
  console.log("Starting User")
  const {user} = props
  // console.log(user)
  console.log(props)
  let history = useHistory();



  const [heading,setHeading] = React.useState("")
  const [place,setPlace] = React.useState("")
  const [city,setCity] = React.useState("")
  const [image,setImage] = React.useState("")
  const [address,setAddress] = React.useState("")
  const [description,setDescription] = React.useState("")
  const [days,setDays] = React.useState("")
  const [setDate,setSetDate] = React.useState("")
  const [arrivalDate,setArrivalDate] = React.useState("")
  const [guideName,setGuideName] = React.useState("")
  const [guideNumber,setGuideNumber] = React.useState("")


 
 const getPost= ()=> {postService.getSinglePost(post._id)
    .then(data => {
        setHeading(data.heading)
        console.log("heading")
        console.log(data.heading)
        setPlace(data.place)
        setCity(data.city)
        setImage(data.image)
        setAddress(data.address)
        setDescription(data.description)
        setDays(data.days)
        setSetDate(data.setDate)
        setArrivalDate(data.arrivalDate)
        setGuideName(data.guideName)
        setGuideNumber(data.guideNumber)
    })
  }




// const getPost = (data)=>{
//   postService.getSinglePost(post.id).then(()=>{
//     setSinglePost(data)
//   }).catch(err=>{
//     console.log(err)
//   })
// }




// let post1 = userService.getLoggedInUser().post



return(      
  <div className="max-w-sm rounded overflow-hidden shadow-lg card1"style={{margin:"20px"}}>
  <img className="w-full" src={post.image} alt="Sunset in the mountains" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{post.heading}</div>
    <p className="text-gray-700 text-base">
    {post.description}
    </p>
    <p className="text-gray-700 text-base">
    days {post.days}
    </p>

    <p className="text-gray-700 text-base">
    price {post.price}
    </p>
  </div>
  <div className="px-6 py-4">
  <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"onClick={(e)=>{
  console.log("Navigate to details")
  history.push("/detail/" + post._id)
}}>Details</button>

{userService.isLoggedIn() && userService.isUser() &&
<button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={e=>{
  let id = userService.getLoggedInUser()._id
  getPost()
  userService.updateUser(post._id,id,{heading,place,city,image,address,description,days,setDate,arrivalDate,guideName,guideNumber}).then(data=>{
    console.log(data)
    console.log("Applied")
    toast.success("Applied Successfully", {
      position: toast.POSITION.TOP_LEFT
    });
    history.push("/home")
  }).catch(err=>{
    console.log(err)
    toast.error(err.response.data, {
      position: toast.POSITION.TOP_LEFT
    });
   history.push("/home")
  })
  // history.push("/appliedposts/"+ post._id + "/" + id)
}}>Apply</button>
} 
 
{userService.isAdmin() && 
<>
<button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={(e)=>{
  console.log("navigate to update")
  history.push("/update/"+post._id)
}}>Edit</button>




<button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick = {(e)=>{
postService.deletePost(post._id).then((data)=>{
  console.log(data)
  toast.success("Post Deleted Successfully", {
    position: toast.POSITION.TOP_LEFT
  });
  onDelete();
})
.catch(err=>{console.log(err)})
}}>Delete</button>
</>}

{/* {userService.isAdmin() &&  <Link to="/addpost">
           <button  className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Add Post</button>
        </Link> }

        {userService.isAdmin() && <Link  to="/getusers">
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Registered Users</button>
        </Link> } */}


 
    
  </div>
</div>
)

}



export default withRouter(Card);

{/* <Grid item xs={3}>
<img src={post.image} className="card-img-top" alt="pic" />
<h5 className="card-title">{post.heading}</h5>
<p className="card-text">{post.description}</p>
<p className="card-text">{post.days} days</p>

<Button variant="contained" color="primary"onClick={(e)=>{
  console.log("Navigate to details")
  history.push("/detail/" + post._id)
}}>Details</Button>

{userService.isLoggedIn() && userService.isUser() &&
<Button variant="contained" color="primary"onClick={e=>{
  let id = userService.getLoggedInUser()._id
  getPost()
  userService.updateUser(post._id,id,{heading,place,city,image,address,description,days,setDate,arrivalDate,guideName,guideNumber}).then(data=>{
    console.log(data)
    console.log("Applied")
    toast.success("Applied Successfully", {
      position: toast.POSITION.TOP_LEFT
    });
    history.push("/home")
  }).catch(err=>{
    console.log(err)
    toast.error(err.response.data, {
      position: toast.POSITION.TOP_LEFT
    });
   history.push("/home")
  })
  // history.push("/appliedposts/"+ post._id + "/" + id)
}}>Apply</Button>
}




{userService.isAdmin() && 
<>
<Button variant="contained" color="primary"onClick={(e)=>{
  console.log("navigate to update")
  history.push("/update/"+post._id)
}}>Edit</Button>




<Button variant="contained" color="primary"onClick = {(e)=>{
postService.deletePost(post._id).then((data)=>{
  console.log(data)
  onDelete();
})
.catch(err=>{console.log(err)})
}}>Delete</Button>
</>}
<hr />
</Grid> */}
