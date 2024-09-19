import { usePost } from "../ViewModal/PostViewModal/userServices"
import useStore from "../ViewModal/Store/store"


function Post({Post}) {
const {deletePost} = useStore()
  return (
<div className="text-yellow-900 p-4 border-2 border-yellow-800 rounded-md">
<h2 className="font-semibold text-xl mb-2 uppercase">{Post.title}</h2>
<p>{Post.body}</p>
<button onClick={()=>deletePost(Post.id)} className="border-2 p-1 border-yellow-800 rounded-md mt-2 hover:bg-yellow-700 hover:text-yellow-50">Delete</button>
</div>
  )
}

export default Post