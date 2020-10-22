import GenericService  from "./GenericService"
import jwtDecode from "jwt-decode"

class UserService extends GenericService{
    constructor(){
        super();
    } 

    login = (email, password) =>
    new Promise((resolve, reject) => {
      this.post("/", { email, password })
        .then((token) => {
          localStorage.setItem("token", token);
          resolve(token);
        })
        .catch((err) => {
          reject(err);
        });
    }); 
    register = (name,email,phone,city,password)=>this.post("/register",{name,email,phone,city,password})

    updateUser = (idPost,idUser,data)=>this.put("/appliedposts/" + idPost + "/" + idUser,data)

    // forgetPass = (email)=>this.post("/forgetpassword",{email})

    // resetPass = (email,password)=>this.post("/resetpassword",{email,password})

    logout = ()=>{
        localStorage.removeItem("token");
    }

    isLoggedIn = ()=>{
        return localStorage.getItem("token") ? true : false
    }

    getSingleUser = (id)=>this.get("/myposts/" + id)

    getAllUsers = ()=>this.get("/getusers")
   
    //ask this
    getLoggedInUser = () => {
        try {
          console.log('get logged in user method called');
          const jwt = localStorage.getItem("token"); 
          var obj = jwtDecode(jwt);
          console.log(obj);
          return obj
        } catch (ex) {
          return null;
        }
      } 
      
      //ask this
      isAdmin = ()=>{
        if(this.isLoggedIn()===true){
           if(this.getLoggedInUser().role === "admin") return true; else return false
        }else return false
      }

      isUser = ()=>{
        if(this.isLoggedIn()===true){
           if(this.getLoggedInUser().role === "user") return true; else return false
        }else return false
      }

      forgetPassword = (email)=>{
        this.post("/forgetpassword",{email})
      }

      resetPassword = (password,token)=>{
        this.put("/resetpassword/"+token,{password})
      }
}

let userService = new UserService();
export default userService;