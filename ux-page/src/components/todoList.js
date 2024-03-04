import React from 'react';
import { useEffect, useState } from 'react';
import Loading from './loading';
//import { useSelector } from 'react-redux';

function Todo() {
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    /*const user = useSelector(state => state.auth.user);
    const userId = user._id;*/
    const user = localStorage.getItem('user');
    const userId = JSON.parse(user)._id;


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

                // Update the state with the fetched posts
                setTodos(data);


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
    }, [userId]);



    return (
        <div className='bg-white w-1/3 mt-5 rounded-2xl mx-auto'>
            <h2>User's Posts</h2>
            {isLoading ? (
                <h1><Loading /></h1>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <ul>
                    {todos.map(post => (
                        <li key={post.id}>{post.item}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Todo;