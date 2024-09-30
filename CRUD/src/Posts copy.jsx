import { useEffect, useState } from 'react';
import { useStore } from './Store';

function Posts() {
    const { posts, fetchPosts, deletePost, addName, updateName } = useStore();
    const [name, setName] = useState('');
    const [editId, setEditId] = useState(null); // State to track the ID of the post being edited

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    async function handleDelete(id) {
        try {
            await deletePost(id);
        } catch (error) {
            console.log(error);
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if (name.trim()) {
            try {
                if (editId) {
                   
                    await updateName(name, editId);
                    setEditId(null); 
                } else {
                  
                    addName({ name });
                }
                setName(""); 
            } catch (error) {
                console.log(error);
            }
        }
    }

  
    function handleEditClick(post) {
        setName(post.name); 
        setEditId(post.id);
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
                        {editId ? 'Update' : 'Submit'}
                    </button>
                </div>
            </form>
            {posts.map((post) => (
                <div className='text-slate-50 border border-slate-50 p-4 my-2 grid grid-cols-[40fr,40fr,10fr,10fr] gap-2 items-center' key={post.id}>
                    <h1>{post.name}</h1>
                    <p>Id #: {post.id}</p>
                    <button
                        className='border border-slate-50 p-1 bg-slate-50 text-slate-900 font-semibold'
                        onClick={() => handleEditClick(post)} 
                    >
                        Edit
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
