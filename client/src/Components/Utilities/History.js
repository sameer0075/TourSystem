import React from "react"


const History = ()=>{
   const History = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    
  const [history] = React.useState(History);

//   axios.get("/history").then(res=>{
//     console.log(res.data);
//     setHistory(res.data)
    
//   }).catch(err=>{console.log(err);
//   })
  

  return(
      <div className="card1 loginContainer">
      <h1 className="brand"><span>Make</span> Your Trip</h1>
      <div className="wrapper animated bounceInLeft">
        <div className="company-info">
          <h3>History</h3>
          <ul style={{textTransform:"capitalize",fontWeight:"bold"}}>
            <li> You can see our</li>
            <li> history with other customers</li>
            <li> and can grab a chance to enjoy our Tours </li>
          </ul>
        </div>
         <p style={{fontWeight:"bold",fontSize:"14px",textAlign:"left"}}>{history}</p>
      </div>
    </div>
    )
}

export default History;