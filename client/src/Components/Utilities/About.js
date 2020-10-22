import React from "react"



const About = ()=>{
  
  
  
  const about1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
  const [about] = React.useState(about1)
  

//  axios.get("/about").then((res)=>{
//   console.log(res)
//   setAbout(res.data)
//  }).catch(err=>{console.log(err);
//  });

   
  return(
      <div className="card1 loginContainer">
      <h1 className="brand"><span>Make</span> Your Trip</h1>
      <div className="wrapper animated bounceInLeft">
        <div className="company-info">
          <h3>About</h3>
          <ul>
            <li><i className="fa fa-road"></i> 44 Something st</li>
            <li><i className="fa fa-phone"></i> (555) 555-5555</li>
            <li><i className="fa fa-envelope"></i> test@acme.test</li>
          </ul>
        </div>
         <p style={{fontWeight:"bold",fontSize:"14px",textAlign:"left"}}>{about}</p>
      </div>
    </div>
    )
}

export default About;