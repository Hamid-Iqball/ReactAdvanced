import {  useEffect } from "react"
import { useState } from "react"
import { getPosts } from "../Services/postApiHitting"
// import Error from "./Error"
/* eslint-disable react/prop-types */
function Post({posts,setPosts}){

// const  [error, setError] = useState(null)
const [showDescription , setShowDescription] = useState([])

useEffect(function(){
    async function fetchData(){
        try {
            const data = await getPosts()
            setPosts(data)
            console.log(data)
        } catch (error) {
        console.error(error)
        }
    }
    fetchData()
},[])

    function handleChange(i){
        setShowDescription((prevState)=>({
            ...prevState,
            [i]: !prevState[i]
        }))
    }

    return <div>
        <h1 className="font-bold text-2xl text-center m-2">
            Post title
        </h1>
        {/* {error ? <Error>{error} </Error>:  */}
        <ul className="from-neutral-600 bg-orange-300 grid grid-cols-2 items-start">
           {posts?.slice(0,10).map((post, index) => (
            <>
            <div className="flex">
            <li key={post.index} className="border my-2 p-2 mx-2 bg-orange-300 rounded-md">{post.title} {showDescription[index] &&  
                <p className="p-2 bg-orange-200"> {post.body}</p>}
            <button onClick={()=>handleChange(index)} className="ml-2 border-2 p-1 border-orange-950 rounded-md">{showDescription[index] ? "Hide" : "Show"} </button>
            </li>
            </div>
            </> 
          ))}
        </ul>
        {/* } */}
    </div>
}

export default Post
