import React from 'react';
import { useSelector } from 'react-redux';

function Tasks() {

    const user = useSelector(state => state.auth.user);
    const Posts = useSelector(state => state.auth.posts);


    return (<div>
        {user && <h1>{user.firstName} {user.lastName}</h1>}
        {Posts.map(post => {
            return (
                <div key={post._id}>
                    <h2>{post.item}</h2>

                </div>
            )
        })}

    </div>);
}

export default Tasks;