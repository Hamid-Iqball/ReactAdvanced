import React, { useEffect, useState } from 'react'
import { useStore } from './Store'

function Posts() {
const {posts , fetchPosts,createPost,deletePost} = useStore()


useEffect(function(){
  fetchPosts()
},[fetchPosts])

async function handleDelete(id){
try {
  await deletePost(id)

} catch (error) {
  console.log("could not be deleted")
}
}
console.log(posts)
  return (
    <div className='max-w-3xl mx-auto'>

  {posts.map((post)=>
  <div className='text-slate-50 border border-slate-50 p-4 my-2 flex justify-between items-center'>
    <h1>
    {post.title}
    </h1>
    <span> {post.id}</span>
<button className='border border-slate-50 p-1' onClick={()=>handleDelete(post.id)} >Delete</button>
  </div>
)}

    </div>
  )
}

export default Posts
