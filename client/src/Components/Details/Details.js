import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import postService from "../../services/PostService";


// import {Link} from "react-router-dom" 


const UpdatePost = (props) =>{
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
  const [price,setPrice] = React.useState(0)

  const id = props.match.params.id;
 React.useEffect(()=>{
     postService.getSinglePost(id)
     .then(data => {
         setHeading(data.heading)
         setPlace(data.place)
         setCity(data.city)
         setImage(data.image)
         setAddress(data.address)
         setDescription(data.description)
         setDays(data.days)
         setPrice(data.price)
         setSetDate(data.setDate)
         setArrivalDate(data.arrivalDate)
         setGuideName(data.guideName)
         setGuideNumber(data.guideNumber)
     })
 },[])


return(
    // <div className="detailContainer">
    // <h1 className="brand"><span>Make</span> Your Trip</h1>
    // <div className="wrapper animated bounceInLeft">

    <section className="text-gray-700 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={image} />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-md title-font tracking-widest"style={{color:"white"}}>Make Your Trip</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1"style={{color:"white"}}>{heading}</h1>
        <div className="flex mb-4">
     
        </div>
<p className="leading-relaxed"><strong>Place</strong> : {place}</p>
<p className="leading-relaxed"><strong>City</strong> : {city}</p>
<p className="leading-relaxed"><strong>Address</strong> : {address}</p>
<p className="leading-relaxed"><strong>Description</strong> : {description}</p>
<p className="leading-relaxed"><strong>Days</strong> : {days}</p>
<p className="leading-relaxed"><strong>Set Date</strong> : {setDate}</p>
<p className="leading-relaxed"><strong>Arrival Date</strong> : {arrivalDate}</p>
<p className="leading-relaxed"><strong>Guide Name</strong> : {guideName}</p>
<p className="leading-relaxed"><strong>Guide Number</strong> : {guideNumber}</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
        
          <div className="flex ml-6 items-center">
           
          </div>
        </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900 card1 link1">PKR {price}</span>
          <button className="card1 flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"onClick={(e)=>{
 history.push("/home")
}}>Back</button>
         
        </div>
      </div>
    </div>
  </div>
</section>


      
  //   </div>
  // </div>
)

}

export default UpdatePost




{/* <div className="contact2">
        <h3>Details</h3>
        
<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Heading</th>
      <th scope="col">Place</th>
      <th scope="col">City</th>
      <th scope="col">Address</th>
      <th scope="col">Description</th>
      <th scope="col">Days</th>
      <th scope="col">SetDate</th>
      <th scope="col">ArrivalDate</th>
      <th scope="col">GuideName</th>
      <th scope="col">GuideNumber</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td><strong>{heading}</strong></td>
      <td><strong>{place}</strong></td>
      <td><strong>{city}</strong></td>
      <td><strong>{address}</strong></td>
      <td><strong>{description}</strong></td>
      <td><strong>{days}</strong></td>
      <td><strong>{setDate}</strong></td>
      <td><strong>{arrivalDate}</strong></td>
      <td><strong>{guideName}</strong></td>
      <td><strong>{guideNumber}</strong></td>
    </tr>
  </tbody>
</table>
<Button  variant="contained" color="primary"onClick={(e)=>{
 history.push("/home")
}}>Back</Button>
         
             {/* <Link to="/" className="a">Already Have an Account ?</Link> */}
         
      // </div> */}




