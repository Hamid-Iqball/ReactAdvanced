import { postApi } from "../../Modal/Posts/postApi"

const postViewModal = (set,get)=>{
    posts:[]

    fettchPosts:async (set,get)=>{
    const response = await postApi.getPost()
    const data = await response.data
    set({posts:data})
}
}

export default postViewModal