import { postApi } from "../../Modal/Posts/postApi"
import { axiousInstance } from "../../Modal/Utils/axiousInstamce"

const postViewModal = (set,get)=>({
    posts:[],

    fetchPosts:async ()=>{
    const response = await postApi.getPost()
    const data = await response.data
    set({posts:data})
    },
   
    deletePost :async (id)=>{
        try{
        await postApi.deletePost(id)
        set({posts:get().posts.filter((post)=>post.id !== id)})
        console.log("Deleted")
        }catch(error){
        console.error(error.message)
        }
    }
}
)
export default postViewModal