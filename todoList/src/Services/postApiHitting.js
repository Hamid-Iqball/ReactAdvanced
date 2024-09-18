import axios from "axios"

export const axiosInstance = axios.create({
baseURL: "https://jsonplaceholder.typicode.com",
headers:{
    "Content-Type":"Application/json"
}
})

export const getPosts = async ()=>{
    try {
        const res = await axiosInstance.get("/posts")
        return res.data
    } catch (error) {
        console.error(error)
    }
}

export const createPost = async (postData)=>{
    try {
        const res = await axiosInstance.post('/posts', postData)
        return res.data
    } catch (error) {
        console.error(error)
    }
}