const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 10;
const nodemailer = require("nodemailer")
const joi = require("@hapi/joi");
const _ = require("lodash");
const cors = require("cors");

// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
// javascript
// const sgMail = require('@sendgrid/mail')
// sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// const msg = {
//     to: 'sameerbutt151@gmail.com', // Change to your recipient
//     from: 'makeyourtrippakistan@gmail.com', // Change to your verified sender
//     subject: 'Sending with SendGrid is Fun',
//     text: 'and easy to do anywhere, even with Node.js',
//     html: '<strong>and easy to do anywhere, even with Node.js</strong>',
//   }

//   sgMail
//   .send(msg)
//   .then(() => {
//     console.log('Email sent')
//   })
//   .catch((error) => {
//     console.log("msg123");
//     console.error(error)
//   })




const app = express();

app.use(cors());

app.use(express.json())

app.use(express.static(__dirname + '/public'));

 


  mongoose.connect("mongodb://localhost:27017/postDB", 
  {useNewUrlParser: true,useUnifiedTopology:true,useFindAndModify:false});

  /////////////////////////////////////    Post Related Routes and Schemas's   //////////////////////////////////
  const postSchema =  new mongoose.Schema({ 
    
        heading:String,
        place:String,
        city:String,
        image:String,
        address:String,
        description:String,
        days:String,
        price:Number,
        setDate:String,
        arrivalDate:String,
        guideName:String,
        guideNumber:String
    
    
});


// user model
const Post = mongoose.model("Post", postSchema);

// validate product middleware
function validatePost(data){
    const schema = joi.object({
        heading:joi.string().required(),
        place:joi.string().required(),
        city:joi.string().required(),
        image:joi.string().uri().required(),
        description:joi.string().required(),
        price:joi.number().required(),
        setDate:joi.string().required(),
        arrivalDate:joi.string().required(),
        guideName:joi.string().required(),
        guideNumber:joi.string().required(),
        days:joi.string().required(),
        address:joi.string().min(9).required()
    })
    return schema.validate(data,{abortEarly:false})
}



// insert post
app.post("/addpost",auth,(req,res)=>{
    console.log(req.body)
    let {error} = validatePost(req.body)
    if(error){return res.status(400).send(error.details[0].message);}
    const postDetails = new Post({
        heading:req.body.heading,
        place:req.body.place,
        city:req.body.city,
        image:req.body.image,
        address:req.body.address,
        description:req.body.description,
        days:req.body.days, 
        price:req.body.price,
        setDate:req.body.setDate,
        arrivalDate:req.body.arrivalDate,
        guideName:req.body.guideName,
        guideNumber:req.body.guideNumber
    });

    postDetails.save().then(()=>{
        console.log("Post Saved Successfully")
        return res.send(postDetails);
    }).catch(err=>{console.log(err)})
});

//get all posts
app.get("/home",(req,res)=>{
 Post.find({},(err,found)=>{
     if(!err){
         if(found){
             return res.send(found)
         }
     }
 })
}) 

