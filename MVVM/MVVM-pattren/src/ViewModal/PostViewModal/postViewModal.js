import { postApi } from "../../Modal/Posts/postApi"

const postViewModal = (set,get)=>({
    posts:[],

    fetchPosts:async ()=>{
    const response = await postApi.getPost()
    const data = await response.data
    set({posts:data})
}
}
)
export default postViewModal