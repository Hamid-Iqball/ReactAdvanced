import { useEffect, useState } from 'react';
import { useStore } from './Store';
import toast from 'react-hot-toast';

function Posts() {
    const { posts, fetchPosts, deletePost, addName, updateName } = useStore();
    const [name, setName] = useState(''); 
    const [editId, setEditId] = useState(null); 
    const [editName, setEditName] = useState(''); 


    function validateName(name){
      if(name.startsWith(" ")){
        toast.error("Name must start with a letter")
        return false
      } else if 
      (!name.length > 0){
        toast.error("Name is required")
        return false
      }
       else if 
      (name.length < 3){
        toast.error("Name must be grater than 3")
        return false
      } 

      return true
    }


    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    async function handleDelete(id) {
        try {
            await deletePost(id);
            toast.success("Name Deleted succusssfully")
        } catch (error) {
           toast.error("Could not delete Name")
           console.log(error)
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if(validateName(name)){

          if (name.trim()) {
            try {
              addName({ name });
              setName(""); 
              toast.success("Name added successfully")
            } catch (error) {
              console.log(error);
              toast.error("Couldn't add name successfully")
            }
          }
        }
    }

    function handleEditClick(post) {
        setEditName(post.name); 
        setEditId(post.id); 
    }

    async function handleEditSubmit(e) {
        e.preventDefault();
        if (validateName(editName) && editId) {
            try {
                await updateName(editName, editId);
                setEditId(null); 
                setEditName(""); 
                toast.success("Successfully updated name")
            } catch (error) {
                console.log(error);
            }
        }
    }


    return (
        <div className='max-w-3xl mx-auto'>
         
            <form onSubmit={handleSubmit}>
                <div className='p-2 flex gap-6 min-w-full'>
                    <label htmlFor="name" className='text-slate-50 text-2xl font-semibold'>Enter Your Name</label>
                    <input
                        type="text"
                        value={name}
                        className='px-2 ring ring-slate-50 border-slate-50'
                        onChange={(e) => setName(e.target.value)}
              
                    />
                    <button type='submit' className='border border-slate-50 p-1 bg-slate-50 text-slate-900 font-semibold'>
                        Submit
                    </button>
                </div>
            </form>

  
            {editId !== null && (
                <form onSubmit={handleEditSubmit} className='mt-4'>
                    <div className='p-2 flex gap-6 min-w-full'>
                        <label htmlFor="editName" className='text-slate-50 text-2xl font-semibold'>Edit Name</label>
                        <input
                            type="text"
                            value={editName}
                            className='px-2 ring ring-slate-50 border-slate-50'
                            onChange={(e) => setEditName(e.target.value)}
                   
                        />
                        <button type='submit' className='border border-slate-50 p-1 bg-slate-50 text-slate-900 font-semibold'>
                            Update
                        </button>
                        <button
                            type='button'
                            onClick={() => {
                                setEditId(null); 
                                setEditName(""); 
                            }}
                            className='border border-red-500 p-1 bg-red-500 text-slate-900 font-semibold'
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            )}

         
            {posts.map((post) => (
                <div className='text-slate-50 border border-slate-50 p-4 my-2 grid grid-cols-[40fr,40fr,10fr,10fr] gap-2 items-center' key={post.id}>
                    <h1>{post.name}</h1>
                    <p>Id #: {post.id}</p>
                    <button
                        className='border border-slate-50 p-1 bg-slate-50 text-slate-900 font-semibold'
                        onClick={() => handleEditClick(post)}
                    >
                       Update
                    </button>
                    <button
                        className='border border-slate-50 p-1 bg-slate-50 text-slate-900 font-semibold'
                        onClick={() => handleDelete(post.id)}
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Posts;
