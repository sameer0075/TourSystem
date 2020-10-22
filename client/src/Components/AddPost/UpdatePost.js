import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import postService from "../../services/PostService";
import {toast} from 'react-toastify';

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
   

<div>
<form className="w-full max-w-lg"style={{margin:"20px auto",border:"5px #3282b8",borderStyle:"inset",padding:"15px",fontSize:"16px"}}>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label style={{fontSize:"14px"}} className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Heading
      </label>
      <input className="card1 appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="heading" type="text"autoComplete="off"  value={heading}   onChange={(e) => {setHeading(e.target.value); }}  required />
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label style={{fontSize:"14px"}} className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Place
      </label>
      <input  className="card1 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" name="place" type="text"autoComplete="off" value={place}  onChange={(e) => {setPlace(e.target.value); }} required/>
    </div>
  
    <div className="w-full md:w-1/2 px-3">
      <label style={{fontSize:"14px"}} className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
       City
      </label>
      <input  className="card1 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" name="city" type="text"autoComplete="off" value={city}  onChange={(e) => {setCity(e.target.value); }} required />
    </div>

    <div className="w-full md:w-1/2 px-3">
      <label style={{fontSize:"14px"}} className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
       Image
      </label>
      <input  className="card1 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" name="image" type="text"autoComplete="off" value={image}  onChange={(e) => {setImage(e.target.value); }} required />
    </div>

    <div className="w-full md:w-1/2 px-3 ">
      <label style={{fontSize:"14px"}} className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
       Address
      </label>
      <input  className="card1 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" name="address" type="text"autoComplete="off" value={address}  onChange={(e) => {setAddress(e.target.value); }} required />
    </div>

    <div className="w-full md:w-1/2 px-3">
      <label style={{fontSize:"14px"}} className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
      Description
      </label>
      <input  className="card1 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" name="description" type="text"autoComplete="off" value={description}  onChange={(e) => {setDescription(e.target.value); }} required />
    </div>

    <div className="w-full md:w-1/2 px-3">
      <label style={{fontSize:"14px"}} className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
       Days
      </label>
      <input  className="card1 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" name="days" type="text"autoComplete="off" value={days}  onChange={(e) => {setDays(e.target.value); }} required />
    </div>

    <div className="w-full md:w-1/2 px-3">
      <label style={{fontSize:"14px"}} className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
       Price
      </label>
      <input  className="card1 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" name="price" type="number"autoComplete="off" value= {price}  onChange={(e) => {setPrice(e.target.value); }} required />
    </div>

    <div className="w-full md:w-1/2 px-3">
      <label style={{fontSize:"14px"}} className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
       Set Date
      </label>
      <input  className="card1 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" name="setDate" type="text"autoComplete="off" value={setDate}  onChange={(e) => {setSetDate(e.target.value); }} required />
    </div>

    <div className="w-full md:w-1/2 px-3">
      <label style={{fontSize:"14px"}} className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
      Arrival Date
      </label>
      <input  className="card1 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" name="arrivalDate" type="text"autoComplete="off" value={arrivalDate}  onChange={(e) => {setArrivalDate(e.target.value); }} required />
    </div>

    <div className="w-full md:w-1/2 px-3">
      <label style={{fontSize:"14px"}} className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
       Guide Name
      </label>
      <input  className="card1 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" name="guideName" type="text"autoComplete="off" value={guideName}  onChange={(e) => {setGuideName(e.target.value); }} required />
    </div>

    <div className="w-full md:w-1/2 px-3">
      <label style={{fontSize:"14px"}} className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
       Guide Number
      </label>
      <input  className="card1 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" name="guideNumber" type="text"autoComplete="off" value={guideNumber}  onChange={(e) => {setGuideNumber(e.target.value); }} required />
    </div>

  </div>
  <Button   variant="contained"color="primary" className="full btn card1 " onClick={(e)=>{
              postService.updatePost(id,{heading,place,city,image,address,description,days,price,setDate,arrivalDate,guideName,guideNumber})
              .then((data)=>{
                console.log(data)
                toast.success("Post Updated Successfully", {
                  position: toast.POSITION.TOP_LEFT
                });
                history.push("/home")
              }).catch((err)=>{
                console.log(err)
                toast.error(err.response.data, {
                  position: toast.POSITION.TOP_LEFT
                });
              })
            }} >Update</Button>

<button className="card1 flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"onClick={(e)=>{
 history.push("/home")
}}>Back</button>
</form>
     
</div>
      
  
)

}

export default UpdatePost
 {/* <form method="POST">
           <p>
            <label>Heading</label>
            <input name="heading" type="text"autoComplete="off"  value={heading}   onChange={(e) => {setHeading(e.target.value); }}  required />
            </p>
           
            <p>
            <label>Place</label>
            <input name="place" type="text"autoComplete="off" value={place}  onChange={(e) => {setPlace(e.target.value); }} required/>
            </p>
           
           <p>
            <label>City</label>
            <input name="city" type="text"autoComplete="off" value={city}  onChange={(e) => {setCity(e.target.value); }} required/>
            </p>

          <p>
            <label>Image</label>
            <input name="image" type="text" autoComplete="off" value={image} onChange={e=>{setImage(e.target.value)}} required/>
            </p>

            <p>
            <label>Address</label>
            <input name="address" type="text" autoComplete="off" value={address} onChange={e=>{setAddress(e.target.value)}} required/>
            </p>

            <p>
            <label>Description</label>
            <input name="description" type="text"autoComplete="off" value={description} onChange={e=>{setDescription(e.target.value)}} required />
            </p>

            <p>
            <label>Days</label>
            <input name="days" type="text" autoComplete="off" value={days} onChange={e=>{setDays(e.target.value)}} required/>
            </p>

            <p>
            <label>Set Date</label>
            <input name="setDate" type="text" autoComplete="off" value={setDate} onChange={e=>{setSetDate(e.target.value)}} required/>
            </p>

            <p>
            <label>Arrival Date</label>
            <input name="arrivalDate" type="text" autoComplete="off" value={arrivalDate} onChange={e=>{setArrivalDate(e.target.value)}} required/>
            </p>
          
            <p>
            <label>Guide Name</label>
            <input name="guideName" type="text" autoComplete="off" value={guideName} onChange={e=>{setGuideName(e.target.value)}} required/>
            </p>
            
            <p>
            <label>Guide Number</label>
            <input name="guideNumber" type="text" autoComplete="off" value={guideNumber} onChange={e=>{setGuideNumber(e.target.value)}} required/>
            </p>
          
            <Button   variant="contained"color="primary" className="full btn" onClick={(e)=>{
              postService.updatePost(id,{heading,place,city,image,address,description,days,setDate,arrivalDate,guideName,guideNumber})
              .then((data)=>{
                console.log(data)
                history.push("/home")
              }).catch((err)=>{
                console.log(err)
                toast.error(err.response.data, {
                  position: toast.POSITION.TOP_LEFT
                });
              })
            }} >Update</Button>
            </form> */}