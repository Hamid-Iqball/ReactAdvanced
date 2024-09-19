import { useEffect } from "react"
import { usePost } from "../ViewModal/PostViewModal/userServices"

function posts() {
   const {posts,fetchPosts} = usePost()
   console.log(posts)
   useEffect(function(){
    fetchPosts()
   },[])
  return (
   <div className="grid grid-cols-3 gap-4 ">
    {posts?.slice(0,10)?.map(post => <p className="text-yellow-800 font-semibold border-2 border-yellow-900 p-4 rounded-md">
        {post.title}
    </p>)}
   </div>
  )
}

export default posts