//update post
app.put("/update/:id",auth,(req,res)=>{
    let {error} = validatePost(req.body)
    if(error){return res.status(400).send(error.details[0].message);}
    Post.findById({_id:req.params.id},(err,found)=>{
        if(!err){
            if(found){
                found.heading = req.body.heading,
                found.place=req.body.place,
                found.city=req.body.city,
                found.image=req.body.image,
                found.address=req.body.address,
                found.description=req.body.description,
                found.days=req.body.days,
                found.price = req.body.price,
                found.setDate=req.body.setDate,
                found.arrivalDate=req.body.arrivalDate,
                found.guideName=req.body.guideName,
                found.guideNumber=req.body.guideNumber
                found.save();
                return res.send(found)
            }
            else{
                res.status(400).send("Invalid Id");
            }
        }
    })
   })

   // get single post
   app.get("/detail/:id",(req,res)=>{
       Post.findById({_id:req.params.id},(err,found)=>{
           if(err){
               res.status(400).send("Post with given id not found")
           }
           else{
               if(found){
                   res.send(found)
               }
               else{
                   res.status(400).send("id not found")
               }
           }
       })
   })

   // delete post
   app.delete("/home/:id",auth,(req,res)=>{
    Post.findOneAndDelete({_id:req.params.id},(err,found)=>{
        if(!err){
            if(found){
                console.log("Post Deleted");
                return res.send(found)
                 res.status(200).send("Post deleted Successfully");
            }
            else{
             return res.status(400).send("Product With given ID is not present");
            }
        }
    })
})
  /////////////////////////////////////    Post Related Routes and Schemas's   //////////////////////////////////







  ///////////////////////////////   User Authentication Routes and Schema's   /////////////////////////////////
  
  // user schema
  const userSchema = mongoose.Schema({
      name:String,
      email:String,
      phone:String,
      city:String,
      password:String,
      role:{
          type:String,
          default:"user"
      },
      post:[postSchema],
      resetLink:{
          type:String,
          default:""
      }
  });

  const User = mongoose.model("User",userSchema);

  //user apply posts
  app.put("/appliedposts/:idPost/:idUser",(req,res)=>{
    Post.findById({_id:req.params.idPost},(err,foundPost)=>{
        if(!err){
            if(foundPost){
                User.findById(req.params.idUser, (err2,foundUser)=>{
                    if(!err2){
                        if(foundUser){
                            var found=false;
                            foundUser.post.forEach((post)=>{
                                if(JSON.stringify(post) === JSON.stringify(foundPost)){
                                    // return  res.status(200).send(post)
                                    found=true;
                                     
                                }
                            })
                            if(!found){
                                console.log("Not found!");
                                foundUser.post.push(foundPost);
                                foundUser.save();
                                return res.send(foundPost);
                            }
                            else {
                                console.log("found!");
                                return res.status(400).send("Post already applied");
                                
                            }
                            
                            
                            
                      
                        }
                    }
                })
            }
        }
     })
  })


//users get posts
  app.get("/myposts/:id",(req,res)=>{
      User.findOne({_id:req.params.id},(err,found)=>{
          if(!err){
              if(found){
                  res.send(found.post)
              }
          }
      })
  })

  // user model
  

//mail
  function sendMail(name,email,output){
      
  let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
          user: 'makeyourtrippakistan@gmail.com',
          pass: 'sameerbutt877'
      }, tls: {
        rejectUnauthorized: false
    }
  });
  
  let mailOptions = {
      from: 'makeyourtrippakistan@gmail.com',
      to: email,
      subject: 'Make Your Trip',
      text: 'Check our latest Trips at Make Your Trip',
      html:output
  };
  
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('success');
  }); 
  }


  // Validate User middleware for signup
  function validateUser(data){
    const schema = joi.object({
        name:joi.string().min(3).max(15).required(),
        email:joi.string().email().required(),
        phone:joi.string().min(10).required(),
        city:joi.string().required(),
        password:joi.string().min(3).max(20).required(),
        role:joi.string().max(5)
    })
    return schema.validate(data,{abortEarly:false})
}

// Validate User middleware for Login
function validateUserLogin(data){
    const schema = joi.object({
        email:joi.email().required,
        password:joi.string().min(3).max(20).required
    })
    return schema.validate(data,{abortEarly:false})
}

//auth
async function auth(req,res,next){
    let token = req.header("x-auth-token");
    if(!token){
        return res.status(400).send("Token not provided")
    }
    try{
        let user = jwt.verify(token,"makeyourtrip");
        req.user = await User.findById(user._id);
        next();
    }
    catch(err){
        return res.status(401).send("Invalid Token")
    }
}


function reset(resetLink){
   let reset1=resetLink ;
   return reset1
}

