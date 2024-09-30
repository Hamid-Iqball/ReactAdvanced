import axios from "axios"
import { create } from "zustand"


export const useStore = create((set)=>({
posts:[],
isLoading:false,
isError:null,
fetchPosts:async ()=>{
    set({isLoading:true})
try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    set({posts:res.data,isLoading:false})

} catch(error) {
    set({error:error,isLoading:false})
    
}
},

deletePost:(id)=>{
   set((state)=>({
    posts:state.posts.filter(post=>post.id!==id)
   }))
},


addName : async (newPost)=>{
try {
    const res = await axios.post("https://jsonplaceholder.typicode.com/users" , newPost)
    set((state)=>({
        posts:[...state.posts,res.data]
    }))
} catch (error) {
    set({error:error.message})
}
}
  


}))

