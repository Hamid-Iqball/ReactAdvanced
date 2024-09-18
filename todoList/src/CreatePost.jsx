import { useState } from "react"
import { createPost } from "./Services/postApiHitting"

function CreatePost() {
    const [post , setPost] = useState({title:''})
    const [response , setResponse] = useState(null)
    
    const handleSubmit = async (e)=>{
        e.preventDefault()
        try {
            const result = await createPost(post)
            setResponse(result)
        } catch (error) {
            console.log(error.message)
        }
    }
  return (
    <div className="text-center w-44 m-[2rem auto]"> <h2>Create Post</h2>
    <form onSubmit={handleSubmit}>
        <input type="text" value={post.title} onChange={(e)=>setPost({...post ,title: e.target.value})} />
        </form> 
        <button className="bg-orange-700 text-stone-50 p-1 rounded-md m-4 " type="submit" >Submit</button>
        {response && <p className="text-center">{JSON.stringify(response.title)}</p>}
    </div>
  )
}

export default CreatePost