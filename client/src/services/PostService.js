import GenericService  from "./GenericService"

class PostService extends GenericService{
    constructor(){
        super(); 
    }

    addPost = (data)=> this.post("/addpost",data)
    deletePost = (_id)=> this.delete("/home/" + _id)
    updatePost = (_id,data)=>this.put("/update/" + _id,data)
    getPosts = ()=>this.get("/home")
    getSinglePost = (id)=>this.get("/detail/" + id)
}

let postService = new PostService();
export default postService; 