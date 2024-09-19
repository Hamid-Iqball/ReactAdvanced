import { axiousInstance } from "../Utils/axiousInstamce"

export const postApi ={
   getPost:  ()=>{
   return axiousInstance.request({
    method:"GET",
    url:'posts'
    })},

    deletePost: (id)=>{
        return axiousInstance.request({
            method:"DELETE",
            url:"posts/1",
            id:id
        })
    }


    }
