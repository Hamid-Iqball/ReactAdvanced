
import { useState } from "react"
import CreatePost from "./CreatePost"
import Post from "./View/post"


function App() {
  const [posts, setPosts] = useState([])
  return (
    <div className="bg-orange-300 h-screen">
    <Post posts={posts} setPosts={setPosts}/>
    <CreatePost posts={posts} setPosts={setPosts}/>
    </div>
  )
}

export default App