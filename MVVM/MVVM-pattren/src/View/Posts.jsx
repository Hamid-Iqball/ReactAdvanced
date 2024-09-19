import { useEffect } from "react"
import { usePost } from "../ViewModal/PostViewModal/userServices"
import Post from "./Post"

function posts() {
   const {posts,fetchPosts,deletePost} = usePost()
   console.log(posts)
   useEffect(function(){
    fetchPosts()
   },[])
  return (
   <div className="grid grid-cols-3 gap-4 ">
    {posts?.map(post => <Post Post={post}/>)}
   </div>
  )
}

export default posts