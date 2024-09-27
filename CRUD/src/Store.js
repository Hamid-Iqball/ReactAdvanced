import {create} from 'zustand'
import axios from 'axios'

export const useStore = create((set)=>({
posts:[],
isLoading:false,
isError:null,

fetchPosts:async ()=>{
    set({isLoading:true})
try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    set({posts:res.data,isLoading:false})
    console.log(posts)
} catch (error) {
    set({error:'Cannot fetch Posts',isLoading:false})
}
},

deletePost:(id)=>{
   set((state)=>({
    posts:state.posts.filter(post=>post.id!==id)
   }))
},
createPost:(newPost)=>{
set((state)=>{
    [...state.posts,newPost]
})
},


}))

