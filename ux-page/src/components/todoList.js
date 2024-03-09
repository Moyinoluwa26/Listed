import React from 'react';
import { useEffect, useState } from 'react';
import Loading from './loading';
import { useSelector, useDispatch } from 'react-redux';
import { setPosts } from '../state';
import { MdDeleteSweep } from "react-icons/md";

function Todo() {
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    //const usery = useSelector(state => state.auth.user);
    const Posts = useSelector(state => state.auth.posts);

    const user = localStorage.getItem('user');
    const userId = JSON.parse(user)._id;

    const dispatch = useDispatch();
    const updatePosts = (newPosts) => {
        dispatch(setPosts({ posts: newPosts }));
    };


    const handleDelete = async (postId) => {
        try {
            const response = await fetch(`http://localhost:4000/api/item/${postId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            if (!response.ok) {
                throw new Error('Failed to delete post');
            }

            else if (response.ok) {
                alert('Todo deleted successfully');
                console.log('Todo deleted successfully');
            }

            // Remove the deleted post from the todos array
            updatePosts(todos.filter(todo => todo.id !== postId));
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };


    useEffect(() => {
        const fetchPosts = async () => {
            setIsLoading(true);

            try {
                // Make a GET request to fetch user's posts from the backend
                /* const response = await axios.get('/api/posts');
 
                 // Update the state with the fetched posts
                 setTodos(response.data);
 
                 // Reset error state
                 setError(null);*/
                const response = await fetch(`http://localhost:4000/api/item/${userId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch data');

                }

                // Parse the JSON response
                const data = await response.json();
                const sortedPosts = data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

                // Update the state with the fetched posts
                setTodos(sortedPosts);


                setError(null);



            } catch (error) {
                // Set error state if an error occurs
                setError(error.message);
            } finally {
                // Set loading state back to false after the request completes
                setIsLoading(false);
            }
        };

        // Call the fetchPosts function when the component mounts
        fetchPosts();
    }, [userId, Posts,]);



    return (
        <div className='bg-white w-1/3 mt-5 rounded-2xl mx-auto py-5'>
            <h2 className='text-lg mb-2 ml-3'>Your Todo Lists : </h2>
            {isLoading ? (
                <h1><Loading /></h1>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <ul className='justify-between'>
                    {todos.map(post => (
                        <li key={post.timestamp} className=' flex border-2 py-5 px-5 justify-between'>
                            <div className=' '>{post.item}</div>
                            <div className='w-12 my-auto'><MdDeleteSweep onClick={() => handleDelete(post.timestamp)} size={30} className='  m-6' /></div>
                        </li>
                    ))}

                </ul>
            )}
        </div>
    );
}

export default Todo;

/*{() => {
                            fetch(`http://localhost:4000/api/item/${post._id}`, {
                                method: 'DELETE',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                            }).then(() => {
                                setTodos(todos.filter(todo => todo._id !== post._id));
                            });
                        }}*/ 