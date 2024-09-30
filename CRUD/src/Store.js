import axios from "axios"
import { create } from "zustand"


export const useStore = create((set,get)=>({
posts:[],
isLoading:false,
isError:null,

fetchPosts:async ()=>{
    set({isLoading:true})
try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    set({posts:res.data})

} catch(error) {
    set({error:error})
    
} finally{
    set({isLoading:false})
}
},


deletePost:(id)=>{
   set(()=>({
    posts:get().posts.filter(post=>post.id!==id)
   }))
},

addName:async(newPost)=>{
    try {
        set({isLoading:true})
        const res = await axios.post("https://jsonplaceholder.typicode.com/users",newPost)
        set((state)=>({
            posts:[...state.posts,res.data]
        }))
    } catch (error) {
        console.log(error)
    } finally{
        set({isLoading:false})
    }
}
,

updateName:async (updateName,id)=>{
    set({isLoading:true})
    try {
        const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,{name:updateName})
        set({posts:get().posts.map((post)=>
         post.id===id?{...post,name:res.data.name} :post
        )})
    } catch (error) {
        console.log(error)
    }finally{
        set({isLoading:false})
    }
}



}))