// reset password
let v;
app.post("/forgetpassword",(req,res)=>{
    User.findOne({email:req.body.email},(err,found)=>{

        if(!err){
            if(found){
              let token = jwt.sign({_id:found._id},"makeyourtrip",{expiresIn:'10m'})
              found.resetLink = token
              found.save()
              console.log(found.resetLink)
           
              const output = `
              <h3>Dont Worry if you forgot your password</h3>
              
              <a href='http://localhost:3000/resetpassword/${token}'>Click here to reset your password</a>
            `;
              sendMail(found.name,found.email,output)
            //   res.send(found.resetLink)
            }
            else{
                res.status(400).send("Invalid Email")
            }
        } 
    })
})

 app.put("/resetpassword/:token",(req,res)=>{
    console.log("reset password called");
    // console.log(v)
    // req.params.token = v;
    console.log(req.params.token)
    User.findOneAndUpdate({resetLink:req.params.token},{password: req.body.password},(err,found)=>{
    if(!err){
        if(found){
            console.log("found called")
            bcrypt.hash(req.body.password,saltRounds,(err2,hash)=>{
                if(!err2){
                    found.password = hash
                    found.save()
                    console.log(found.password)
                }
            })
        }else{
            res.status(400).send("Invalid Token")
        }
    }
})
 });

//reset password










app.get("/getusers",auth,(req,res)=>{
    User.find({role:"user"},{_id:0,__v: 0,role:0,password:0},(err,found)=>{
        if(!err){
                if(found){
                    console.log(found)
                    res.status(200).send(found)
                }       
        }
    })
})


//register route
app.post("/register",(req,res)=>{
    const output = `
      <h3>Congratulation on Signing Up to Make Your Trip</h3>
      <h3>Hello ${req.body.name}</h3>
      <p>Enjoy Our daily Trips at Make Your Trip</p>
    `;
    try{
      User.findOne({email:req.body.email},(err,found)=>{
          if(!err){
            
               if(found){
                  console.log("User already exists");
                  res.status(400).send("User with this Email already Exists")
                  return;
              }
              else{
                bcrypt.hash(req.body.password,saltRounds,(err,hash)=>{
                    // let {error} = validateUser(req.body)
                    // if(error){return res.status(400).send(error.details[0].message);}
                    const user = new User({
                      name:req.body.name,
                      email:req.body.email,
                      phone:req.body.phone,
                      city:req.body.city,
                      password:hash,
                      role:req.body.role
                    })
                    user.save();
                   
                    let token = jwt.sign({_id:user._id,name:user.name,role:user.role},"makeyourtrip")
                    let dataToReturn = {
                        name:user.name,
                        email:user.email,
                        phone:user.phone,
                        token:token
                    }
                    console.log("Registered Successfully");
                    console.log(dataToReturn)
                   res.send(dataToReturn);
                    sendMail(req.body.name,req.body.email,output) //call sendMail Function
                    // sendSMS("AC949b531af5f9a3630838e4aa89d1ab6d","6d73e3e8610797227f043b861b7e1bd3",req.body.phone)
                })   
                
              }
              
          }
      })
    }

    catch(err){
      console.log(err);
      res.status(400).send(err);
    }
});




//Login post route 
app.post("/",(req,res)=>{
    User.findOne({email:req.body.email},(err,found)=>{
        if(!err){
            if(!found){
                res.status(400).send("User not registered")
                return
            }
            else{
                bcrypt.compare(req.body.password,found.password,(err,result)=>{
                  if(!err){
                      if(!result){
                        res.status(400).send("Invalid Password")
                        return
                      }
                      else{
                        let token = jwt.sign({_id:found._id,name:found.name,role:found.role},"makeyourtrip")
                        console.log("Login successfull",token);
                        res.status(200).send(token) 
                        
                        // res.redirect("/")
                      }
                  }
                })
            }
        }
    })

})


app.listen(5000,()=>{
    console.log("Server is running at port 5000");
})

