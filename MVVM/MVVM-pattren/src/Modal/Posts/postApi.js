import { axiousInstance } from "../Utils/axiousInstamce"

export const postApi ={
   getPost:  ()=>{
   return axiousInstance.request({
    method:"GET",
    url:'posts'
   })
    }

    }
