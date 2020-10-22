import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import userService from "../../services/UserService"




// import {Link} from "react-router-dom" 


const MyPosts = (props) =>{

const [posts,myPosts] = React.useState([])

  let history = useHistory();
let id = userService.getLoggedInUser()._id
console.log("getting id")
console.log(id)
 

const p = ()=>{
  userService.getSingleUser(id).then(data=>{
    console.log(data)
    myPosts(data)
  }).catch(err=>{
    console.log(err)
  })  
}

React.useEffect(p,[])




return(
 


<div>



  

  {posts.map((post,index)=>{
       return (
        <section className="text-gray-700 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={post.image} />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-md title-font tracking-widest"style={{color:"white"}}>Make Your Trip</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1"style={{color:"white"}}>{post.heading}</h1>
              <div className="flex mb-4">
           
              </div>
      <p className="leading-relaxed"><strong>Place</strong> : {post.place}</p>
      <p className="leading-relaxed"><strong>City</strong> : {post.city}</p>
      <p className="leading-relaxed"><strong>Address</strong> : {post.address}</p>
      <p className="leading-relaxed"><strong>Description</strong> : {post.description}</p>
      <p className="leading-relaxed"><strong>Days</strong> : {post.days}</p>
      <p className="leading-relaxed"><strong>Set Date</strong> : {post.setDate}</p>
      <p className="leading-relaxed"><strong>Arrival Date</strong> : {post.arrivalDate}</p>
      <p className="leading-relaxed"><strong>Guide Name</strong> : {post.guideName}</p>
      <p className="leading-relaxed"><strong>Guide Number</strong> : {post.guideNumber}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
              
                <div className="flex ml-6 items-center">
                 
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">$58.00</span>

               
              </div>
            </div>
          </div>
        </div>
      </section>
      
       )
     })}
     
  

     <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"onClick={(e)=>{
       history.push("/home")
      }}>Back</button>
             {/* <Link to="/" className="a">Already Have an Account ?</Link> */}
         
             </div> 
)

}

export default MyPosts









