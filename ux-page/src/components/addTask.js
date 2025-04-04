import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPosts } from '../state';

function AddTask() {
    const [task, setTask] = useState(' ');
    const [isLoading, setIsLoading] = useState(false);
    /*const user = localStorage.getItem('user');
    const userId = JSON.parse(user)._id;
    "65943d3b46d342a54fdd9159"*/

    const user = useSelector(state => state.auth.user);
    const userId = user._id;
    const dispatch = useDispatch();

    const updatePosts = (newPosts) => {
        dispatch(setPosts({ posts: newPosts }));
    };


    const handleChange = (e) => {
        setTask(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true);



            await fetch(`http://localhost:4000/api/item/${userId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    item: task
                })
            });

            setTask('');
            updatePosts(task)

            alert('Todo added successfully');
        }
        catch (err) {
            console.error('Error adding todo', err);
            alert('Error adding todo')
        } finally {

            setIsLoading(false);
        };
    };


    return (
        <div className='flex flex-cols mx-auto lg:w-1/3 w-96 bg-white  rounded-2xl md:h-24 mt-12 '>


            <form onSubmit={handleSubmit} className='m-auto '>
                <input
                    type="text"
                    value={task}
                    onChange={handleChange}
                    placeholder="  Enter your todo text"
                    required
                    disabled={isLoading} // Disable input field while loading
                    className='p-2 rounded-lg md:mx-2 border-2 md:mt-3 w-64 md:w-96 h-10 my-3 '
                />
                <button type="submit" disabled={isLoading} className='bg-yellow-500 text-white p-2 rounded-lg my-2 mx-2'> {/* Disable button while loading */}
                    {isLoading ? 'Adding Todo...' : 'Add Todo'} {/* Change button text based on loading state */}
                </button>
            </form>
        </div>
    );
}

export default AddTask;