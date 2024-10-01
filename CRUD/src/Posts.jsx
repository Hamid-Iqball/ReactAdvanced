import { useEffect, useState } from 'react';
import { useStore } from './Store';
import toast from 'react-hot-toast';
import { DialogWithForm } from './Modal';

function Posts() {
    const { posts, fetchPosts, deletePost, addName, updateName } = useStore();
    const [name, setName] = useState(''); 
    const [editId, setEditId] = useState(null); 
    const [editName, setEditName] = useState(''); 
    const [open, setOpen] = useState(false);
    const [mode, setMode] = useState('add'); 

    const handleOpen = () => setOpen((cur) => !cur);

    function validateName(name) {
        if (name.startsWith(" ")) {
            toast.error("Name must start with a letter");
            return false;
        } else if (!name.length > 0) {
            toast.error("Name is required");
            return false;
        } else if (name.length < 3) {
            toast.error("Name must be greater than 3 characters");
            return false;
        } else if (!/^[a-zA-Z\s]+$/.test(name)) {
            toast.error("Name must not consist of numbers or special characters");
            return false;
        }
        return true;
    }

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    async function handleDelete(id) {
        try {
            await deletePost(id);
            toast.success("Name deleted successfully");
        } catch (error) {
            toast.error("Could not delete Name");
            console.log(error);
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if (validateName(name)) {
            try {
                await addName({ name });
                setName(""); 
                toast.success("Name added successfully");
            } catch (error) {
                console.log(error);
                toast.error("Couldn't add name successfully");
            }
        }
        handleOpen(); 
    }

    function handleEditClick(post) {
        setEditName(post.name);
        setEditId(post.id);
        setMode("edit"); 
        handleOpen();
    }

    async function handleEditSubmit(e) {
        e.preventDefault();
        if (validateName(editName) && editId) {
            try {
                await updateName(editName, editId);
                setEditId(null); 
                setEditName(""); 
                toast.success("Successfully updated name");
            } catch (error) {
                console.log(error);
                toast.error("Could not update the name");
            }
        }
        handleOpen(); 
        setMode("add")
    }

    return (
        <div className='max-w-3xl mx-auto '>
           
            <DialogWithForm 
                mode={mode} 
                handleOpen={handleOpen} 
                open={open} 
                value={mode === 'add' ? name : editName} 
                setName={mode === 'add' ? setName : setEditName} 
                handleSubmit={mode === 'add' ? handleSubmit : handleEditSubmit} 
            />

        
            {posts.map((post) => (
                <div className='text-slate-50 border border-gray-900 p-4 my-2 grid grid-cols-[40fr,40fr,10fr,10fr] gap-2 items-center ' key={post.id}>
                    <h1>{post.name}</h1>
                    <p>Id #: {post.id}</p>
              
                    <button
                        className='border border-gray-900 p-1 bg-slate-50 text-slate-900 font-semibold'
                        onClick={() => handleEditClick(post)}
                    >
                        Edit
                    </button>

               
                    <button
                        className='border border-gray-900 p-1 bg-slate-50 text-slate-900 font-semibold'
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
