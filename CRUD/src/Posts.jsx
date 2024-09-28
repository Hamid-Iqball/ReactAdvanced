import  { useEffect} from 'react'
import { useStore } from './Store'

function Posts() {
const {posts , fetchPosts,deletePost} = useStore()


useEffect(function(){
  fetchPosts()
},[fetchPosts])

async function handleDelete(id){
try {
  await deletePost(id)
} catch (error) {
  console.log(error)
}
}

console.log(posts)
  return (
    <div className='max-w-3xl mx-auto'>
  <form action="">
  <div className='p-2 flex gap-4'>
  <label htmlFor="" className='text-slate-50 text-2xl font-semibold'>Enter Your Name</label>
  <input type="text" className='px-2 ring ring-slate-50  border-slate-50'   />
  </div>
</form>
  {posts.map((post)=>
  <div className='text-slate-50 border border-slate-50 p-4 my-2 grid grid-cols-[40fr,40fr,20fr] items-center' key={post.id}>
    <h1>
    {post.name}
    </h1>
    <p> Id # : {post.id}</p>
  <button className='border border-slate-50 p-1 bg-slate-50 text-slate-900 font-semibold' onClick={()=>handleDelete(post.id)} >Delete</button>
  </div>
)}

    </div>
  )
}

export default Posts
