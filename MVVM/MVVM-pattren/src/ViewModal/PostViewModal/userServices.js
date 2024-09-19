import useStore from "../Store/store"

export const usePost = ()=>{
    const posts = useStore((state)=>state.posts)
    const fetchPosts = useStore((state)=>state.fetchPosts)
    return {posts,fetchPosts}
}